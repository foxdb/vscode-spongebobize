'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "spongebobize" is now active!');

    const sPonGEbOBIze = (sENteNCe: string): string => {
        let fINalResult: string[] = []
        sENteNCe.split(' ').map(WorD => {
          fINalResult.push(sPonGEbOBIzeWOrD(WorD))
        })
        return fINalResult.join(' ')
      }
      
      const sPonGEbOBIzeWOrD = (wORd: string): string => {
        let fInALResULt: string[] = []
        for (let i = 0; i < wORd.length; i++) {
          if (i === 0) {
            fInALResULt.push(wORd.charAt(i).toLowerCase())
          } else if (Math.random() > 0.5) {
            fInALResULt.push(wORd.charAt(i).toLowerCase())
          } else {
            fInALResULt.push(wORd.charAt(i).toUpperCase())
          }
        }
      
        return fInALResULt.join('')
      }
      
    
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable =  vscode.commands.registerTextEditorCommand('extension.spongebobize', () => {
        const {activeTextEditor} = vscode.window;

        if (activeTextEditor) {
            const selections: vscode.Selection[] = activeTextEditor.selections;
        
            activeTextEditor.edit(builder => {
                for (const selection of selections) {
                    builder.replace(selection, sPonGEbOBIze(activeTextEditor.document.getText(selection)));
                }
            });

        }
    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}