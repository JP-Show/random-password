class RandomPassword {
  private oneRandom(): string {
    const aIndice: string = Math.random().toString().charAt(2)
    return aIndice
  }

  public makePassword(length: number): string {
    let pass: string = ''
    for (let a: string[] = []; a.length <= length; a.push(this.oneRandom())) {
      pass = a.toString()
    }
    for (pass; pass.length != length; pass = pass.replace(',', '')) {}
    return pass
  }
}

console.log(new RandomPassword().makePassword(7))
