const vscode = require('vscode');

const axios =  require("axios");
const xmlParse = require("fast-xml-parser");
async function activate(context) {
	const res = await axios.get("https://blog.webdevsimplified.com/rss.xml");
	console.log(xmlParse.parse(res.data));
	console.log('Congratulations, your extension "luminous-fortune-search-blog" is now active!');

	let disposable = vscode.commands.registerCommand('luminous-fortune-search-blog.searchWDsBlogExample', function () {

		vscode.window.showInformationMessage('Hello World from luminous-fortune-search-blog!');

	});

	context.subscriptions.push(disposable);
}
function deactivate() { }

module.exports = {
	activate,
	deactivate
}
