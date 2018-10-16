import React, { Component } from "react";
import { signIn } from "../../store/actions/authActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  };
  render() {
    const { auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">SignIn</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <button className="btn pink">Sign In</button>
          </div>
          {this.props.error && (
            <div className="error red center msg">{this.props.error}</div>
          )}
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return { signIn: user => dispatch(signIn(user)) };
};

const mapStateToProps = state => {
  return {
    error: state.auth.authError,
    auth: state.firebase.auth
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
