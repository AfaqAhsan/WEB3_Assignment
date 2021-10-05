const Web3 = require("web3");

const rpcURL = "https://ropsten.infura.io/v3/d2e382f4eddc45c19db782cce7a59b2a";
const abi = [
	{
		"inputs": [],
		"name": "addition",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "devide",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "multiply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "subtract",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const web3 = new Web3(rpcURL);

const address = "0x4438d6e180d425555FD8b247fb414fdf24e930e6";

const contract = new web3.eth.Contract(abi, address);


//callback function
//20,25
contract.methods.addition().call((err, result) => { console.log("Addition",result) })
contract.methods.subtract().call((err, result) => { console.log("subtraction",result) })
contract.methods.devide().call((err, result) => { console.log("devide",result) })
contract.methods.multiply().call((err, result) => { console.log("Multiplication",result) })


//read data from smart contract

