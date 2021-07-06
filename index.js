const { program } = require('commander');
const clipboardy = require('clipboardy');
const chalk = require('chalk');
const { log } = console;
const { writeSync } = clipboardy;
const generatePassword = require('./utils/generatePassword');
const savePassword = require('./utils/savePassword');

program
  .version('1.0.0', '-v, --version', 'Version of the command line tool')
  .description('A simple command line generating tool');

program
  .option('-l, --length <number>', 'Length of the password', '8')
  .option('-s, --save', 'Save the password to passwords.txt', true)
  .option('-nn, --no-numbers', 'Remove numbers')
  .option('-ns, --no-symbols', 'Remove symbols')
  .parse();

const generatedPassword = generatePassword(program.opts());

if (program.opts().save == true) savePassword(generatedPassword);

writeSync(generatedPassword);

log(chalk.cyan('Generated Password: ') + chalk.bold(generatedPassword));
log(chalk.magenta('Password copied to clipboard!'));
