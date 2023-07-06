alert('Olá! Sou um teste de validação em treinamento. Poderia me ajudar? Preciso que escolha dois números, de forma que o segundo número seja maior que o primeiro. Vamos lá?')

const form = document.getElementById('form-validacao');
const segundoNumero = document.getElementById('numero2');
let formEValido = false;

function validaForm() {
    const primeiroNumero = document.getElementById('numero1');
    const messagemSucesso = document.querySelector('.message-success');
    const numero1Value = parseInt(primeiroNumero.value);
    const numero2Value = parseInt(segundoNumero.value);
    

    if (numero1Value < numero2Value) {
        messagemSucesso.style.display = 'block';
        messagemSucesso.innerHTML = `O número <b>${numero2Value}</b> é maior que o número <b> ${numero1Value}</b>`;
        return true; 
    } else {
        messagemSucesso.style.display = 'none';
        return false;
    }
}

form.addEventListener('submit', function(e) { 
    e.preventDefault(); 

    formEValido = validaForm(); 
    if (formEValido) { 
        const primeiroNumero = document.getElementById('numero1'); 
        const segundoNumero = document.getElementById('numero2'); 
        const containerMensagemSucesso = document.querySelector('.message-success');
        const containerMensagemError = document.querySelector('.message-error'); 

        primeiroNumero.value = ''; 
        segundoNumero.value = ''; 

        containerMensagemSucesso.style.display = 'block'; 
        alert('Seu formulário está válido! :)') 
    } else { 
        segundoNumero.style.border = '1px solid red'; 
        document.querySelector('.message-error').style.display = 'block'; 
        alert('Algo está errado! O formulário está inválido :('); 
        
    } 
});



