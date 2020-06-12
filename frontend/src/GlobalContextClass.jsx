import React from "react";
import queryString from "query-string";
import axios from "axios";
import history from "./history";

const GlobalContext = React.createContext();

class GlobalContenxtProvider extends React.Component {

    constructor(props, context) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            walletAddress: "",
            plan: "A day plan",
            deposit: 0,
            btcBalance: 0,
            totalReferrals: 0,
            userId: "",
            loggedIn: false,
            referralId: " ",
            withdrawAddr: " ",
            withdrawAmt: " ",
            status: false,
            statusMessage: " "
        }
    }

    componentDidMount() {
        const path = window.location.pathname
        const loginSession = window.sessionStorage.getItem("loggedIn")
        if (path === '/' || window.location.href.indexOf("referralId") > -1 || '/about' || '/contact' || "/admin") {
            window.sessionStorage.setItem("loggedIn", false);
            window.sessionStorage.removeItem("userToken");
            return
        }

        if (path === '/Login' || '/Signup') {
            window.sessionStorage.setItem("loggedIn", false);
            window.sessionStorage.removeItem("userToken");
        }

        if (path !== '/Login' || '/Signup') {
            if (!loginSession || !this.state.loggedIn) {
               history.push('/Login') 
            }else{
                const obj = JSON.parse(sessionStorage.getItem('userState'))
                this.setState({
                    name:obj.name,
                    email:obj.email,
                    walletAddress: obj.walletAddress,
                    plan: obj.plan,
                    deposit: obj.deposit,
                    btcBalance: obj.btcBalance,
                    totalReferrals: obj.totalReferrals,
                    userId: obj.userId,
                    referralId: obj.referralId
                })
            }
        }else{
            this.setState({
                name: "",
                email: "",
                password: "",
                walletAddress: "",
                plan: "A day plan ",
                deposit: 0,
                btcBalance: 0,
                totalReferrals: 0,
                userId: "",
                loggedIn: false,
                referralId: " ",
                withdrawAddr: " ",
                withdrawAmt: " "
            })
            window.sessionStorage.setItem("loggedIn");
            window.sessionStorage.removeItem("userToken");
        }
    }
  }

    componentDidUpdate(prevProps, prevState) {
        const path = window.location.pathname
        const sessionObj = (({name, email,walletAddress, plan, deposit,btcBalance, totalReferrals, userId,referralId}) => ({name, email,walletAddress, plan, deposit,btcBalance, totalReferrals, userId,referralId}))(this.state)
        window.sessionStorage.setItem("userState",  JSON.stringify(sessionObj));

        // const loginSession = window.sessionStorage.getItem("loggedIn")
        // if (loginSession) {
        //     const obj = JSON.parse(sessionStorage.getItem('userState'))
        //     this.setState({
        //         name:obj.name,
        //         email:obj.email,
        //         walletAddress: obj.walletAddress,
        //         plan: obj.plan,
        //         deposit: obj.deposit,
        //         btcBalance: obj.btcBalance,
        //         totalReferrals: obj.totalReferrals,
        //         userId: obj.userId,
        //         referralId: obj.referralId
        //     })
        // }
        // if (path === '/withdraw') {
        //     return
        // }
        // if (path === '/Login' || '/SignUp') {
        //     console.log('Hello1');
        //     if (this.state.loggedIn) {
        //         history.push("/user")
        //     } 
        // }

    // if (path === '/Signup') {
    //     console.log('Hello2');
    //     return
    // }

    // if (path === '/user' || '/withdraw') {
    //     if (!this.state.loggedIn) {
    //     console.log('Hello3');
    //        history.push('/Login')
    //     }
    // }
    // if (path === '/Login') {
    // }
  }

  getrefIdparam = () => {
    let url = window.location.search;
    const params = queryString.parse(url);
    const { referralId } = params;
    if (referralId) {
      this.setState({ referralId: referralId });
      console.log(referralId + "hello");
    }
  };

    render() {
        return(
            <GlobalContext.Provider value={{
                state: this.state,
                updateName: (e) => {
                    this.getrefIdparam();
                    this.setState({name: e.target.value});
                },
                updateEmail: (e) => {
                    this.setState({email: e.target.value})
                },
                updatePassword: (e) => {
                    this.setState({password: e.target.value})
                },
                updateWalletAddress: (e) => {
                    this.setState({walletAddress: e.target.value})
                },
                updatePlan: (e) => {
                    this.setState({plan: e.target.value})
                },
                updateWithdrawAddr: (e) => {
                    this.setState({withdrawAddr: e.target.value, statu: false, statusMessage: " "})
                },
                updateWithdrawAmt: (e) => {
                    this.setState({withdrawAmt: e.target.value})
                },
                handleSignUp: (e) => {
                    e.preventDefault();
            
                    const url = `http://localhost:5000/api/auth/signup`
            
                    axios({
                        method: 'post',
                        url: url,
                        data:{
                            name: this.state.name,
                            email: this.state.email,
                            password: this.state.password,
                            plan: this.state.plan,
                            btcId: this.state.walletAddress,
                            referralId: this.state.referralId
                        }
                    }).then(res => {
                        console.log(res);
                        this.setState({
                            name: res.data.name,
                            email: res.data.email,
                            walletAddress: res.data.walletAddress,
                            plan: res.data.plan,
                            deposit: res.data.deposit,
                            btcBalance: res.data.btcBalance,
                            totalReferrals: res.data.referrals,
                            userId: res.data.userId,
                            loggedIn: true,
                            status: false,
                            statusMessage: " "
                        })
                        window.sessionStorage.setItem("userToken", JSON.stringify(`${res.data.token}`));
                        window.sessionStorage.setItem("loggedIn", true);
                        history.push('/user')
                    }).catch((e) => {
                        this.setState({
                            status: true,
                            statusMessage: "Email has been registered or walletAddress has been registered, confirm details"
                        })
                    })
                },
                logout: () => {
                    this.setState({
                        name: " ",
                        email: " ",
                        walletAddress: " ",
                        plan: " ",
                        deposit: " ",
                        btcBalance: " ",
                        totalReferrals: " ",
                        userId: " ",
                        loggedIn: false,
                        status: false,
                        statusMessage: " ",
                    })
                    window.sessionStorage.setItem("loggedIn", false);
                    window.sessionStorage.removeItem("userToken");
                    history.push('/Login')
                },
                login: (e) => {
                    e.preventDefault();
                    const url = `http://localhost:5000/api/auth/login`
            
                    axios({
                        method: 'post',
                        url: url,
                        data:{
                            email: this.state.email,
                            password: this.state.password,
                        }
                    }).then(res => {
                        const obj = res.data
                        this.setState({
                            name: res.data.name,
                            email: res.data.email,
                            walletAddress: res.data.walletAddress,
                            plan: res.data.plan,
                            deposit: res.data.deposit,
                            btcBalance: res.data.btcBalance,
                            totalReferrals: res.data.referrals,
                            userId: res.data.userId,
                            loggedIn: true,
                            status: false,
                            statusMessage: " "
                        })
                        window.sessionStorage.setItem("userToken", JSON.stringify(`${obj.token}`))
                        window.sessionStorage.setItem("loggedIn", true);
                        history.push('/user')
                    }).catch((e) => {
                        this.setState({
                            status: true,
                            statusMessage: e.response.data.message
                        })
                    })
                },
                withdraw: (e) => {
                    e.preventDefault();
                    const url = `http://localhost:5000/api/user/withdraw`
                    const token = JSON.parse(sessionStorage.getItem('userToken'))
                    if(this.state.withdrawAmt <= this.state.btcBalance && this.state.withdrawAmt !== "0" ){
                        axios({
                            method: 'put',
                            url: url,
                            data:{
                                id: this.state.userId,
                                address: this.state.withdrawAddr,
                                amount:this.state.withdrawAmt,
                            },
                            headers: {
                                'Authorization': `Bearer ${token}`
                            }
                        }).then(res => {
                            console.log(res);
                            this.setState({
                                btcBalance: res.data.newBalance,
                                status: true,
                                statusMessage: res.data.message
                            })
                        }).catch((e) => {
                            history.push('/Login')
                        })
                    }else{
                        this.setState({
                            status: true,
                            statusMessage: "You can't withdraw more than your balance"
                        })
                    }
                }
            }}>
                {this.props.children}
            </GlobalContext.Provider>
        )
    }
}

export { GlobalContext, GlobalContenxtProvider };
