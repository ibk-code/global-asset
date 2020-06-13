import React from "react";
import { GlobalContext } from "../../GlobalContextClass";
import history from "../../history";
import axios from 'axios';
import "./admin.style.css";
import ReactDOM from 'react-dom';
import AdminUser from "./admin.fragment";

class AdminTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      addBtc: " ",
      status: false,
      statusMsg: " ",
      walletAddress: " ",
    };
  }

  queryUsers = () => {
    const url = `https://global-asset.herokuapp.com/api/admin/allusers`;

    axios({
      method: "get",
      url: url
    })
      .then((res) => {
        const obj = res.data.users;
        this.setState({users: obj}) 
      })
      .catch((e) => {
        this.setState({
          status: true, 
          statusMsg: e.response.data.message
        }) 
      });
  };

  componentDidMount() {
    this.queryUsers();
  }

  updateField = (e) => {
    this.setState({
      addBtc: e.target.value,
      status: false
    })
  }

  searchUser = (e) => {
    e.preventDefault();
    const url = `https://global-asset.herokuapp.com/api/admin/user`;
    console.log(this.state.walletAddress);

    axios({
      method: "post",
      url: url,
      data:{
        btcId: this.state.walletAddress
      }
    })
      .then((res) => {
        const obj = res.data.users;
        this.setState({users: obj})
      })
      .catch((e) => {
        this.setState({
          status: true, 
          statusMsg: e.response.data.message
        }) 
    });
  };

  updatebtc= (e) => {
    const url = `https://global-asset.herokuapp.com/api/admin/Updatebtc`;

    let userId = e.currentTarget.parentNode.parentNode.getAttribute('data-key') 

     let input = e.currentTarget.parentNode.previousSibling.getElementsByTagName('input')[0].value;
     
    if (this.state.addBtc === input) {
      axios({
        method: "put",
        url: url,
        data:{
          id: userId,
          addedBtc: this.state.addBtc
        }
      })
        .then((res) => {
          this.setState({
            status: true, 
            statusMsg: res.data.message
          }) 
        })
        .catch((e) => {
          this.setState({
            status: true, 
            statusMsg: e.response.data.message
          }) 
        });
    }else{
      this.setState({
        status: true, 
        statusMsg: "Set value to be added to btc in the input field"
      })
    }
  }

  render() {
    const empty = <div style={{textAlign: "center"}}>User are empty</div>

    const userExist = this.state.users.map(e => (
      <AdminUser key={e._id} ekey={e._id} name={e.name} email={e.email} btcId={e.btcId} chang={this.updateField}  addBtc={this.updatebtc}/>
    ))

    return (
      <React.Fragment>
        <p style={{textAlign: "center"}}>{this.state.status && this.state.statusMsg}</p>
        <div className="search-wrap">
          <form onSubmit={this.searchUser}>
            <input 
            required
            type="text"
            placeholder="Search"
            className="search-input"
            onChange={(e) => (
              this.setState({
                walletAddress: e.target.value
              })
            )}
            />
            <button type="submit" className="search-btn">Search</button>
          </form>
        </div>
        <div className="table-component">
          <div onClick={this.queryUsers} className="query-btn">All users</div>
          <table>
            <thead>
              <tr>
                <th>Wallet Adress </th>
                <th>Name </th>
                <th>Email </th>
                <th>Add BTC</th>
              </tr>
            </thead>
            {
              this.state.users.length < 1 ? empty :
              <tbody>
                 { userExist}
              </tbody>
            }
          </table>
        </div>
      </React.Fragment>
    );
  }
}
export default AdminTable;
