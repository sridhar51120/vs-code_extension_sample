const vscode = require('vscode');

function activate(context) {

	console.log('Congratulations, your extension "luminous-fortune-blog-example" is now active!');

	let disposable = vscode.commands.registerCommand('luminous-fortune-blog-example.searchBlogExample', function () {
		vscode.window.showInformationMessage('This is a Luminous Fortune search Example');
	});

	context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
