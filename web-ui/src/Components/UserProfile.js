import React, { Component } from "react";
import axios from 'axios';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: 'testing'
    }
  }
  // componentWillMount() {
  //   const token = localStorage.getItem('token');
  //   axios.get('http://localhost:5000/users/me', {headers: {token}})
  //     .then((user) => {
  //       console.log("DETIALS", user.data.user[0])
  //       const userDetails = user.data.user[0]
  //       this.setState({
  //         email: userDetails.email,
  //         username: userDetails.username
  //       })
  //     });
  // }


  render() {
    return (
      <div>
        <h1>{this.state.username}</h1>
      </div>
    )
  }
}

export default UserProfile;