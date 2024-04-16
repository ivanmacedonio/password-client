import ReactDOM from "react-dom";
import {
  Navigate,
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { GetStatus } from "./fetch/GetStatus.tsx";
import { Login } from "./pages/Login.tsx";
import { MainPage } from "./pages/MainPage.tsx";
import { Register } from "./pages/Register.tsx";

function App() {
  const { status } = GetStatus();

  const PrivateRoutes = () => {
    let auth = status;
    return auth ? <Outlet /> : <Navigate to="/login" />;
  };

  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<MainPage />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
