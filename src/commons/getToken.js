const getToken = async () => {
  try {
    const token = localStorage.getItem("token");
    const refreshToken = localStorage.getItem("refresh-token");

    return {
      token,
      refreshToken,
    };
  } catch (err) {
    throw new Error(err);
  }
};

export default getToken;
