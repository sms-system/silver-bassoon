module.exports = (chain) => {
  let link, next = chain
  let parent = null

  while (next) {
    link = next
    next = link.next
    link.next = parent
    parent = link
  }
  
  return link
}