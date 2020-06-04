import React, {Component} from 'react'
import {NavLink, Redirect} from 'react-router-dom';

class Login extends Component {
  constructor(props){
    super(props)
    let loggedIn = false
    this.state = {
      username: '',
      password: '',
      loggedIn
    }
    this.onChange = this.onChange.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  onChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitForm(event){
    event.preventDefault()
    const {username, password} = this.state
    if(username === 'Admin' && password === 'admin123') {
      this.setState({
        loggedIn: true
      })
    }
  }

  render() {
    if(this.state.loggedIn) {
      return <Redirect to='/dashboard' />
    }
      return (
          <div className="global-container">
          <div className="card login-form">
            <div className="card-body">
              <h3 className="card-title text-center">Log in to {this.props.label}</h3>
              <div className="card-text"> 

                <form onSubmit={this.submitForm}>                
                  <div className="form-group">
                    <label>{this.props.username}</label>

                    <input type="text" 
                    name="username" 
                    value={this.state.username}
                    onChange={this.onChange}
                    className="form-control form-control-sm" />

                  </div>
                  <div className="form-group">
                  <label>{this.props.passwordlabel}</label>
                  <a href="" style={{float: 'right', fontSize: '12px'}}>{this.props.forgottext}</a>
                    
                    <input type="password" 
                    name="password" 
                    value={this.state.password} 
                    onChange={this.onChange}
                    className="form-control form-control-sm" id="" />

                  </div>
                  <button type="submit" className="btn btn-primary btn-block">{this.props.btnname}</button>
                  <div className="sign-up">
                    Don't have an account? <a href="">Create One</a>                  
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      
      )
  }
}
export default Login;
