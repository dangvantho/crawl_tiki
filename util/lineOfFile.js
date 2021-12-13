const readLine = require('n-readlines')
const fs = require('fs')
module.exports = function getLine(fileName) {
  if (!fs.existsSync(fileName)) {
    return 0
  }
  let lineNumber = 1
  let line
  const liner = new readLine(fileName)
  while ((line = liner.next())) {
    lineNumber++
  }
  return lineNumber
}
