import React from 'preact/compat';
import { createContext, useReducer, useContext } from 'preact/hooks';

export default (reducer = ()=>{}, initialState = {}) => {
  const Store = createContext();
  const {state, dispatch} = useContext(Store);

  function StoreProvider({children}) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>;
  }
  
  return [StoreProvider, Store];
}