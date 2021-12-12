const readLine = require('n-readlines')
const fs = require('fs')
module.exports = function getLine(end = 1, fileName) {
  if (!fs.existsSync(fileName)) {
    return null
  }
  let lineNumber = 1
  let line
  const liner = new readLine(fileName)
  let result
  while ((line = liner.next())) {
    if (lineNumber > end) {
      break
    }
    if (lineNumber === end) {
      const row = line.toString('utf-8')
      result = row.split(',')
    }
    lineNumber++
  }
  return result
}
