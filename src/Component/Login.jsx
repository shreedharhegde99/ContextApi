import React from "react";
import { Authorizer } from "./LoginContext";
import styled from "styled-components";

const FOrmContainer = styled.div`
  margin: 100px 150px 0px 250px;
  width: 200px;
  height: 250px;
  border: ridge blue 5px;
  border-radius: 10px;
  padding: 35px;

  input {
    margin: 10px;
    width: 150px;
  }
  input:hover {
    border: blue 2px solid;
    border-radius: 3px;
  }
`;

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    const { handleLogin } = this.context;
    e.preventDefault();
    const { username, password } = this.state;
    handleLogin({ username, password });
  }

  render() {
    const { error } = this.context;
    return (
      <div>
        <FOrmContainer>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="username">Name:</label>
            <input
              required="required"
              type="text"
              placeholder="name"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <br />
            <label htmlFor="password">Password:</label>
            <input
              required="required"
              type="password"
              name="password"
              placeholder="password(phone no)"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <br />
            <input type="submit" value="Submit" />
          </form>
          {error && <div>There is an error"</div>}
        </FOrmContainer>

        {error && "There is an error"}
      </div>
    );
  }
}

Login.contextType = Authorizer;
