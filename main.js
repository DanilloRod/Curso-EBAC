$(document).ready(function(){
    alert('O que nós iremos fazer?')
    
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#btn-reset').click(function(){
        $('form').slideUp();
        limparTabela();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $('#tarefa').val();
        const novoItem = $('<li></li>').text(novaTarefa);
        $(novoItem).appendTo('#lista-tarefas');
    })

    $('#lista-tarefas').on('click', 'li', function(){
        $(this).css('text-decoration', 'line-through');
    });

    function limparTabela(){
        $('#lista-tarefas').empty();
    }


});

   