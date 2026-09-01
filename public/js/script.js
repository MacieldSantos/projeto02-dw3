function testarJS() {
    const posicaoAtual = window.scrollY;
    const mensagem = document.getElementById('mensagemJS');

    mensagem.textContent =
        '✓ JavaScript executado com sucesso no Projeto 02!';

    mensagem.classList.add('mensagem-sucesso');

    window.scrollTo(0, posicaoAtual);
}

fetch('/dados/disciplinas.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (dados) {
        document.getElementById('dadosProjeto').innerHTML =
            '<strong>Curso:</strong> ' + dados.curso + '<br>' +
            '<strong>Semestre:</strong> ' + dados.semestre + '<br>' +
            '<strong>Instituição:</strong> ' + dados.instituicao + '<br>' +
            '<strong>Ano:</strong> ' + dados.ano;
    })
    .catch(function (erro) {
        document.getElementById('dadosProjeto').textContent =
            'Não foi possível carregar os dados.';
        console.error(erro);
    });
