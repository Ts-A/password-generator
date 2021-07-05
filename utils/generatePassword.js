const createPassword = require('./createPassword');

module.exports = ({ length, numbers, symbols }) => {
  const string = createPassword(numbers, symbols);
  let password = '';
  const { floor, random } = Math;

  for (let i = 0; i < length; ++i) {
    password += string.charAt(floor(random() * string.length));
  }

  return password;
};
