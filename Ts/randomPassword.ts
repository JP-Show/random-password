class RandomPassword {
  private character = ''
  private password = ''
  private classInputsChecks
  private idButton
  private idDisplayPassword
  private idLenghtPassword

  constructor(
    classInputsChecks: string,
    idButton: string,
    idDisplayPassword: string,
    idLenghtPassword: string
  ) {
    this.classInputsChecks = classInputsChecks
    this.idButton = idButton
    this.idDisplayPassword = idDisplayPassword
    this.idLenghtPassword = idLenghtPassword
  }

  private set_inputs_check(): void {
    let checkboxes = <HTMLElement>(
      (<unknown>document.querySelectorAll(`.${this.classInputsChecks}`))
    )
    for (let checkbox of checkboxes) {
      checkbox.addEventListener('click', () => {
        if (checkbox.checked) {
          this.character += checkbox.value
        } else {
          this.character = this.character
            .split(checkbox.value)
            .toString()
            .replace(',', '')
        }
      })
    }
  }
  private randomPosition(
    min: number = 0,
    max: number = this.character.length
  ): number {
    return Math.round(Math.random() * (max - min) + min)
  }

  private make_password(): void {
    const valueLenght = <HTMLInputElement>(
      document.getElementById(`${this.idLenghtPassword}`)
    )
    const v: number = valueLenght.valueAsNumber
    const lenCharac = this.character.length
    if (lenCharac > 0) {
      this.password = ''
      for (let high = 0; high != v; high++)
        this.password = this.password.concat(
          this.character.charAt(this.randomPosition())
        )
      console.log(this.password)
    } else {
      alert('selecione algo')
    }
  }

  public show_password(): void {
    this.set_inputs_check()
    const displayerPassword = <HTMLInputElement>(
      document.getElementById(`${this.idDisplayPassword}`)
    )
    document
      .getElementById(`${this.idButton}`)
      ?.addEventListener('click', () => {
        this.make_password()
        displayerPassword.value = this.password
      })
  }
}
new RandomPassword(
  'checkPasswords',
  'makePassord',
  'displayPassword',
  'quantyLenght'
).show_password()
