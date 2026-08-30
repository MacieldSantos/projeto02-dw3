/*
FATEC Luigi Papaiz
Curso: Desenvolvimento de Software Multiplataforma - 3º Semestre
Disciplina: Desenvolvimento Web III
Professor: Vinícius Heltai Pacheco
Projeto 02
Aluno: Maciel dos Santos
Descrição: Aplicação web para apresentação do curso e
das disciplinas do 3º semestre.
*/

// CARREGAR OS MÓDULOS
const http = require('http'); //cria um servidor HTTP
const url = require('url'); //identifica a URL solicitada
const path = require('path'); // trabalha com caminhos/pastas
const fs = require('fs'); // lê os arquivos

// PASTA PÚBLICA DA APLICAÇÃO
const publicDir = path.join(__dirname, 'public');

// CONTENT-TYPES

// Objeto que mapeia as extensões de arquivos para seus respectivos Content-Types
const contentTypes = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.pdf': 'application/pdf',
    '.mp4': 'video/mp4'
};

// ROTAS DAS PÁGINAS
// Objeto que mapeia as rotas para os arquivos correspondentes
const routes = {
    '/': 'index.html',

    '/algebra-linear':
        'disciplinas/algebra-linear.html',

    '/banco-dados-nao-relacional':
        'disciplinas/banco-dados-nao-relacional.html',

    '/desenvolvimento-web-iii':
        'disciplinas/desenvolvimento-web-iii.html',

    '/gestao-agil':
        'disciplinas/gestao-agil.html',

    '/ingles-i':
        'disciplinas/ingles-i.html',

    '/ihc':
        'disciplinas/ihc.html',

    '/tecnicas-programacao-ii':
        'disciplinas/tecnicas-programacao-ii.html'
};

// FUNÇÃO PARA ABRIR OS ARQUIVOS

function readFile(response, file) {

    fs.readFile(file, function (err, data) {

        // Caso o arquivo não seja encontrado
        if (err) {
            response.writeHead(404, {
                'Content-Type': 'text/html; charset=utf-8'
            });

            return fs.createReadStream(
                path.join(publicDir, 'erro404.html')
            ).pipe(response);
        }

        // Identifica a extensão do arquivo
        var extension = path.extname(file).toLowerCase();

        // Procura o Content-Type correspondente
        var contentType =
            contentTypes[extension] || 'aplication/octet-stream';

        // Envia o arquivo para o navegador
        response.writeHead(200, {
            'Content-Type': contentType
        });

        response.end(data);
    });
}
// FUNÇÃO CALLBACK DO SERVIDOR
var callback = function (request, response) {

    // Obtém somente o caminho da URL
    var pathname = decodeURIComponent(
        url.parse(request.url).pathname
    );

    //VERIFICA AS ROTAS DAS PÁGINAS
    if (routes[pathname]) {

        return readFile(
            response,
            path.join(publicDir, routes[pathname])
        );
    }


    // ARQUIVOS ESTÁTICOS
    var file = path.join(publicDir, pathname);

    //Impede acesso a arquivos fora da pasta public
    if (!file.startsWith(publicDir)) {

        response.writeHead(404, {
            'Content-Type': 'text/html; chartset=utf-8'
        });

        return fs.createReadStream(
            path.join(publicDir, 'erro404.html')
        ).pipe(response);
    }

    // Tenta abrir o arquivo solicitado
    readFile(response, file);
};

// CRIAR E INICIAR O SERVIDOR HTTP
var server = http.createServer(callback);

server.listen(3000);

console.log("Servidor iniciado em http://localhost:3000/")

