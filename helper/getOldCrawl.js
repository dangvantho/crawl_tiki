const getLine = require('../util/getLine')
const fs = require('fs')
const WriteFile = require('../util/wirteFile')
module.exports = () => {
  if (!fs.existsSync('csv/currentCrawl.csv')) {
    const writeFile = new WriteFile('currentCrawl.csv', 'csv')
    writeFile.write([
      ['Line of category', 2],
      ['Line of product', 1],
    ])
  }
  const lineOne = getLine(1, 'csv/currentCrawl.csv')
  const lineTwo = getLine(2, 'csv/currentCrawl.csv')
  return [lineOne, lineTwo]
}
