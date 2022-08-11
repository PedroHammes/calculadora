const buttons = document.querySelectorAll(".grid-calculator button")

class Equation{
    constructor(number1, operation, number2){
        this.number1 = number1
        this.operation = operation
        this.number2 = number2
    } 
}


buttons.forEach((clickedButton) => {
    if(Number(clickedButton.innerText) >= 0 || clickedButton.innerText == "."){
        console.log(`Number: ${clickedButton.innerText}`)
    }else{
        console.log(`Op: ${clickedButton.innerText}`)
    }
})

buttons.forEach((clickedButton) => {
    clickedButton.addEventListener("click", function(){
        console.log(clickedButton.innerText)
    })
})
//Usando o forEach para percorrer o array buttons.
//Para cada elemento do array (clickedButton) eu chamo a função (arrow function =>)
//A função consiste em adicionar o evento de clique ao botão
//Quando o botão é clicado ele é exibido no console.log 