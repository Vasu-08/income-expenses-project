const jwt = require('jsonwebtoken');

const generateToken = id => {
  const token = jwt.sign({id}, 'anykey', {expiresIn: '10d'}); // should be in process.env
  return token;
};

module.exports = generateToken;
