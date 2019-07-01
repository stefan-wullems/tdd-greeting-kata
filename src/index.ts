export function greet (name: string | null | string[]) {
  if (!name) {
    return 'hello, my friend'
  }

  const nameList = Array.isArray(name)
    ? name
    : [name]

  const tracker = buildTracker(nameList)

  const normalGreeting = tracker.normal.length
    ? 'hello, ' + listNames(tracker.normal)
    : ''

  const separator = tracker.normal.length && tracker.loud.length
    ? '. AND '
    : ''

  const loudGreeting = tracker.loud.length
    ? 'HELLO ' + listNames(tracker.loud).toUpperCase() + '!'
    : ''

  return normalGreeting + separator + loudGreeting
}

function buildTracker (nameArr: string[]) {
  return nameArr.reduce((tracker, name) => {
    name === name.toUpperCase()
      ? tracker.loud.push(name)
      : tracker.normal.push(name)
    return tracker
  }, { normal: [], loud: [] } as { normal: string[], loud: string[] })
}

function listNames (names: string[]) {
  return names.reduce((greeting, name, i, arr) => {
    if (i === 0) return name
    if (i === arr.length - 1) return greeting + ' and ' + name
    return greeting + ', ' + name
  }, '')
}