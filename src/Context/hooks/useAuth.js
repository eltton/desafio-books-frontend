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
    const refreshToken = response.headers["refresh-token"];

    localStorage.setItem("name", JSON.stringify(name));
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("refresh-token", JSON.stringify(refreshToken));

    api.defaults.headers.Authorization = `Bearer ${token}`;

    setAuthenticated(true);
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("refresh-token");
    api.defaults.headers.Authorization = undefined;
    history.push("/login");
  }

  return { authenticated, loading, handleLogin, handleLogout };
}
