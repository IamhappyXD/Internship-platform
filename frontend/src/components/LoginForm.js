import React from 'react';
import PropTypes from 'prop-types';

class LoginForm extends React.Component {
  state = {
    username: '',
    password: ''
  };

  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  render() {
    return (
      <div className="text-center m-5-auto">
      <h2>Log In</h2>
      <form onSubmit={e => this.props.handle_login(e, this.state)}>
      <h4>Log In</h4>
        <p>
        <br/>
        <label htmlFor="username">Username</label>
        <br/>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handle_change}
        />
        </p><p>
        <br/>
        <label htmlFor="password">Password</label>
        <br/>
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handle_change}
        />
        </p>
        <br/>
        <p>
        <button id="sub_btn" type="submit" >Login</button> </p>
      </form>
      </div>
    );
  }
}

export default LoginForm;

LoginForm.propTypes = {
  handle_login: PropTypes.func.isRequired
};