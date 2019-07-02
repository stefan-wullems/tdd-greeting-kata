import { greet } from '.'

test('greet', () => {
  const name = 'Stefan'

  const greeting = greet(name)

  expect(greeting).toBe('hello, Stefan.')
})

test('Handle nulls by introducing a stand-in.', () => {
  const name = null

  const greeting = greet(name)

  expect(greeting).toBe('hello, my friend.')
})

test('Handle shouting.', () => {
  const name = 'STEFAN'

  const greeting = greet(name)

  expect(greeting).toBe('HELLO STEFAN!')
})

test('Handle two names of input.', () => {
  const name = ['Stefan', 'Joyce']

  const greeting = greet(name)

  expect(greeting).toBe('hello, Stefan and Joyce.')
})

test('Handle an arbitrary number of names as input.', () => {
  const name = ['Stefan', 'Joyce', 'Kathe']

  const greeting = greet(name)

  expect(greeting).toBe('hello, Stefan, Joyce and Kathe.')
})

test('Allow mixing of normal and shouted names by separating the response into two greetings.', () => {
  const name = ['Stefan', 'JOYCE', 'Kathe']

  const greeting = greet(name)

  expect(greeting).toBe('hello, Stefan and Kathe. AND HELLO JOYCE!')
})

test('If any entries in name are a string containing a comma, split it as its own input.', () => {
  const name = ['Stefan', 'Joyce, Kathe']

  const greeting = greet(name)

  expect(greeting).toBe('hello, Stefan, Joyce and Kathe.')
})

test('Allow the input to escape intentional commas by wrapping in double quotes', () => {
  const name = ['Stefan', '"Joyce, Kathe"']

  const greeting = greet(name)

  expect(greeting).toBe('hello, Stefan and Joyce, Kathe.')
})