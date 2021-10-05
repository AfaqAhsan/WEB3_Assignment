const Web3 = require("web3");

const rpcURL = "https://ropsten.infura.io/v3/d2e382f4eddc45c19db782cce7a59b2a";
//const rpcURL = "HTTP://127.0.0.1:7545";
//if we want to connect ganache then use this ganache url
const account = "0x59A5BAe94a3BD41cc93C0374956698FF95FdaF01";

const web3 = new Web3(rpcURL);

web3.eth.getBalance(account, (err, wei) => {
    console.log("Balance in wei",wei);
    balance = web3.utils.fromWei(wei, 'ether');
    console.log("Balance in Ether",balance);
   
  })
  
