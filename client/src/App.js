import { useReducer } from "react";
import selectionReducer from "./context/selectionReducer";
import { GlobalContext } from "./context/context";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

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

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [selection, selectionDispatch] = useReducer(selectionReducer, null);
  const [iconBlack, setIconsBlack] = useState(false);
  return (
    <ApolloProvider client={client}>
      <GlobalContext.Provider value={{ selection, selectionDispatch }}>
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
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
                  path="/chat/*"
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
          </div>
        </div>
        <Footer />
      </GlobalContext.Provider>
    </ApolloProvider>
  );
}

export default App;
