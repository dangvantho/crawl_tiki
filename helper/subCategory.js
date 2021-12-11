module.exports = (categoryLink, categoryName) => async (page) => {
  await page.goto(categoryLink, {waitUntil: 'load', timeout: 0})
//   await page.waitForTimeout(1000)
  const subCategory = await page.evaluate(() =>
    Array.from(document.querySelectorAll('.block > .list > a')).map((item) => [
      item.textContent.trim(),
      item.getAttribute('href'),
    ])
  )
  subCategory.unshift([categoryName])
  return subCategory
}
