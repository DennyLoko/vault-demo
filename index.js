'use strict';

const options = {
    apiVersion: 'v1',
    endpoint: process.env.VAULT_ADDR,
    token: process.env.VAULT_TOKEN,
};

const vault = require("node-vault")(options);

const vaultRead = () => {
    vault.read('cubbyhole/whats-that').then(secret => {
        console.log(secret.data);

        setTimeout(vaultRead, 1000);
    }).catch(() => {
        console.log('Secret not found!');

        setTimeout(vaultRead, 1000);
    })
};

vaultRead();
