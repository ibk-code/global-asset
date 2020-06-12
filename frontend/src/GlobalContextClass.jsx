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
      plan: " ",
      deposit: 0,
      btcBalance: 0,
      totalReferrals: 0,
      userId: "",
      loggedIn: false,
      referralId: " ",
      withdrawAddr: " ",
      withdrawAmt: " ",
    };
  }

  componentDidMount() {
    const path = window.location.pathname;
    if (path === "/" || "/admin") {
      return;
    }

    if (path !== "/Login" || "/Signup") {
      if (!this.state.loggedIn) {
        history.push("/Login");
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const path = window.location.pathname;
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
    return (
      <GlobalContext.Provider
        value={{
          state: this.state,
          updateName: (e) => {
            this.getrefIdparam();
            this.setState({ name: e.target.value });
          },
          updateEmail: (e) => {
            this.setState({ email: e.target.value });
          },
          updatePassword: (e) => {
            this.setState({ password: e.target.value });
          },
          updateWalletAddress: (e) => {
            this.setState({ walletAddress: e.target.value });
          },
          updatePlan: (e) => {
            this.setState({ plan: e.target.value });
          },
          updateWithdrawAddr: (e) => {
            this.setState({ withdrawAddr: e.target.value });
          },
          updateWithdrawAmt: (e) => {
            this.setState({ withdrawAmt: e.target.value });
          },
          handleSignUp: (e) => {
            e.preventDefault();

            const url = `http://localhost:5000/api/auth/signup`;

            axios({
              method: "post",
              url: url,
              data: {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                plan: this.state.plan,
                btcId: this.state.walletAddress,
                referralId: this.state.referralId,
              },
            })
              .then((res) => {
                console.log(res);
                this.setState({
                  name: res.data.name,
                  email: res.data.email,
                  walletAddress: res.data.walletAddresss,
                  plan: res.data.plan,
                  deposit: res.data.deposit,
                  btcBalance: res.data.btcBalance,
                  totalReferrals: res.data.referrals,
                  userId: res.data.userId,
                  loggedIn: true,
                });
                history.push("/user");
              })
              .catch(() => {
                throw new Error("An error occured");
              });
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
            });
            history.push("/Login");
          },
          login: (e) => {
            e.preventDefault();
            const url = `http://localhost:5000/api/auth/login`;

            axios({
              method: "post",
              url: url,
              data: {
                email: this.state.email,
                password: this.state.password,
              },
            })
              .then((res) => {
                console.log(res);
                this.setState({
                  name: res.data.name,
                  email: res.data.email,
                  walletAddress: res.data.walletAddresss,
                  plan: res.data.plan,
                  deposit: res.data.deposit,
                  btcBalance: res.data.btcBalance,
                  totalReferrals: res.data.referrals,
                  userId: res.data.userId,
                  loggedIn: true,
                });
                history.push("/user");
              })
              .catch(() => {
                throw new Error("An error occured");
              });
          },
          withdraw: (e) => {
            e.preventDefault();
            const url = `http://localhost:5000/api/user/withdraw`;

            if (this.state.withdrawAmt <= this.state.btcBalance) {
              axios({
                method: "put",
                url: url,
                data: {
                  id: this.state.userId,
                  address: this.state.withdrawAddr,
                  amount: this.state.withdrawAmt,
                },
              })
                .then((res) => {
                  console.log(res);
                  this.setState({ btcBalance: res.data.newBalance });
                })
                .catch(() => {
                  throw new Error("An error occured");
                });
            } else {
              console.log("You can't withdraw more than your balance");
            }
          },
        }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

export { GlobalContext, GlobalContenxtProvider };
