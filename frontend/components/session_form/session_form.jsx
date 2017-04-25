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
  componentWillReceiveProps(nextProps){
    if (this.props.formType !== nextProps.formType){
      this.props.clearErrors();
      this.state = {email: "", password: "", username: ""};
    }
  }

  redirectIfLoggedIn(){
    if(this.props.loggedIn) {
      this.props.router.push("/dashboard");
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

  componentDidMount(){
    document.body.style.background = "";
    let header = document.getElementsByClassName("header-signup-mounted");
    if (header.length >= 1){
      document.getElementsByClassName("header-signup-mounted")[0].className=("header-signup-unmounted");
    }
  }

  renderErrors(){
    return (
      <ul className="errors">
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

      </div>
    );
  }
}

export default withRouter(SessionForm);
