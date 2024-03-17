import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Protected from "./lib/protected";
import Auth from "./pages/auth";
import Header from "./components/header";
import Events from "./pages/events";

function App() {
  return (
    <BrowserRouter>
      <Protected>
        <Routes>
          <Route element={<Auth />} path="/auth" />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            element={
              <>
                <Header />
                <Events />
              </>
            }
            path="/events"
          />
        </Routes>
      </Protected>
    </BrowserRouter>
  );
}

export default App;
