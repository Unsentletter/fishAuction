import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class NewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      username: '',
      phoneNumber: ''
    }
  }

  handleClick = (e) => {
    // e.preventDefault();
    axios.post('http://localhost:5000/createUser', {
      email: this.state.email,
      password: this.state.password,
      username: this.state.username,
      phone_number: this.state.phoneNumber
    }).then((res) => {
      localStorage.setItem('token', res.data)
      console.log("Token", res.data)
    })


  };

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };

  render() {
    return (
      <form>
        Email: <input name='email' type='text' value={this.state.email} onChange={this.handleChange}/><br />
        Password: <input name='password' type='text' value={this.state.password} onChange={this.handleChange}/><br />
        Username: <input name='username' type='text' value={this.state.username} onChange={this.handleChange}/><br />
        Phone number: <input name='phoneNumber' type='text' value={this.state.phoneNumber} onChange={this.handleChange}/><br />
        <Link to={'/user_profile'} innerRef={this.handleClick}>
          <button>Submit</button>
        </Link>
      </form>
    )
  }
}

export default NewUser;
