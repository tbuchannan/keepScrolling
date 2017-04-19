import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: "", password: ""};
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
    // debugger
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to keepScrolling!
          <br/>
          Please {this.props.formType} or {this.navLink()}
          {this.renderErrors()}
          <div className="login-form">
            <br/>

            <label>Email:
              <input type="text"
                value={this.state.email}
                onChange={this.update("email")}
                className="login-input" />
            </label>

            <label> Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="login-input" />
            </label>

            <br/>
            <input type="submit" value="Submit"/>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
