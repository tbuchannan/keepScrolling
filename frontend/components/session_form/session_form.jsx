import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: "", password: "", username: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn(){
    if(this.props.loggedIn) {
      this.props.router.push("/");
    }
  }

  update(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    let user;
    if (e.target.value === "Guest Login"){
      user = {email: "tj.buchannan@gmail.com", password: "password123"};
      this.props.guestLogin({user});
    } else {
      user = this.state;
      this.props.processForm({user});
    }
  }


  renderErrors(){
    return (
      <ul>
        {this.props.errors.map((error, i) =>(
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    let onLoginPage;
    let buttonText;
    if (this.props.route.path === "/login"){
      onLoginPage = true;
      buttonText = "Login";
    } else {
      onLoginPage = false;
      buttonText = "Sign Up";
      }

    const usernameField = onLoginPage ? null : (
      <label>
        <input type="text"
          value={this.state.username}
          onChange={this.update("username")}
          placeholder="Username"
          className="login-input" />
      </label>
    );

    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div className="logo-name">keepScrolling</div>

          {this.renderErrors()}
          <div className="login-form">

            <label>
              <input type="text"
                value={this.state.email}
                onChange={this.update("email")}
                placeholder="Email"
                className="login-input" />
            </label>

            <label>
              <input type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password"
                className="login-input" />
            </label>
            {usernameField}

            <input
              type="submit"
              className="login-submit"
              value={buttonText}/>
          </div>
        </form>
        <input
          onClick={this.handleSubmit}
          className="guest-login"
          type="submit"
          value="Guest Login"
        />
      </div>
    );
  }
}

export default withRouter(SessionForm);
