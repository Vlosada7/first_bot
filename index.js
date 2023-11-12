const puppeteer = require("puppeteer");

(async () => {
	//Abrir o navegador
	//Se eu nao passar o parametro headless como false no launch eu nao vou ver nada acontecendo e vai fazer automatico:
	//Sem headless:
	// const browser = await puppeteer.launch();

	//Com headless para ver acontecendo:
	const browser = await puppeteer.launch({ headless: false });

	//Abrir uma nova pagina no navegaro
	const page = await browser.newPage();

	//Ir para o endereco solicitado
	await page.goto("https://google.com");

	//Tirar o print da pagina no endereco solicitado e mostrar como vai salvar na pasta do projeto
	await page.screenshot({ path: "example.png" });

	//Ir para uma nova pagina
	await page.goto("https://facebook.com");

	//Tirar print da nova pagina e salvar no projeto
	await page.screenshot({ path: "facebook.png" });

	//Fechar o navegador
	await browser.close();
})();
