const vscode = require('vscode')
const axios = require("axios")
const xmlParse = require("fast-xml-parser")

async function activate(context) {

	const res = await axios.get("https://blog.webdevsimplified.com/rss.xml")

	const articles = xmlParse.parse(res.data).rss.channel.item

		(article => {
			return {
				label: article.title,
				detail: article.description,
				link: article.link
			}
		})

	// console.log(articles);


	let disposable = vscode.commands.registerCommand('luminous-fortune-search-blog.searchWDsFBlogExample',

		async function () {

			const article = await vscode.window.showQuickPick(articles, {

				matchOnDetail: true,

			})

			// console.log(article);
			if (article == null) return

			vscode.env.openExternal(article.link)
		});

	context.subscriptions.push(disposable);
}

function deactivate() { }

module.exports = {
	activate,
	deactivate
}
