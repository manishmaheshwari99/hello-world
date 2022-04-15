import React, { Component } from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import InputType from '../components/InputField/InputType'
import LabelField from '../components/LabelField/LabelField'
import './Login.css'

class Login extends Component {
  render() {
    return (
      <>
        <Header />
        <div className='form-container'>
            <div className='form-content'>
                <form>
                   <div className='form-group'>
                       <LabelField text="Username" />
                       <InputType type="text" />
                    </div> 
                    <div className='form-group'>
                        <LabelField text="Password" />
                       <InputType type="password" />
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