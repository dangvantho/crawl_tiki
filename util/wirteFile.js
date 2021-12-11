const fs = require('fs')
class WriteFile {
  constructor(fileName, dir = '') {
    this.fileName = fileName
    this.dir = dir
  }
  append(data) {
    if (!fs.existsSync(this.dir)) {
      fs.mkdirSync(this.dir)
    }
    const row = data.join(',')
    const fileName = this.dir + '/' + this.fileName
    fs.appendFileSync(fileName, row + '\n', 'utf-8')
  }
  write(data) {
    if (!fs.existsSync(this.dir)) {
      fs.mkdirSync(this.dir)
    }
    const fileName = this.dir + '/' + this.fileName
    const rows = data.map((row) => {
      return row.join(',')
    })
    const csv = '\ufeff' + rows.join('\r\n')

    fs.writeFileSync(fileName, csv, 'utf-8')
  }
}

module.exports = WriteFile