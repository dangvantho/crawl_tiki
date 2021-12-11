const fs = require('fs')
module.exports = () => {
    const categories = fs.readFileSync('csv/categories.csv', 'utf-8')
    return categories.split(/\r?\n/).map(category => category.split(','))
}