const char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = `!@#$%^&*()_+-={}[];:'"\|/?.>,<`;

module.exports = (hasNumbers = true, hasSymbols = true) => {
  let string = char;
  string += hasNumbers ? numbers : '';
  string += hasSymbols ? symbols : '';
  return string;
};
