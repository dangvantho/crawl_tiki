async function crawlPage(link, page) {
  await page.goto(link, { waitUntil: 'load', timeout: 0 })
  return page.evaluate(() => {
    function randomNumber() {
      let str = ''
      for (let i = 0; i < 10; i++) {
        str += String.fromCharCode(Math.floor(Math.random() * (122 - 97) + 97))
      }
      return str + '_' + new Date().getTime()
    }
    return Array.from(document.querySelectorAll('a.product-item')).map(
      (item) => [
        randomNumber(),
        // item.querySelector('.name > span').textContent,
        item.getAttribute('href').includes('//tka.tiki.vn')
          ? item.getAttribute('href')
          : 'https://tiki.vn' + item.getAttribute('href'),
        // item.querySelector('.webpimg-container > img').getAttribute('src'),
      ]
    )
  })
}

module.exports =
  (p = 1, row) =>
  async (page) => {
    if (!row[1]) return row
    const link = p > 1 ? `${row[1]}?page=${p}` : row[1]
    return crawlPage(link, page)
  }
