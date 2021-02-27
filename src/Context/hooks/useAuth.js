import { useState, useEffect } from "react";

import api from "../../services/api";
import history from "../../history";

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);

  async function handleLogin(email, password) {
    const response = await api.post("auth/sign-in", {
      email,
      password,
    });
    const name = response.data.name;
    const token = response.headers.authorization;

    console.debug("name: ", name);
    console.debug("token: ", token);

    localStorage.setItem("name", JSON.stringify(name));
    localStorage.setItem("token", JSON.stringify(token));
    api.defaults.headers.Authorization = `Bearer ${token}`;

    setAuthenticated(true);
    // history.push("/home");

    /////////////////////
    // const {
    //   data: { name },
    // } = await api.post("auth/sign-in", {
    //   email,
    //   password,
    // });

    // localStorage.setItem("name", JSON.stringify(name));
    // console.debug("autorizacao", name.headers.Authorization);
    // console.debug("data", name);

    // // localStorage.setItem("token", JSON.stringify(token));
    // // api.defaults.headers.Authorization = `Bearer ${token}`;
    // setAuthenticated(true);
    // history.push("/users");
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    api.defaults.headers.Authorization = undefined;
    history.push("/login");
  }

  return { authenticated, loading, handleLogin, handleLogout };
}
