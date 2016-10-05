const simpleServer = require('./simple'),
    expressServer = require('./express'),
    readline = require('readline'),
    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

console.log('1. Simple server');
console.log('2. Express server');
console.log('');

rl.question('Which one would you like to start [1]: ', answer => {

    switch (answer) {
        case '':
        case '1':
            simpleServer.start();
            break;

        case '2':
            expressServer.start();
            break;

        default:
            console.log('Wrong input. Try again.');
    }

  rl.close();
});
