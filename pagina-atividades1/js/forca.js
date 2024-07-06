const teclado = document.querySelector('.teclado')
let secretWord = ''
let tentativas = 6
const img = document.querySelector('.img-forca')
const letrasCorretas = []
let palavraEmFormacao = ''

teclado.addEventListener('click', (event) => {
    
    if(!event.target.classList.value.includes('teclado')){
        event.target.style.backgroundColor = '#F5E8C7'
        const letra = event.target.textContent
        if (secretWord.includes(letra)) {
            letrasCorretas.push(letra);
        }else{
            tentativas = tentativas - 1
        }

    }

    if (tentativas === 6) {
        img.setAttribute('src','./img/robo_forca_0.png')
    }else if (tentativas === 5) {
        img.setAttribute('src', './img/robo_forca_1.png')
    }else if (tentativas === 4) {
        img.setAttribute('src', './img/robo_forca_2.png')
    }else if (tentativas === 3) {
        img.setAttribute('src', './img/robo_forca_3.png')
    }else if (tentativas === 2) {
        img.setAttribute('src', './img/robo_forca_4.png')
    }else if (tentativas === 1) {
        img.setAttribute('src', './img/robo_forca_5.png')
    }else if (tentativas === 0) {
        img.setAttribute('src', './img/robo_forca_6.png')
        alert(`Você perdeu, a palavra secreta era ${secretWord}`)
    }
    exibirpalavra()
})

const inputSecretWord = document.querySelector('.input-secret-word')
const inputDica = document.querySelector('.input-dica')
const dica = document.querySelector('.dica')
const buttonPlay = document.querySelector('.button-play')

buttonPlay.addEventListener('click', (event) => {
    secretWord = inputSecretWord.value.toUpperCase()
    dica.textContent = inputDica.value
    exibirpalavra()
    inputDica.value = ''
    inputSecretWord.value = ''
})

const outputSecretWord = document.querySelector('.secret-word')
function exibirpalavra(){
    palavraEmFormacao = ''
    for (letra in secretWord) {
        if (letrasCorretas.includes(secretWord[letra] )) {
            palavraEmFormacao = palavraEmFormacao + ' ' + secretWord[letra] + ' '
        }else{
            palavraEmFormacao = palavraEmFormacao + ' _ '
        }

    }

    outputSecretWord.textContent = palavraEmFormacao
}