import Routes from "./routes";
import { AuthProvider } from "./Context/AuthContext";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes />
        <GlobalStyle />
      </AuthProvider>
    </div>
  );
}

export default App;
