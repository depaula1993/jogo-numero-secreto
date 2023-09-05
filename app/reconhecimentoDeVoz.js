window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const elementoChute = document.getElementById('chute')

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e){

    const chute = e.results[0][0].transcript

    exibeChuteNaTela(chute)
    
    verificaSeOChutePossuiUmValorValido(chute)

}

function exibeChuteNaTela(chute){

    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span>
    `
   
}

recognition.addEventListener('end', () => recognition.start()

)


 /* Como eu fiz kkkk 

   
 if(chute == numeroSecreto){

    elementoChute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute}</span>
    <div>Vc acertou</div>
    `
}
else if (chute < numeroSecreto) {
    
    elementoChute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute}</span>
    <div>O número secreto é maior</div>
    `
    const recognition = new SpeechRecognition();
    recognition.lang = 'pt-Br'
    recognition.start()

    recognition.addEventListener('result', onSpeak)

}
else if (chute > numeroSecreto) {
    
    elementoChute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute}</span>
    <div>O número secreto é menor</div>
    `
    const recognition = new SpeechRecognition();
    recognition.lang = 'pt-Br'
    recognition.start()

    recognition.addEventListener('result', onSpeak)


} */