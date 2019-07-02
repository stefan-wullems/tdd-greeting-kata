const ALL_DOUBLE_QUOTES_REGEX = /"/gi
const ALL_INTERPUNCTION_REGEX = /[.,\/#!$%\^&\*;:{}=\-_`~()]/g

class Greeter {
  private nameString: string | string[]

  private nameList: string[] = []

  private normalGreetingBuilder = new GreetingBuilder()
  private loudGreetingBuilder = new GreetingBuilder((greeting) => {
    return greeting.replace(ALL_INTERPUNCTION_REGEX, "").toUpperCase() + '!'
  })

  constructor (names: string | null | string[]) {
    this.nameString = names || 'my friend'
  }

  public greet () {
    this.listAllNames()
    this.separateShouters()

    return this.getGreeting()
  }

  private listAllNames () {
    if (typeof this.nameString === 'string') {
      this.addToNames(this.nameString)
    } else {
      this.nameString.forEach(name => {
        this.addToNames(name)
      })
    }
  }

  private addToNames (name: string) {
    if (name.match(',') && !this.shouldIgnoreComma(name)) {
      this.nameList.push(...this.separateNames(name))
    } else {
      this.nameList.push(this.removeDoubleQuotes(name))
    }
  }

  private shouldIgnoreComma (name: string) {
    const nbDoubleQuotes = this.getNbDoubleQuotes(name)

    return nbDoubleQuotes > 0 && nbDoubleQuotes % 2 === 0
  }

  private getNbDoubleQuotes (name: string) {
    const doubleQuotes = name.match(ALL_DOUBLE_QUOTES_REGEX)
    return doubleQuotes
      ? doubleQuotes.length
      : 0
  }

  private separateNames (names: string) {
    return names.replace(' ', '').split(',')
  }

  private removeDoubleQuotes (name: string) {
    return name.replace(ALL_DOUBLE_QUOTES_REGEX, '')
  }

  private separateShouters () {
    this.nameList.forEach((name) => {
      name === name.toUpperCase()
        ? this.loudGreetingBuilder.addGreeter(name)
        : this.normalGreetingBuilder.addGreeter(name)
    })
  }

  private getGreeting () {
    const normalGreeting = this.normalGreetingBuilder.getGreeting()
    const separator = this.getSeparator()
    const loudGreeting = this.loudGreetingBuilder.getGreeting()

    return normalGreeting + separator + loudGreeting
  }

  private getSeparator () {
    return this.normalGreetingBuilder.hasGreeters() && this.loudGreetingBuilder.hasGreeters()
      ? ' AND '
      : ''
  }
}

class GreetingBuilder {
  private greeters: string[] = []
  private modifier: (greeting: string) => string

  constructor (modifier?: (greeting: string) => string) {
    this.modifier = modifier || ((greeting: string) => greeting)
  }

  public addGreeter (name: string) {
    this.greeters.push(name)
  }

  public getGreeting () {
    return this.hasGreeters()
      ? this.modifier('hello, ' + this.listNamesForGreeting(this.greeters) + '.')
      : ''
  }

  public hasGreeters () {
    return Boolean(this.greeters.length)
  }

  private listNamesForGreeting (names: string[]) {
    return names.reduce((greeting, name, i, arr) => {
      return greeting + this.getNameSeparator(i, arr.length) + name
    }, '')
  }

  private getNameSeparator (i: number, length: number) {
    switch (i) {
      case 0:
        return ''
      case length - 1:
        return ' and '
      default:
        return ', '
    }
  }
}

export function greet (names: string | null | string[]) {
  return new Greeter(names).greet()
}
