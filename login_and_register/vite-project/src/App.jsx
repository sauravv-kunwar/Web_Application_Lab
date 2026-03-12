import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import "./styles.css";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container">
      {isLogin ? (
        <>
          <Login />
          <p style={{textAlign:"center"}}>
            Don't have an account?{" "}
            <button className="switch-btn" onClick={()=>setIsLogin(false)}>
              Register
            </button>
          </p>
        </>
      ) : (
        <>
          <Register />
          <p style={{textAlign:"center"}}>
            Already have an account?{" "}
            <button className="switch-btn" onClick={()=>setIsLogin(true)}>
              Login
            </button>
          </p>
        </>
      )}
    </div>
  );
}

export default App;