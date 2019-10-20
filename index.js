module.exports = (chain) => {
  let link = chain
  let parent = { val: chain.val, next: null }
  let next = link.next

  while (next) {
    link = next
    next = link.next
    link.next = parent
    parent = link
  }
  
  return link
}