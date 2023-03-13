import { useReducer } from "react";
import selectionReducer from "./context/selectionReducer";
import { GlobalContext } from "./context/context";
import Earth from "./components/Earth";
import Chat from "./components/Chat";

function App() {
  const [selection, selectionDispatch] = useReducer(selectionReducer, null);
  return (
    <GlobalContext.Provider value={{ selection, selectionDispatch }}>
      <div
        style={{
          position: "absolute",
          color: "white",
          zIndex: 1,
          padding: "1rem",
        }}
      >
        {selection ? selection.properties.NAME : "No country selected"}
      </div>
      <Earth />
      <div className="center">
      <Chat />
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
