let peso = prompt ("digite o seu peso (kg): ")
let altura = prompt ("informe sua altura(m): ")

let resultado = calcularIMC(peso, altura)
    function calcularIMC(peso , altura){
        return peso / (altura * altura)
    }
alert (resultado)

let classificacao = classificarIMC (resultado)
function classificarIMC