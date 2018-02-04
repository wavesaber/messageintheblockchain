web3mystuff = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/z0u3VgomCEuiUbIKpk9y"))

abi = JSON.parse('[ { "constant": false, "inputs": [ { "name": "newText", "type": "string" } ], "name": "setText", "outputs": [ { "name": "", "type": "bool" } ], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [], "name": "mostSent", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "withdrawEther", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "name": "", "type": "address", "value": "0xd2b59245bf7fdcbb356be11b19246bcc71cea698" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "currentText", "outputs": [ { "name": "", "type": "string", "value": "Put your own text here for money!" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "maxLength", "outputs": [ { "name": "", "type": "uint256", "value": "50" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "payable": true, "stateMutability": "payable", "type": "fallback" } ]')
contractInstance = web3mystuff.eth.contract(abi).at('0x47D9425c828bdC1F20eDA9F5518237a21a23937D');

const currentText=document.getElementById('currentText'); 
const mostSent=document.getElementById('mostSent')

const mostSentContract = contractInstance.mostSent() / 10**18

mostSent.innerText =  "Current price: " + (mostSentContract).toString() + " ETH"
currentText.innerText = "\"" + contractInstance.currentText() + "\""
