const options = require('../config')
const axios = require('axios')
const getLine = require('../util/getLine')
const writeFile = require('../util/wirteFile')

const getLineOfProduct = () => {
    let categoryLine = getLine(1, 'csv/currentCrawl.csv')
    categoryLine = categoryLine ? categoryLine : 2
    const lineOfCategory = getLine(categoryLine, 'csv/subCategories.csv')
    let fileName = lineOfCategory.split(',')[0].replace(/\ /g, '_')
    fileName = encodeURI(fileName)
    const lineOfProduct 
}

module.exports = (categoryLine, productLine) => {}