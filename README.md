# pro100crypto

## Overview

pro100crypto is a simple npm package for cryptographic operations in JavaScript. It provides functionality for generating random keys, encrypting messages, and decrypting messages using the AES algorithm.

## Installation

To install pro100crypto, use npm:
npm install pro100crypto

## Usage
const pro100crypto = require('pro100crypto');

// Generate a random key
const key = pro100crypto.generateKey();

// Encrypt a message
const message = 'Hello, world!';
const encryptedMessage = pro100crypto.encrypt(message, key);

// Decrypt a message
const decryptedMessage = pro100crypto.decrypt(encryptedMessage, key);

console.log('Original message:', message);
console.log('Encrypted message:', encryptedMessage);
console.log('Decrypted message:', decryptedMessage);

## API

### pro100crypto.generateKey()

Generates a random key for cryptographic operations.

Returns:
- A string representing the generated key.

### pro100crypto.encrypt(message, key)

Encrypts a message using the AES algorithm.

Parameters:
- message: The message to encrypt (string).
- key: The encryption key (string).

Returns:
- A string representing the encrypted message.

### pro100crypto.decrypt(encryptedMessage, key)

Decrypts an encrypted message using the AES algorithm.

Parameters:
- encryptedMessage: The encrypted message to decrypt (string).
- key: The encryption key (string).

Returns:
- A string representing the decrypted message.

## License

This package is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.