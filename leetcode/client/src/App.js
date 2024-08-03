import "./css/App.css";
import Header from "./components/header";
import Introduction from "./components/Introduction";
import { AuthProvider } from "./components/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <Header />
        <Introduction />
      </AuthProvider>
    </>
  );
}

export default App;
