/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../Context/AuthContext";
import api from "../../services/api";
import Cards from "../../components/Card";
import { CardsBox, Container } from "./styles";
import getTokenApi from "../../commons/getToken";
import history from "../../history";

export default function Home() {
  const { handleLogout } = useContext(Context);
  const [booksData, setBooksData] = useState({ data: [] });
  const [pageLength, setPageLenght] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      const responseToken = await getToken();
      await getBooks(responseToken);
      // await updateToken(responseToken);
    })();
  }, []);

  const getToken = async () => {
    try {
      return await getTokenApi();
    } catch (err) {
      history.push("/");
      throw new Error(err);
    }
  };

  const updateToken = async (responseToken) => {
    api.defaults.headers.Authorization = `Bearer ${JSON.parse(
      responseToken.token
    )}`;
    try {
      const response = await api.post("auth/refresh-token", {
        refreshToken: `${JSON.parse(responseToken.refreshToken)}`,
      });

      localStorage.setItem(
        "token",
        JSON.stringify(response.headers.authorization)
      );
      localStorage.setItem(
        "refresh-token",
        JSON.stringify(response.headers["refresh-token"])
      );

      await getBooks(responseToken);

      // getBooks();
    } catch (error) {
      throw new Error(error);
    }
  };

  const getBooks = async (responseToken) => {
    try {
      const { data } = await api.get("books", {
        headers: {
          Authorization: `Bearer ${JSON.parse(responseToken.token)}`,
          // "refresh-token": `Bearer ${JSON.parse(responseToken.refreshToken)}`,
        },
        params: {
          page,
          amount: 12,
        },
      });
      setPageLenght(Math.ceil(data.totalPages));
      setBooksData(data);
    } catch (err) {
      await updateToken(responseToken); //chamando
      // throw new Error(err);
    }
  };

  const prevPage = () => {
    if (page - 1 > 0) {
      setPage(page - 1);
    }
  };

  const nextPage = () => {
    if (page + 1 <= pageLength) {
      setPage(page + 1);
    }
  };

  useEffect(async () => {
    const responseToken = await getToken();
    await getBooks(responseToken);
  }, [page]);

  return (
    <Container>
      <input type="submit" value="Sair" onClick={handleLogout} />

      <CardsBox>
        {booksData.data.map((book) => (
          <Cards
            key={book.id}
            imageUrl={book.imageUrl}
            title={book.title}
            authors={book.authors}
            pageCount={book.pageCount}
            publisher={book.publisher}
            published={book.published}
          />
        ))}
      </CardsBox>
      <button
        disabled={!booksData || booksData.currentPage <= 1}
        onClick={prevPage}
        className="btn-round prev"
      >
        BACK
      </button>

      <button
        disabled={!booksData || booksData.currentPage >= booksData.totalPages}
        onClick={nextPage}
        className="btn-round next"
      >
        NEXT
      </button>

      <div>
        Pagina <strong>{page}</strong> de <strong>{pageLength}</strong>
      </div>
    </Container>
  );
}
