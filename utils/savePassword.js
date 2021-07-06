const fs = require('fs');
const os = require('os');
const path = require('path');
const chalk = require('chalk');

module.exports = (password) => {
  fs.open(
    path.join(__dirname, '../passwords/', 'passwords.txt'),
    'a',
    444,
    (e, id) => {
      fs.write(id, password + os.EOL, null, 'utf-8', () => {
        fs.close(id, () => {
          console.log(chalk.green('Passwords saved to passwords.txt'));
        });
      });
    }
  );
};
