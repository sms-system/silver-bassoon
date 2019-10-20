const reverse = require('../index')

test('basic', () => {
  expect(reverse({
    val: 2,
    next: {
      val: 4,
      next: {
        val: 6,
        next: {
          val: 8,
          next: null
        }
      }
    }
  })).toEqual({
    val: 8,
    next: {
      val: 6,
      next: {
        val: 4,
        next: {
          val: 2,
          next: null
        }
      }
    }
  })
})