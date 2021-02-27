import React, { useContext } from "react";
import { Context } from "../../Context/AuthContext";

export default function Home() {
  const { /*authenticated,*/ handleLogout } = useContext(Context);
  return (
    <>
      <h1>Home</h1>
      <input type="submit" value="Sair" onClick={handleLogout} />
    </>
  );
}
