# Projeto 02 - Desenvolvimento Web III

Projeto desenvolvido para a disciplina de **Desenvolvimento Web III** do curso de **Desenvolvimento de Software Multiplataforma - 3º semestre**, da **FATEC Luigi Papaiz**.

## Sobre o Projeto

O objetivo deste projeto é desenvolver um site utilizando **Node.js sem frameworks**, aplicando os conceitos estudados em Desenvolvimento Web III.

O site apresenta as disciplinas do 3º semestre do curso de Desenvolvimento de Software Multiplataforma, permitindo navegar entre páginas específicas de cada disciplina.

Além da navegação, o projeto demonstra o uso de arquivos estáticos, diferentes tipos de conteúdo, JavaScript no frontend, leitura de dados JSON, imagens e recursos multimídia.

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- Node.js
- Módulo HTTP do Node.js
- File System (`fs`)
- JSON
- Git
- GitHub

## Funcionalidades

O projeto possui:

- Servidor HTTP desenvolvido com Node.js sem framework;
- Sistema de rotas;
- Página inicial de apresentação do curso;
- Páginas individuais para as disciplinas;
- Navegação entre as páginas;
- Layout padronizado e responsivo;
- CSS externo;
- JavaScript externo;
- Interação com botão utilizando JavaScript;
- Leitura de arquivo JSON utilizando `fetch()`;
- Imagens nos formatos JPG e PNG;
- Documento PDF;
- Reprodução de vídeos MP4;
- Troca de vídeos utilizando JavaScript;
- Página de erro 404 personalizada;
- Servidor de arquivos estáticos com diferentes Content-Types.

## Disciplinas

| Código | Disciplina |
| --- | --- |
| MAG004 | Álgebra Linear |
| IBD016 | Banco de Dados Não Relacional |
| ISW030 | Desenvolvimento Web III |
| AGO021 | Gestão Ágil de Projetos de Software |
| ING085 | Inglês I |
| IHC004 | Interação Humano Computador |
| ILP037 | Técnicas de Programação II |

## Rotas

| Rota | Página |
| --- | --- |
| `/` | Página inicial |
| `/algebra-linear` | Álgebra Linear |
| `/banco-dados-nao-relacional` | Banco de Dados Não Relacional |
| `/desenvolvimento-web-iii` | Desenvolvimento Web III |
| `/gestao-agil` | Gestão Ágil de Projetos de Software |
| `/ingles-i` | Inglês I |
| `/ihc` | Interação Humano Computador |
| `/tecnicas-programacao-ii` | Técnicas de Programação II |

Rotas ou arquivos inexistentes exibem uma página personalizada de **Erro 404**.

## Estrutura do Projeto

```text
Projeto02-DW3/
│
├── app.js
├── README.md
│
└── public/
    ├── index.html
    ├── erro404.html
    │
    ├── css/
    │   └── style.css
    │
    ├── js/
    │   └── script.js
    │
    ├── dados/
    │   └── disciplinas.json
    │
    ├── disciplinas/
    │   ├── algebra-linear.html
    │   ├── banco-dados-nao-relacional.html
    │   ├── desenvolvimento-web-iii.html
    │   ├── gestao-agil.html
    │   ├── ingles-i.html
    │   ├── ihc.html
    │   └── tecnicas-programacao-ii.html
    │
    ├── img/
    │   └── imagens utilizadas pelo site
    │
    ├── pdf/
    │   └── documentos do projeto
    │
    └── video/
        └── vídeos utilizados pelo site
```

## Como Executar

### 1. Clone o repositório

```bash
git clone https://github.com/MacieldSantos/projeto02-dw3.git
```

### 2. Entre na pasta do projeto

```bash
cd projeto02-dw3
```

### 3. Execute o servidor

```bash
node app.js
```

### 4. Abra no navegador

```text
http://localhost:3000/
```

O servidor utiliza a porta **3000**.

## Arquivos Estáticos e Content-Type

O servidor identifica e disponibiliza diferentes tipos de arquivos, incluindo:

- HTML
- CSS
- JavaScript
- JSON
- JPG/JPEG
- PNG
- PDF
- MP4

Cada tipo de arquivo é enviado ao navegador com seu respectivo `Content-Type`.

## Informações Acadêmicas

**Instituição:** FATEC Luigi Papaiz  
**Curso:** Desenvolvimento de Software Multiplataforma  
**Semestre:** 3º semestre  
**Disciplina:** Desenvolvimento Web III  
**Professor:** Vinícius Heltai Pacheco  
**Aluno:** Maciel dos Santos  
**Ano:** 2026

---

Projeto acadêmico desenvolvido para aplicação prática dos conceitos estudados na disciplina de **Desenvolvimento Web III**.
