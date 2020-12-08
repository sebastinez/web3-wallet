const web3 = new Web3()

function createWallet() {
    web3.eth.accounts.wallet.clear()
    const seed = document.querySelector("#seed")
    const {address,privateKey} = web3.eth.accounts.wallet.create(1,seed.value)[0]
    addToLog("#address", address)
    addToLog("#privateKey", privateKey)
}

function addToLog(element, text){
    console.log(text);
    document.querySelector(element).value=text
}
