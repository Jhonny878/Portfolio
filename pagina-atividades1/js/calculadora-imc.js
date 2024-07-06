
const calculatorButton = document.querySelector('.calculator-button')
calculatorButton.onclick = calculator

window.addEventListener('keydown', (event => {
    if (event.key === 'Enter'){
        calculatorButton.click()
    }
}))

function calculator() {
   const peso = document.querySelector('.input-kg')
   const altura = document.querySelector('.input-metros')
   const imc = peso.value / (altura.value**2)
   const imcTag = document.querySelector('.resultado__num')
   imcTag.textContent = `IMC: .${imc.toFixed(2)}`
   const imcTexto = document.querySelector('.resultado__texto')
   if (imc >= 40) {
    imcTexto.textContent = `Obesidade Grau 3 (Mórbida)`
 } else if ( imc >= 35) {
    imcTexto.textContent = `besidade Grau 2 (Severa)` 
 } else if ( imc >= 30) {
    imcTexto.textContent = `Obesidade Grau 1`
 } else if ( imc >= 25) {
    imcTexto.textContent = `Sobrepeso`
 } else if ( imc >= 18.5) {
    imcTexto.textContent = `Peso normal`
 } else if ( imc < 18.5) {
    imcTexto.textContent = `Abaixo do peso`
 }

 peso.value = ''
 altura.value = ''
 peso.focus()
}

