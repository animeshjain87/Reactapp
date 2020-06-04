import React, {Component} from 'react'
import {NavLink } from 'react-router-dom';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = { username: '' };
  }
  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }

  render() {

    let header = '';
    if (this.state.username) {
      header =  <NavLink exact to="/dashboard">
                    <button type="submit" className="btn btn-primary btn-block">{this.props.btnname}</button>
              </NavLink>;
    } else {
      header = '';
    }



      return (
          <div className="global-container">
          <div className="card login-form">
            <div className="card-body">
              <h3 className="card-title text-center">Log in to {this.props.label}</h3>
              <div className="card-text">              
                <form>                
                  <div className="form-group">
                    <label>{this.props.emaillabel}</label>
                    <input type="email" className="form-control form-control-sm" onChange={this.myChangeHandler} />
                  </div>
                  <div className="form-group">
                  <label>{this.props.passwordlabel}</label>
                  <a href="" style={{float: 'right', fontSize: '12px'}}>{this.props.forgottext}</a>
                    <input type="password" className="form-control form-control-sm" id="" />
                  </div>
                  {header}                  
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
