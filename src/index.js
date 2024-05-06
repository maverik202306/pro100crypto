// pro100crypto.js

// Import required modules
const crypto = require('crypto');

// Define the pro100crypto object
const pro100crypto = {};

// Function to generate a random key
pro100crypto.generateKey = () => {
  return crypto.randomBytes(16).toString('hex');
};

// Function to encrypt a message using AES algorithm
pro100crypto.encrypt = (message, key) => {
  const cipher = crypto.createCipher('aes-256-cbc', key);
  let encrypted = cipher.update(message, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
};

// Function to decrypt a message using AES algorithm
pro100crypto.decrypt = (encryptedMessage, key) => {
  const decipher = crypto.createDecipher('aes-256-cbc', key);
  let decrypted = decipher.update(encryptedMessage, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
};

// Export the pro100crypto object
module.exports = pro100crypto; 