function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}
function deadOrAlive() {
  return [0, 255][getRandomInt(2)]
}
function isValidIndex(i, j, m, n) {
  return i >= 0 && i < m && j >= 0 && j < n
}
