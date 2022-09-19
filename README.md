# <p align = "center"> Projeto Repoprovas-Back </p>

<p align="center">
   <img src="https://miro.medium.com/max/1400/1*PoH0pTYeT1zmX06Ehbq1UA.jpeg"/>
</p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-Januacele Vieira-4dae71?style=flat-square" />
   <img src="https://img.shields.io/badge/author-Typescript-4dae71?style=flat-square" />
</p>

##  :clipboard: Descrição
  O projeto RepoProvas é um sistema de compartilhamento de provas entre estudantes, onde qualquer pessoa pode procurar provas antigas de suas disciplinas e professores ou enviar provas antigas para ajudar os calouros.
  O usuário precisa realizar um cadastro na plataforma, informando um email, senha e confirmação de senha. Após cadastro, o usuário logado poderá adcionar links de provas, dividir por categorias, disciplinas e professores.

***
## :computer:	 Tecnologias e Conceitos

- Node.js
- TypeScript
- SQL database with Prisma
- SuperTest e o Jest
- JWTs

***
## :rocket: Rotas

```yml
POST /signup
    - Rota para cadastrar um novo usuário
    - headers: {}
    - body:{
        "email": "lorem@gmail.com",
        "password": "loremipsum",
        "confirmPassword": "loremipsum"
}
```

```yml
POST /signin
    - Rota para fazer login
    - headers: {}
    - body:{
        "email": "lorem@gmail.com",
        "password": "loremipsum"
}
```
```yml 
POST /tests (autenticada)
    - Rota inserir um teste
    - headers: { "Authorization": "Bearer $token" }
    - body:{
       "name": "prática1",
       "pdfUrl": "http://google.com",
       "category": "Prática",
       "discipline": "HTML e CSS",
       "teacher": "Lorem Ipsum"
}
```
```yml
GET /tests/discipline/:name (autenticada)
    - Rota para listar os testes por disciplina
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
``` 
```yml
GET /tests/categorie (autenticada)
    - Rota para listar as categorias
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
``` 

## 🏁 Rodando a aplicação

Este projeto foi inicializado com o [node js](https://nodejs.org/pt-br/docs/), então certifique-se que voce tem a ultima versão estável do [Node.js](https://nodejs.org/en/download/) e [npm](https://www.npmjs.com/) rodando localmente.

Primeiro, faça o clone desse repositório na sua maquina:

```
git clone https://github.com/Januacele/repoprovas-back
```

Depois, dentro da pasta, rode o seguinte comando para instalar as dependencias.

```
npm install
```

Finalizado o processo, é só inicializar o servidor
```
npm dev
```

:stop_sign: Esse projeto não possui interface front-end, fique a vontade para implementar. 

