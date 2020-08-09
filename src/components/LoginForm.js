import React from "react";
import login from "../login";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      response: ""
    };
  }

  login = async e => {
    e.preventDefault();
    const response = await login(this.state.email, this.state.password);
    this.setState({ response });
    return false;
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              className="form-control"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Sign In
          </button>
        </form>

        {this.state.response && (
          <div className="card" style={{ marginTop: "2em" }}>
            <div className="card-body">
              <pre>Response:</pre>
              <pre>{JSON.stringify(this.state.response, null, 2)}</pre>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default LoginForm;