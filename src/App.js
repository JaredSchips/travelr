import { useReducer } from "react";
import selectionReducer from "./context/selectionReducer";
import { GlobalContext } from "./context/context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SignupPage from "./pages/Signup";
import LoginPage from "./pages/Login";
import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";

function App() {
  const [selection, selectionDispatch] = useReducer(selectionReducer, null);
  return (
    <>
      <GlobalContext.Provider value={{ selection, selectionDispatch }}>
      <div>
        <NavigationBar />
      </div>
      <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
