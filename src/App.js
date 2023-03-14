import { useReducer } from "react";
import selectionReducer from "./context/selectionReducer";
import { GlobalContext } from "./context/context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
// import SignupPage from './pages/Signup';
// import LoginPage from './pages/Login';
// import Header from './components/Header'
import Chat from "./components/Chat";

function App() {
  const [selection, selectionDispatch] = useReducer(selectionReducer, null);
  return (
    <GlobalContext.Provider value={{ selection, selectionDispatch }}>
      <Homepage />
      <div className="center">
        <Chat />
      </div>
    </GlobalContext.Provider>
    //   <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    //   <div className="max-w-md w-full space-y-8">
    //    <BrowserRouter>
    //       <Routes>
    //           <Route path="/login" element={<LoginPage/>} />
    //           <Route path="/signup" element={<SignupPage/>} />
    //       </Routes>
    //     </BrowserRouter>
    //   </div>
    // </div>
  );
}

export default App;
