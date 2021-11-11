import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

class SignupForm extends React.Component {
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
      <h2>Join us</h2>
      <h5>Create your personal account</h5>
      <form onSubmit={e => this.props.handle_signup(e, this.state)}>
        <h4>Sign Up</h4>
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
        </p>
        <p>
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
        <button id="sub_btn" type="submit">Sign Up </button>
        {/* <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer> */}
      </form>
      </div>
    );
  }
}

export default SignupForm;

SignupForm.propTypes = {
  handle_signup: PropTypes.func.isRequired
};