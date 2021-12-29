import Login from "./Component/Login";
import Dashboard from "./Component/Dashboard";
import { Authorizer } from "./Component/LoginContext";
export default function App() {
  return (
    <Authorizer.Consumer>
      {({ isAuth }) => {
        return isAuth ? <Dashboard /> : <Login />;
      }}
    </Authorizer.Consumer>
  );
}
