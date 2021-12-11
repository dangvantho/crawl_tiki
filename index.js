const puppeteer = require('puppeteer-extra')
const WriteFile = require('./util/wirteFile')
const subCategory = require('./helper/subCategory')
const getMainCategory = require('./helper/getMainCategory')
const getProductsOfSubCategory = require('./helper/getProductsOfSubCategory')
const getLine = require('./util/getLine')
process.setMaxListeners(0)
class Crawl {
  async crawl(cb) {
    let result
    await puppeteer.launch({ headless: true }).then(async (browser) => {
      const page = await browser.newPage()
      await page.setViewport({ width: 800, height: 600 })
      result = await cb(page)
      await browser.close()
    })
    return result
  }
  async saveSubCategories(categories = []) {
    const writeFile = new WriteFile('subCategories.csv', 'csv')
    const download = []
    categories.forEach((category) => {
      const csv = this.crawl(subCategory(category[1], category[0]))
      download.push(csv)
    })
    await Promise.all(download).then((values) => {
      const rows = []
      values.forEach((value) => {
        rows.push(...value)
      })

      writeFile.write(rows)
    })
  }
  async getProductsOfSubCategory(
    x = 1,
    line = 2,
    fileName = 'csv/subCategories.csv'
  ) {
    const products = []
    const row = await getLine(line, fileName)
    if (!row[1]) return []
    for (let i = 0; i < x; i++) {
      const csv = this.crawl(getProductsOfSubCategory(i + 1, row))
      products.push(csv)
    }
    const values = await Promise.all(products)
    const writeFile = new WriteFile(
      decodeURI(row[0].replace(/\ /g, '_') + '.csv'),
      'csv/link'
    )
    writeFile.append([row[1]])
    values.forEach((item) => {
      item.forEach((row) => writeFile.append(row))
    })
  }
  async getAllProducts(from = 1, to = 121) {
    for (let i = from; i <= to; i++) {
      await this.getProductsOfSubCategory(5, i)
    }
    console.log('Done');
  }
}
async function main() {
  const crawl = new Crawl()
  // await crawl.getAllProducts()
  const categories = getMainCategory()
  await crawl.saveSubCategories(categories)
}
main()
