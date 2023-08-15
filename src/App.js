import { useEffect } from "react";
import { useAuthContext } from "./contexts/AuthContext";
import MainRoute from "./routes/MainRoute";

function App() {
  const { checkAuth } = useAuthContext();
  useEffect(() => {
    checkAuth();
  }, []);
  return (
    <div className="App">
      <MainRoute />
    </div>
  );
}

export default App;
