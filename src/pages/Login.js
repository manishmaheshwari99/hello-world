import React, { Component } from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import LabelField from '../components/LabelField/LabelField'
import './Login.css'

class Login extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       userName: '',
       password: '',
       errorUserName: '',
       errorPassword: ''       
    }
  }

  handleUserNameChange = (event) => {
    const {value} = event.target;
    if(value.length < 6 ) {
      this.setState({
        errorUserName: 'Minimum length 6 is required'
      })
    }
    else {
      this.setState( {
        errorUserName: '',
      })
    }
    this.setState({
      userName: value
    })
  }
  handlePasswordChange = (event) => {
    const {value} = event.target;
    if(value.length < 6 ) {
      this.setState({
        errorPassword: 'Minimum length 6 is required'
      })
    }
    else {
      this.setState( {
        errorPassword: '',
      })
    }
    this.setState({
      password: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
  }

  render() {
    return (
      <>
        <Header />
        <div className='form-container'>
            <div className='form-content'>
                <form onSubmit={this.handleSubmit}>
                   <div className='form-group'>
                       <LabelField text="Username" />
                       <input type='text' value={this.state.userName} onChange={this.handleUserNameChange}/>
                       { this.state.errorUserName ? <span>{this.state.errorUserName}</span> : null}
                    </div> 
                    <div className='form-group'>
                        <LabelField text="Password" />
                       <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
                       { this.state.errorPassword ? <span>{this.state.errorPassword}</span> : null}
                    </div> 
                    <div className='form-group'>
                      <input type='submit' value='Login' />
                    </div>
                </form>
            </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default Login