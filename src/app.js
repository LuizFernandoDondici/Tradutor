'use strict';

const express = require('express');
const puppeteer = require('puppeteer');

const app = express();

app.use(express.json());

// Faz o scrapping no tradutor do google.
app.get('/translate', async (req, res) => {

	const params = req.body.text;

	const text = params.replace(" ", "-");

	// Inicia um navegador.
	const browser = await puppeteer.launch();
	// Abre uma nova pagina no navegador.
	const page = await browser.newPage();
	
	// Acessa a URI.
	await page.goto(`https://translate.google.com.br/?hl=pt-BR&sl=${'pt'}&tl=${'en'}&text=${text}%0A&op=translate`);
	await page.waitForTimeout(10000);

	// Retorna o valor do campo especificado.
	const result = await page.evaluate(() => {
		// Obs: Verificar se o nome da classe ainda é: 'ryNqvb'.
		return document.getElementsByClassName('ryNqvb')[0].innerText;
	})

	// Fecha o navegador.
	await browser.close();

	res.send(JSON.stringify({result : result}));
});

// Inicia o servidor.
app.listen(8000, () => {
	console.log(`Server is running on http://localhost:8000`);
});
