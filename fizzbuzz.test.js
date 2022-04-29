const fb = require('./fizzbuzz')

describe('tests the fizzbuzz function', () => {
  test('the function fizzbuzz should be defined', () => {
    expect(fb).toBeDefined()
  })

  test('fizzbuzz 9 should return Fizz', () => {
    expect(fb(9)).toBe('Fizz')
  })

  test('fizzbuzz 15 should return FizzBuzz', () => {
    expect(fb(15)).toBe('FizzBuzz')
  })

  test('fizzbuzz 10 should return Buzz', () => {
    expect(fb(10)).toBe('Buzz')
  })

  test('fizzbuzz 13 should return 13', () => {
    expect(fb(13)).toBe(13)
  })
})
