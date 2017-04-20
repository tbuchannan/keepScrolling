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
    const user = this.state;
    this.props.processForm({user});
  }

  navLink(){
    if (this.props.formType === "login"){
      return <Link to="/signup">Click to Sign Up!</Link>;
    } else {
      return <Link to="/login">Click to Login</Link>;
    }
  }

  renderErrors(){
    // debugger
    return (
      <ul>
        {this.props.errors.map((error, i) =>(
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    const onLoginPage = (this.props.route.path === "/login") ? true : false;
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

          Please {this.props.formType} or {this.navLink()}
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
              value="Submit"/>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
