import { Sum, AddList, DivideBy, ContainsString } from './MyMath.js'

describe ("Sum", () => {

  test('Whether undefined is returned on invalid type', () => {
    expect(Sum(1,'Test')).toBeUndefined()
  })

  test('adds 1 + 2 to equal 3', () => {
    expect(Sum(1, 2)).toBe(3)
  })

  it('adds 0 + 0 to equal 0', () => {
    expect(Sum(0, 0)).toBe(0)
  })
})


describe ('AddList', () => {
  let array = [1, 2, 3]
  let arrayNotNumber = [1, 'test', 2]
  let emptyArray = []

  test ('Whether empty array returns undefined', () => {
    expect (AddList(emptyArray)).toBeUndefined()
  })

  test('Whether all values are numbers', () => {
    expect(AddList(arrayNotNumber)).toBeUndefined()
  })

  test('Whether 1 + 2 + 3 = 6', () => {
    expect(AddList(array)).toBe(6)
  })
})

describe ('DivideBy', () => {

  test ('If second number is 0, return undefined', () => {
    expect (DivideBy(2,0)).toBeUndefined()
  })

  test ('If any parameter is not a number, return undefined', () => {
    expect (DivideBy(2,'one')).toBeUndefined()
  })

  test ('4 divided by 2 = 2', () => {
    expect (DivideBy(4,2)).toBe(2)
  })

  test ('-8 divided by 2 is -4', () => {
    expect (DivideBy(-8,2)).toBe(-4)
  })

  test ('-8 divided by -2 equals 4', () => {
    expect (DivideBy(-8,-2)).toBe(4)
  })
})

describe ('ContainsString', () => {

  test ('If hello contains ello, return true', () => {
    expect (ContainsString('hello','ello')).toBeTruthy()
  })

  test ('If second parameter is not a substring of first, return false', () => {
    expect (ContainsString('hello','goodbye')).toBeFalsy()
  })

  test ('If second parameter is not a string, return undefined', () => {
    expect (ContainsString('hello', 23)).toBeFalsy()
  })

  test ('If first paramater is not a string, return undefined', () => {
    expect (ContainsString(1,'ok')).toBeFalsy()
  })
})

// ICE 

// Examples for Null
test('null', () => {
  const n = null
  expect(n).toBeNull()
  expect(n).toBeDefined()
  expect(n).not.toBeUndefined()
  expect(n).not.toBeTruthy()
  expect(n).toBeFalsy()
})

// Examples for zero
test('zero', () => {
  const z = 0
  expect(z).not.toBeNull()
  expect(z).toBeDefined()
  expect(z).not.toBeUndefined()
  expect(z).not.toBeTruthy()
  expect(z).toBeFalsy()
})
