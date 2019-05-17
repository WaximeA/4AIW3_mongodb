const jwt= require('jsonwebtoken');

const createToken = (user = {}) => {
  return jwt.sign({
    firstName: user.firstName
  }, process.env.JWT_SECRET, {
    algorithm: "HS256",
    expiresIn: 3600
  });
}

const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET, (error, decodedToken) => {
      if (error || !decodedToken) reject (error);
      resolve(decodedToken);
    })
  });
}

module.exports = {
  createToken,
  verifyToken
}