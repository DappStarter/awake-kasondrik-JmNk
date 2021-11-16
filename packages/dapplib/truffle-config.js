require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture roast food ski stove radar soap universe good nation food gauge'; 
let testAccounts = [
"0xc7a13bb1acd71e3cb53087d75c4cfb9103359f0044ea1795eef87783d638449e",
"0xfa6244e1be77309c745417d8683d21e0dcf4435e3487168b3a06c3af8da10d95",
"0x4bf47fca520fb8ef7f67b5c3956657294208b8390904cd4a4fa39d8da803f1d5",
"0x6001c11a343a221842c9bd2f7320bde4b9f49d097e1ad80d265f278e46799a44",
"0x7e53507ecfc7ba6f7dfa7fb6011b56d0b0edbe59cb840c595a67cd6eb24700f3",
"0x443fb78b3e0b60ad0767187aa0a1b1aad00566555f2b0ec57be3c5336bc57782",
"0xa1c6129823e1eea6b5735295af14cbcb289c2994f9e0c2f082c2525f1f12b23d",
"0xf5ee2457d10946618d92a425f88eb00a59b3a01507eff02f04d4c65391a03591",
"0x51f5366c4b6be19f013bf32c17bb28878a84541ea96df3457a549b3b1bd7673b",
"0x6496ef221bee4a2214e29aaedadc0f5aeb8263477df0d8a3b710c98d0c23f751"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

