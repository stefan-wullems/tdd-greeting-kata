import { greet } from '.'

test('greet(name = Stefan) should return "hello, Stefan"', () => {
  const name = 'Stefan'

  const greeting = greet(name)

  expect(greeting).toBe('hello, Stefan')
})

test('greet(name = null) should return "hello, my friend', () => {
  const name = null

  const greeting = greet(name)

  expect(greeting).toBe('hello, my friend')
})

test('greet(name = STEFAN) should return "HELLO STEFAN"', () => {
  const name = 'STEFAN'

  const greeting = greet(name)

  expect(greeting).toBe('HELLO STEFAN!')
})

test('greet(name = [stefan, joyce] should return "hello, stefan and joyce"', () => {
  const name = ['stefan', 'joyce']

  const greeting = greet(name)

  expect(greeting).toBe('hello, stefan and joyce')
})

test('greet(name = [stefan, joyce, kathe] should return "hello, stefan, joyce and kathe"', () => {
  const name = ['stefan', 'joyce', 'kathe']

  const greeting = greet(name)

  expect(greeting).toBe('hello, stefan, joyce and kathe')
})

test('greet(name = [stefan, JOYCE, kathe] should return "hello, stefan and kathe. AND HELLO JOYCE!"', () => {
  const name = ['stefan', 'JOYCE', 'kathe']

  const greeting = greet(name)

  expect(greeting).toBe('hello, stefan and kathe. AND HELLO JOYCE!')
})