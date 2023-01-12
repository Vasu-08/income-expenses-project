const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  const token = jwt.sign({ id }, "anykey", { expiresIn: "10d" });
  return token;
};

module.exports = generateToken;
