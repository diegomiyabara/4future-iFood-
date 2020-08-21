import React, {useReducer} from 'react';
import { storeReducer, initialState } from './reducers/store';
import CartContext from './context/CartContext';
import Router from "./components/Router";



function App() {
  const [state, dispatch] = useReducer(storeReducer, initialState)
  return (
    <div className="App">
      <CartContext.Provider value={{ carrinho: state, dispatch: dispatch }}>
        <Router />
      </CartContext.Provider>
    </div>
  );
}
export default App;
    
