module.exports = (chain) => {
  const values = []
  while (chain.next) {
    values.push(chain.val)
    chain = chain.next
  }
  values.push(chain.val)
  const res = {}
  let link = res
  values.reverse().forEach((val, i) => {
    link.val = val
    if (i !== values.length - 1) {
      link.next = {}
      link = link.next
    } else {
      link.next = null
    }
  })
  return res
}