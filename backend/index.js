const previousInputText = document.querySelector("#result-field")
const inputFieldText = document.querySelector("#input-field")
const buttons = document.querySelectorAll(".grid-calculator button")

class Calculator {
    constructor(previousInputText, inputFieldText){
        this.previousInputText = previousInputText
        this.inputFieldText = inputFieldText
        this.inputField = ""
    }

    //exibe no visor aquilo que o usuário digita
    output(digit){
        this.inputField = digit
        this.updateScreen()
    }

    //altera os valores na tela da calculadora
    updateScreen(){
        this.inputFieldText.innerText += this.inputField
    }
}

const calc = new Calculator (previousInputText, inputFieldText)

buttons.forEach((clickedButton) => {
    clickedButton.addEventListener("click", function(){
        const value = clickedButton.innerText
        
        if(Number(value)>=0 || value=="."){
            calc.output(value)
        }else{
            console.log(`Op: ${value}`)
        }
    })
})
//Usando o forEach para percorrer o array buttons.
//Para cada elemento do array (clickedButton) eu chamo a função (arrow function =>)
//A função consiste em adicionar o evento de clique ao botão
//Quando o botão é clicado ele é exibido no console.log 