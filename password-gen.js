const generatepwd = require("generate-password");
const pwd = generatepwd.generate({
  lenght: 20,
  numbers: true,
  strict: true,
});
console.log(pwd);
