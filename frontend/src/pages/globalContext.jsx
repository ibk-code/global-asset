import React, {useState, createContext} from 'react';
import queryString from 'query-string';

const GlobalContext = createContext();

const GlobalContextProvider = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [walletAddress, setWalletAddress] = useState('')
    const [plan, setPlan] = useState('A day plan')
    const [referralId, setReferralId] = useState('')

    const getrefIdparam = () => {
        let url = this.props.location.search;
        const params = queryString.parse(url);
        const {referralId} = params
        if (referralId) {
            setReferralId(referralId)
            console.log(referralId)
        }
    }

    const handleSignUp = async (e) => {
        e.preventDefault();
        this.getrefIdparam();

        const url = `http://localhost:5000/api/auth/signup`

        axios({
            method: 'post',
            url: url,
            data:{
                name: name,
                email: email,
                password: password,
                plan: plan,
                btcId: walletAddress,
                referralId: referralId
            }
        }).then(res => {
            console.log(res);
        }).catch(() => {
            throw new Error("An error occured")
        })
    }

    return(
        <GlobalContext.Provider value={handleSignUp, setName, setPassword, setEmail, setPlan, setWalletAddress}>
            {this.props.children}
        </GlobalContext.Provider>
    )
}