import { useReducer } from 'react';
import selectionReducer from './context/selectionReducer';
import { GlobalContext } from './context/context';
import SignUp from './components/SignUp';
// import Earth from './components/Earth';

function App() {
  // const [selection, selectionDispatch] = useReducer(selectionReducer,null)
  return (
    // <GlobalContext.Provider value={{selection, selectionDispatch}}>
    //   <div style={{position:'absolute',color:'white',zIndex:1,padding:'1rem'}}>
    //     {selection ? selection.properties.NAME : 'No country selected'}
    //   </div>
    //   <Earth />
    // </GlobalContext.Provider>
   <div>

 <SignUp />
  
  </div> 
  );
}

export default App;
