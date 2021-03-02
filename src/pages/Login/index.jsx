import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import loginSchema from "../../commons/loginSchema";
import { Context } from "../../Context/AuthContext";

import {
  Container,
  Title,
  LoginContainer,
  HeaderContainer,
  LogoContainer,
  InputContainer,
  Input,
  Label,
  InputButton,
  Form,
  Error,
} from "./styles";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const [loginError, setloginError] = useState(false);

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
      await handleLogin(email, password);
      setloginError(false);
      history.push("/home");
    } catch (error) {
      setloginError(true);
    }
  }

  return (
    <Container>
      <LoginContainer>
        <HeaderContainer>
          <LogoContainer />
          <Title>Books</Title>
        </HeaderContainer>
        <Form>
          <InputContainer>
            <Label htmlFor="email">Email </Label>
            <Input
              name="email"
              type="text"
              id="email"
              onChange={(event) => setEmail(event.target.value)}
            ></Input>
          </InputContainer>

          <InputContainer>
            <Label htmlFor="password">Senha </Label>
            <Input
              name="password"
              type="password"
              id="password"
              autoComplete="off"
              onChange={(event) => setPassword(event.target.value)}
            ></Input>
            <InputButton type="submit" value="Entrar" onClick={handleSubmit} />
          </InputContainer>
        </Form>
        {loginError && <Error>Email e/ou senha incorretos.</Error>}
      </LoginContainer>
    </Container>
  );
}

export default Login;
