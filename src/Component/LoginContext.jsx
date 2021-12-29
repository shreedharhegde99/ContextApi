import React from "react";
import data from "./Data";

export const Authorizer = React.createContext();

export default class LoginContext extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false,
      error: null,
      user: {}
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogin({ username, password }) {
    let auth = data.filter((item) => {
      if (item.username === username && item.password === password) {
        return;
      } else return false;
    });
    if (auth[0].indexOf(auth[0].username) !== -1) {
      console.log("auth", auth);
      this.setState({
        isAuth: true,
        loading: true,
        error: null,
        user: { ...auth[0] }
      });
    } else {
      this.setState({
        error: true
      });
    }
  }

  handleLogout() {
    this.setState({
      isAuth: false,
      user: {}
    });
  }

  render() {
    const { isAuth, loading, user } = this.state;
    const { handleLogin, handleLogout } = this;
    const value = { isAuth, loading, user, handleLogin, handleLogout };
    return (
      <Authorizer.Provider value={value}>
        {this.props.children}
      </Authorizer.Provider>
    );
  }
}
