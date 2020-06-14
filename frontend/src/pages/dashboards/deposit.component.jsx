import React from "react";
import axios from 'axios';
import "./deposit.style.css";

class Deposite extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      walletAddress: ' '
    }
  }

  queryAddress = () => {
    const url = `https://global-asset.herokuapp.com/api/admin/adminWallet`;

    axios({
      method: "get",
      url: url
    })
      .then((res) => {
        console.log(res)
        this.setState({
          walletAddress: res.data.adminWallet
        })
      })
      .catch((e) => {
        console.log(e.response.data.message)
      });
  }
  
  componentDidMount() {
    this.queryAddress();
  }

  render(){
    return (
      <div className="dep">
        <h2>To Deposit</h2>
        <p>Deposit Into Your Global Asset account With these simple steps</p>
        <li>
          Transfer the amount you wish to deposit into this Wallet Address{" "}
          <span>{this.state.walletAddress}</span>
        </li>
        <li>
          The Deposited Sum is then Automatically Added to your Global Asset
          account{" "}
        </li>
      </div>
    );
  }
}
export default Deposite;
