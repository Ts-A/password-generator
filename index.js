const { program } = require('commander');

program
  .version('1.0.0', '-v, --version', 'Version of the command line tool')
  .description('A simple command line generating tool');

program
  .option('-l, --length <number>', 'Length of the password', '8')
  .option('-s, --save', 'Save the password to passwords.txt', true)
  .option('-nn, --no-numbers', 'Remove numbers')
  .option('-nn, --no-symbols', 'Remove symbols')
  .parse();

console.log(program.opts());

const { length, save, numbers, symbols } = program.opts();
