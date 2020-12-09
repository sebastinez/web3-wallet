const web3 = new Web3()

window.addEventListener("DOMContentLoaded",()=> {
})

function createWallet() {
    const seed = document.querySelector("#seed")
    web3.eth.accounts.wallet.create(1,seed.value)
    const accounts = getWallet()
    document.querySelector("#addresses").innerHTML = accounts
}

function clearWallet() {
    web3.eth.accounts.wallet.clear()
    const accounts = getWallet()
    document.querySelector("#addresses").innerHTML = accounts
}

function getWallet() {
    const wallet = web3.eth.accounts.wallet
    const accounts = [];
    for (const key in wallet) {
        if(key.match("^[0-9]+$")) accounts.push(wallet[key])
    }
    return accounts.map((m,i)=>`Address${i}: ${m.address}, PrivKey${i}: ${m.privateKey}<br/>`)
}

function addToLog(element, value){
    document.querySelector(element).value=value
}
