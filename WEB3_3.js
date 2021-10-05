const Web3 = require("web3");
const Tx = require("ethereumjs-tx").Transaction;
const rpcURL = "https://ropsten.infura.io/v3/d2e382f4eddc45c19db782cce7a59b2a";

const web3 = new Web3(rpcURL);
const account1 = "0x59A5BAe94a3BD41cc93C0374956698FF95FdaF01";
const account2 = "0xEDDF615BB9baa9D09604847A67179450D39E0e9B";

const privatekey = "cdac82c4d138d3b976d9b381b5bbe8ec96a0015a6154c4b9e5754dd08f25be9b";
const account1_privatekey = Buffer.from(privatekey, 'hex');

//Async function

/*const fundTranfer = async ()=> {
    try {
        const txCount = await web3.eth.getTransactionCount(account1);
        const txObject = {
            nonce:      web3.utils.toHex(txCount),
            to:         account2,
            value:      web3.utils.toHex(web3.utils.toWei('0.1','ether')),
            gasLimit:   web3.utils.toHex(21000),
            gasPrice:   web3.utils.toHex(web3.utils.toWei('10','gwei'))
    
        }
        const tx = new Tx(txObject, { 'chain':'ropsten' });
        tx.sign(account1_privatekey);
        const TXSERIALIZED = tx.serialize();
        const raw = '0x' + TXSERIALIZED.toString('hex');
        const response = await web3.eth.sendSignedTransaction(raw);
        console.log(response);
    }catch(err) {
        console.log(err);
    }
}
fundTranfer();*/


web3.eth.getTransactionCount(account1, (error,txCount)=>{
    console.log("nounce value :", txCount);
    const txObject = {
        nonce:     web3.utils.toHex(txCount),
        to:         account2,
        value:      web3.utils.toHex(web3.utils.toWei('1','ether')),
        gasLimit:   web3.utils.toHex(21000),
        gasPrice:   web3.utils.toHex(web3.utils.toWei('10','gwei'))

    }
    const tx = new Tx(txObject, {'chain':'ropsten'});
    tx.sign(account1_privatekey);

    const serialize = tx.serialize();
    const txHex = '0x'+serialize.toString('hex');
    web3.eth.sendSignedTransaction(txHex,(error, txHash) => {
        if(!error){
            console.log("Transaction Successfull" ,txHash);
        }else{
            console.log("Transaction error :",error);
        }
        
    });
})
