import React, { useState } from "react";

function Register(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const handleChangeUsername = (e) => {
    setUserName(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
      username: userName,
      email: email,
      password: password,
    };
    console.log("form data", formData);
    setUserName("");
    setEmail("");
    setPassword("");
  };
  return (
    <div className="mainContainer">
      <div>
        <h2>Register here</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="userName">UserName</label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={userName}
            onChange={handleChangeUsername}
          />
          <br />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={handleChangeEmail}
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChangePassword}
          />
          <br />
          <input type="submit" value="Register" />
        </form>
      </div>
    </div>
  );
}
export default Register;