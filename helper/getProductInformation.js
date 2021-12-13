const axios = require('axios')
const getLine = require('../util/getLine')
const getProductId = require('./getProductId')
const config = require('../config')
const WriteFile = require('../util/wirteFile')
const getLineOfFile = require('../util/lineOfFile')

module.exports = (amount = 1) => {
  const links = getLinks(amount)
  return links.map((link) => {
    const { id, spid } = getProductId(link)
    link = config(id, spid)

    return axios(link).then((res) => {
      return res.data
    })
  })
}
function getLinks(amount) {
  let links = []
  let category = getLine(1, 'csv/currentCrawl.csv')

  let product = getLine(2, 'csv/currentCrawl.csv')
  category = category ? parseInt(category[1]) : 2
  product = product ? parseInt(product[1]) : 2
  let lineOfCategory = getLine(category, 'csv/subCategories.csv')
  if (!lineOfCategory) {
    return []
  }
  if (lineOfCategory.length === 1) {
    saveCrurrentCrawl(category + 1, 1)
    return getLinks(amount)
  }
  let fileName = lineOfCategory[0].split(',')[0].replace(/\ /g, '_')
  fileName = 'csv/link/' + fileName + '.csv'
  let maxLine = getLineOfFile(fileName)
  //   console.log(maxLine, category, product, fileName);
  if (maxLine >= amount + product + 1) {
    product++
    for (let i = product; i <= product + amount; i++) {
      const lineOfProduct = getLine(product, fileName)
      const link = lineOfProduct && lineOfProduct[1]
      link ? links.push(link) : ''
    }
    product += amount
    saveCrurrentCrawl(category, product)
    return links
  }
  product++
  category++
  let count = 0
  for (let i = product; i <= maxLine; i++) {
    const lineOfProduct = getLine(product, fileName)
    const link = lineOfProduct[1]
    link ? links.push(link) : ''
    count++
  }
  product += count
  saveCrurrentCrawl(category, 1)
  const nextLinks = getLinks(amount - count)
  return [...links, ...nextLinks]
}

function saveCrurrentCrawl(lineOfCategory, lineOfProduct) {
  const data = [
    ['Line of category', lineOfCategory],
    ['Line of product', lineOfProduct],
  ]
  const write = new WriteFile('currentCrawl.csv', 'csv')
  write.write(data)
}
