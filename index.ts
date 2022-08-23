class RandomPassword {
  public oneRandom(): string {
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

console.log(new RandomPassword().makePassword(10))
console.log(new RandomPassword().oneRandom())

let arr = 'abcdefghijklmnopqrstuvxwyz'

function getRandomArbitrary(
  min: number = 0,
  max: number = arr.length - 1
): number {
  return Math.round(Math.random() * (max - min) + min)
}
let password: string = ''
for (
  let i: string = '';
  i.length != 16;
  i = i.concat(arr.charAt(getRandomArbitrary()))
) {
  password = i
}
console.log(password)
