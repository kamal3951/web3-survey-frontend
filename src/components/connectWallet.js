const connectWallet = async ({ setAddress }) => {
    if (!window.ethereum) {
        console.log("Install Metamask!")
    }
    else {
        try {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAddress(accounts[0]);
        }
        catch (error) {
            console.log(error);
        }
    }
}

export default connectWallet;