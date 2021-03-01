/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../Context/AuthContext";
import api from "../../services/api";
import Cards from "../../components/Card";
import getTokenApi from "../../commons/getToken";

import {
  CardsBox,
  Container,
  LogoutContainer,
  LogoutIcon,
  LogoContainer,
  Logo,
  Header,
  Welcome,
  WelcomeContainer,
  ButtonLeft,
  ButtonRight,
  Button,
  ButtonContainer,
  Pagination,
} from "./styles";

export default function Home() {
  const { handleLogout } = useContext(Context);
  const [booksData, setBooksData] = useState({ data: [] });
  const [pageLength, setPageLenght] = useState(0);
  const [page, setPage] = useState(1);
  const [user, setUser] = useState("");

  useEffect(() => {
    (async () => {
      const responseToken = await getToken();
      await getBooks(responseToken);
      // await updateToken(responseToken);
      setUser(JSON.parse(localStorage.getItem("name")));
    })();
  }, []);

  const getToken = async () => {
    try {
      return await getTokenApi();
    } catch (err) {
      handleLogout();
    }
  };

  // const updateToken = async (responseToken) => {
  //   api.defaults.headers.Authorization = `Bearer ${JSON.parse(
  //     responseToken.token
  //   )}`;
  //   try {
  //     const response = await api.post("auth/refresh-token", {
  //       refreshToken: `${JSON.parse(responseToken.refreshToken)}`,
  //     });

  //     localStorage.setItem(
  //       "token",
  //       JSON.stringify(response.headers.authorization)
  //     );
  //     localStorage.setItem(
  //       "refresh-token",
  //       JSON.stringify(response.headers["refresh-token"])
  //     );

  //     const updateToken = await getToken();
  //     await getBooks(updateToken);
  //   } catch (error) {
  //     throw new Error(error);
  //   }
  // };

  const getRefreshToken = async (refreshToken) => {
    try {
      return await api.post("auth/refresh-token", {
        // Authorization: `Bearer ${JSON.parse(refreshToken.token)}`,
        refreshToken: JSON.parse(refreshToken.refreshToken),
      });
    } catch (err) {
      handleLogout();
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
      const newToken = await getRefreshToken(responseToken);
      await getBooks(newToken);
      // await updateToken(responseToken); //chamando
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
      <Header>
        <LogoContainer>
          <Logo />
          <span>Books</span>
        </LogoContainer>

        <WelcomeContainer>
          <Welcome>
            Bem vindo, <strong>{user}!</strong>
          </Welcome>
          <LogoutContainer onClick={handleLogout}>
            <LogoutIcon />
          </LogoutContainer>
        </WelcomeContainer>
      </Header>

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

      <ButtonContainer>
        <Pagination>
          Página <strong>{page}</strong> de <strong>{pageLength}</strong>
        </Pagination>
        <Button>
          <ButtonLeft
            disabled={!booksData || booksData.currentPage <= 1}
            onClick={prevPage}
          />
        </Button>
        <Button>
          <ButtonRight
            disabled={
              !booksData || booksData.currentPage >= booksData.totalPages
            }
            onClick={nextPage}
          />
        </Button>
      </ButtonContainer>
    </Container>
  );
}
