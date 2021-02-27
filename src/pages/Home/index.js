import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../Context/AuthContext";
import api from "../../services/api";

export default function Home() {
  const { handleLogout } = useContext(Context);
  const [booksData, setBooksData] = useState({ data: [] });

  useEffect(() => {
    (async () => {
      const { data } = await api.get(
        // "books/?page=1&amount=12&category=biographies"
        "books/?page=1&amount=12"
      );

      setBooksData(data);
    })();
  }, []);

  return (
    <>
      {booksData.data.map((book) => (
        <div className="book-card" key={book.id}>
          <div>{book.title}</div>
          <p>{book.authors}</p>
        </div>
      ))}

      <input type="submit" value="Sair" onClick={handleLogout} />
    </>
  );
}
