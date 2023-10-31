import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'password-generator';

  letter = false
  number = false
  symbols = false

  passLen!: number

  password = ''

  inputLength(data: string) {
    this.passLen = +data
    console.log(this.passLen)
  }

  useLetters() {
    this.letter = !this.letter
    console.log(this.letter)
  }

  useNumbers() {
    this.number = !this.number
    console.log(this.number)
  }

  useSymbols() {
    this.symbols = !this.symbols
    console.log(this.symbols);

  }

  generatePassword(){
    let un='1234567890'
    let ul='abcdefghiklmnpqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let us='~!@#$%^&*_'

    let validChars=''
    let genPass=''

    if(this.number){
      validChars+=un
    }

    if(this.letter){
      validChars+=ul
    }

    if(this.symbols){
      validChars+=us
    }

    for(let i=0;i<this.passLen;i++){
      genPass+= validChars.charAt(Math.round(Math.random()*validChars.length))
    }

    this.password=genPass

  }


}
