import Routes from "./routes";
import { AuthProvider } from "./Context/AuthContext";

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </div>
  );
}

export default App;
