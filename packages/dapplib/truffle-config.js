require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hidden enter october foot edge riot sad sniff install flower army ghost'; 
let testAccounts = [
"0x82b7f0cfd0d336022c927c2cd4af6599fcf4ebe6e0345840e4446766beb3a990",
"0xc34194277cd773c330f0dde45101ea073d119b920f3021eb9dbcbba6333d5ee5",
"0xe953633c18698c031cf5e18237caf167072836e09fa31070484e143a5ce8bff1",
"0xae686cf636e01e3113d6216d8a61293d1c3159658dee9dd60db5f3b3bf80aeaa",
"0x5b08185badbd57ab0c05de6adc944fcb456506997341d92b58bf5374be782697",
"0xccad236f0cebd991256bc827e40b241e45bb8165f6fcee5477c47b0784b0ab75",
"0x3af48ae53892c6087ca42c5212c1d60f724aa5a3e340a6cf0fac7ea14a5e0a9b",
"0xb4b92a647e36f32e4cf4ee06b0cb20d909113fa87c44c988069386ae613ad12e",
"0x5f46deb745da531460f4141a17aafebed7ccf1c1301ad760d9b7fd1be31fbfef",
"0x6d7302c3bf2ee5f8a3dd68696d55ed197663263c9cf24b84864ce73e0e36347b"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

