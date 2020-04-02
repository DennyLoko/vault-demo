'use strict';

const options = {
    apiVersion: 'v1',
    endpoint: process.env.VAULT_ADDR,
    token: process.env.VAULT_TOKEN,
};

const vault = require('node-vault')(options);

const vaultRead = async () => {
    try {
        const secret = await vault.read('cubbyhole/whats-that');
        console.log(secret.data);
    } catch (e) {
        console.log('Secret not found!');
    }
};

setInterval(vaultRead, 1000);
