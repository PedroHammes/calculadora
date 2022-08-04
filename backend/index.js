let input = []

function output(button){
    input += (button.innerText)
    let resultField = document.getElementById("result-field")
    resultField.innerText = input
    return input
}

function clearAll(){
    let resultField = document.getElementById("result-field")
    resultField.innerText = ""
    input = ""
}