import React, { useState, useContext } from "react";

import { useHistory } from "react-router-dom";
import loginSchema from "../../commons/loginSchema";
import { Context } from "../../Context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const { /*authenticated,*/ handleLogin } = useContext(Context);

  const validateLoginSchema = async (requestBody) => {
    try {
      await loginSchema.validate(requestBody);
    } catch (err) {
      throw new Error(err.errors);
    }
  };

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const requestBody = { email, password };
      await validateLoginSchema(requestBody);

      // console.log(email + "  " + password);

      await handleLogin(email, password);
      history.push("/home");

      // console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div>
      <form>
        <label htmlFor="email">Email </label>
        <input
          name="email"
          type="text"
          id="email"
          onChange={(event) => setEmail(event.target.value)}
        ></input>
        <br />
        <br />

        <label htmlFor="password">Senha </label>
        <input
          name="password"
          type="password"
          id="password"
          autoComplete="off"
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <br />
        <br />

        <input type="submit" value="Entrar" onClick={handleSubmit} />
      </form>
    </div>
  );
}

export default Login;
