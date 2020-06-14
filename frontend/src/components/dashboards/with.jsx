import React from "react";
import { GlobalContext } from "../../GlobalContextClass";
import axios from 'axios';
import "./with.css";

class With extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      withdraw: false
    }
  }

  queryWithdrawStatus = () => {
    const url = `https://global-asset.herokuapp.com/api/admin/adminWithdrawstatus`;

    axios({
      method: "get",
      url: url
    })
      .then((res) => {
        console.log(res)
        this.setState({
          withdraw: res.data.withdrawStatus
        })
      })
      .catch((e) => {
        console.log(e.response.data.message)
      });
  }

  componentDidMount(){
    this.queryWithdrawStatus();
  }

  render(){
    return (
      <GlobalContext.Consumer>
        {(context) => (
          !this.state.withdraw ?
          <p style={{margin: "auto"}}>Withdraw is not available. Check back later</p> :
          <React.Fragment>
            <div className="with">
              <form id="form" onSubmit={context.withdraw}>
                <div className="with1">
                  <label>Wallet Address</label>
                  <input
                    name="text"
                    type="text"
                    placeholder="Wallet Address"
                    required
                    onChange={context.updateWithdrawAddr}
                  />
                </div>
                <div className="with2">
                  <label>Withdraw Amount</label>
                  <input
                    name="text"
                    type="text"
                    placeholder="Withdraw Amount"
                    required
                    onChange={context.updateWithdrawAmt}
                  />
                </div>
                <button className="with3" type="submit">Withdraw</button>
              </form>
              <p style={{textAlign: "center"}}>{context.state.status && context.state.statusMessage}</p>
            </div>
          </React.Fragment>
        )}
      </GlobalContext.Consumer>
    );
  }
}
export default With;
