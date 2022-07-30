function output(button){
    let char = (button.value)
    let resultField = document.getElementById("result-field")
    resultField.innerText += `${char}`
}

function clearAll(){
    let resultField = document.getElementById("result-field")
    resultField.innerText = ""
}