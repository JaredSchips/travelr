import { useReducer } from "react";
import selectionReducer from "./context/selectionReducer";
import { GlobalContext } from "./context/context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SignupPage from "./pages/Signup";
import LoginPage from "./pages/Login";
import NavigationBar from "./components/NavigationBar";
import ProfilePage from "./pages/Profile";
import Chat from "./components/Chat";
import FavoriteCountries from "./components/FavList";
import BucketList from "./components/BucketList";
import VisitedPlaces from "./components/VisitedPlaces";
import Statistics from "./components/Statistics";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [selection, selectionDispatch] = useReducer(selectionReducer, null);
  const [iconBlack, setIconsBlack] = useState(false);
  console.log(iconBlack);
  return (
    <>
      <GlobalContext.Provider value={{ selection, selectionDispatch }}>
        <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <BrowserRouter>
              <NavigationBar iconBlack={iconBlack} />
              <Routes>
                <Route
                  path="/"
                  element={<Homepage setIconsBlack={setIconsBlack} />}
                />
                <Route
                  path="/login"
                  element={<LoginPage setIconsBlack={setIconsBlack} />}
                />
                <Route
                  path="/signup"
                  element={<SignupPage setIconsBlack={setIconsBlack} />}
                />
                <Route
                  path="/profile"
                  element={<ProfilePage setIconsBlack={setIconsBlack} />}
                />
                <Route
                  path="/chat"
                  element={<Chat setIconsBlack={setIconsBlack} />}
                />
                <Route
                  path="/favorite"
                  element={<FavoriteCountries setIconsBlack={setIconsBlack} />}
                />
                <Route
                  path="/bucket"
                  element={<BucketList setIconsBlack={setIconsBlack} />}
                />
                <Route
                  path="/visited"
                  element={<VisitedPlaces setIconsBlack={setIconsBlack} />}
                />
                <Route
                  path="/stats"
                  element={<Statistics setIconsBlack={setIconsBlack} />}
                />
              </Routes>
            </BrowserRouter>
            <Footer />
          </div>
        </div>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
