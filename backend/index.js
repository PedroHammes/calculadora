function test(number){
    let n1 = `${Number(number.value)}`
    let resultArea = document.getElementById("result-area")
    resultArea.innerText += `${n1}`
}

function operator(symbol){
    let operator = `${symbol.value}`
    let resultArea = document.getElementById("result-area")
    resultArea.innerText += `${operator}`
}