function test(number){
    let n1 = `${Number(number.value)}`
    let resultField = document.getElementById("result-field")
    resultField.innerText += `${n1}`
}

function operator(symbol){
    let operator = `${symbol.value}`
    let resultField = document.getElementById("result-field")
    resultField.innerText += `${operator}`
}

function clearAll(){
    let resultField = document.getElementById("result-field")
    resultField.innerText = ""
}