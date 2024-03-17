import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Protected from "./lib/protected";
import Auth from "./pages/auth";
import Header from "./components/header";
import Events from "./pages/events";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const queryClient = new QueryClient();
function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Protected>
          <Toaster
            position="top-center"
            toastOptions={{
              className: "bg-white border border-gray-300/80 ",
            }}
          />
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
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
