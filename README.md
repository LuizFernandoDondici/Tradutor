# Tradutor

API que traduz texto do <b>português</b> para <b>inglês</b> feito em [NodeJs](https://nodejs.org/) com o fremework [Express](https://expressjs.com/pt-br/) e a biblioteca [Puppeteer](https://pptr.dev/) que faz o scrapping no site de tradução do [Google](https://translate.google.com.br/?hl=pt-BR).

Nesse projeto foi usado o gerenciador de pacotes [Npm](https://www.npmjs.com/) para baixar e configurar as dependencias do projeto.

## Preparando o ambiente

- Baixe o [NodeJs](https://nodejs.org/en/download/)
- Instale o [Postman](https://www.postman.com/downloads/)

## Atualizando as dependências

- Abra o terminal na pasta da aplicação,
- Digite <i>npm install</i> para baixar as dependências.

## Iniciando a aplicação

- Abra o terminal na pasta da aplicação,
- Digite: <i>npm start</i> para inicializar o servidor,
- Abra o Postman,
- Use a URI: http://localhost:8000

<br>

# Endpoint

## GET - /translate

<br>

Corpo da Requisição:

```
{
  "text" : "Olá Mundo"
}
```

Exemplo de Resposta:

```
{
  "result" : "Hello World"
}
```
