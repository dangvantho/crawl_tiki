module.exports = (link) => {
  let partOne = link.split('.html')[0]
  let id = ''
  for (let i = partOne.length - 1; i >= 0; i--) {
    if (partOne[i] === 'p') break
    if (!isNaN(parseInt(partOne[i]))) {
      id += partOne[i]
    }
  }
  id = id.split('').reverse().join('')
  const spid = link.split('&spid=')[1].split('\r')[0]
  return { id, spid }
}
