var nanoid = require("nanoid");

const imageGenerator = function() {
  return `https://api.adorable.io/avatars/160/${nanoid()}`;
};

export default imageGenerator;
