// *********************** OLD CODE ***********************

// class RandomPassword {
//   public oneRandom(): string {
//     const aIndice: string = Math.random().toString().charAt(2)
//     return aIndice
//   }

//   public makePassword(length: number): string {
//     let pass: string = ''
//     for (let a: string[] = []; a.length <= length; a.push(this.oneRandom())) {
//       pass = a.toString()
//     }
//     for (pass; pass.length != length; pass = pass.replace(',', '')) {}
//     return pass
//   }
// }

// console.log(new RandomPassword().makePassword(10))
// console.log(new RandomPassword().oneRandom())

// let arr = 'abcdefghijklmnopqrstuvxwyz'

// function getRandomArbitrary(
//   min: number = 0,
//   max: number = arr.length - 1
// ): number {
//   return Math.round(Math.random() * (max - min) + min)
// }
// let password: string = ''
// for (
//   let i: string = '';
//   i.length != 10;
//   i = i.concat(arr.charAt(getRandomArbitrary()))
// ) {
//   password = i
// }
// console.log(password)

// let arrCharacter: string = ''
// function test(args: string, character: string) {
//   const checks = <HTMLInputElement>document.getElementById(`check${args}`)
//   checks?.addEventListener('click', () => {
//     if (checks.checked) {
//       arrCharacter = arrCharacter.concat(character)
//       console.log(arrCharacter)
//     } else {
//       arrCharacter = arrCharacter.split(character).toString().replace(',', '')
//       console.log(arrCharacter)
//     }
//   })
// }

// function makePassword(length: number = arrCharacter.length) {
//   const randomPosition = (min: number = 0, max: number = length) => {
//     return Math.round(Math.random() * (max - min) + min)
//   }
//   let password: string = ''
//   if (arrCharacter.length > 0) {
//     for (
//       let i: string = '';
//       i.length != 10;
//       i = i.concat(arrCharacter.charAt(randomPosition()))
//     ) {
//       password = i
//     }
//     console.log(password)
//   } else {
//     console.log('adicione algo')
//   }
// }

// document
//   .getElementById('makePassord')
//   ?.addEventListener('click', () => makePassword())

// test('Number', '1234567890')
// test('Lowcase', 'abcdefghijklmnopqrstuvxwyz')
// test('Uppercase', 'ABCDEFGHIJKLMNOPQRSTUVXWYZ')
// test('Special', '!@#$%¨&*_+"(){}^?/;:><.,°ºª[]~çÇ=-')

// const checkNumber = <HTMLInputElement>(
//   document.getElementById(`check${nameCheckBoxs()}`)
// )

// checkNumber?.addEventListener('click', () => {
//   if (checkNumber.checked) {
//     console.log('checked')
//   }
// })

// function nameCheckBoxs() {
//   const checkBoxs: string[] = ['Number', 'Lowcase', 'Uppercase', 'Special']
//   for (let i = 0; i != checkBoxs.length; i++) {
//     return `${checkBoxs[i]}`
//   }
// }
// console.log(nameCheckBoxs())
