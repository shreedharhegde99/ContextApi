import React from "react";
import { Authorizer } from "./LoginContext";

function Dashboard() {
  return (
    <Authorizer.Consumer>
      {({ user, handleLogout }) => {
        // console.log(user);
        return (
          <>
            <div style={{ display: "flex", flex: 2 }}>
              <div style={{ width: "200px" }}>
                <p> Welcome Mr.{user.name}</p>
                {/* Name:{user.name} <br/> */}
                Age:{user.age}
              </div>
              <div>
                <img
                  height="150px"
                  width="150px"
                  src={user.avatar}
                  alt="user_avatar"
                />
              </div>
            </div>
            <button onClick={handleLogout}>Log out</button>
          </>
        );
      }}
    </Authorizer.Consumer>
  );
}

export default Dashboard;
