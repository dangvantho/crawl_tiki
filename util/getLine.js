const readLine = require('n-readlines')
module.exports = async function getLine(end = 1, fileName) {
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
