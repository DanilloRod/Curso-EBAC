$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(  ) _____-____'
    });

    $('#cpf').mask('000.000.000-00', {
        placeholder: '___.___.___-__'
    });

    $('#cep').mask('00000-000', {
        placeholder: '_____-___'
    });

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            telefone: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            telefone: 'Por favor, insira o seu telefone',
            email: 'Por favor, insira o seu E-mail',
            cpf: 'Por favor, insira o seu CPF',
            endereco: 'Por favor, insira o seu endereço',
            cep: 'Por favor, insira o seu CEP.',
        },    
    });
});