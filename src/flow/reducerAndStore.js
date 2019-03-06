import React from 'preact/compat';
import {useContext, useReducer, createContext} from 'preact/hooks';
import AnglerStore from '../../Angler-Store';
import actionCreator from '../../Angler-Store/actionCreator';

const initialState = {
  trans: 'KG',
  found: [],
  book: [],  
};

export const [READ_BOOK, readBook] = actionCreator('read-book');
export const [SEARCH, search] = actionCreator('search');
export const [CHANGE_TRANS, changeTrans] = actionCreator('change-trans');

function reducer(store, {type, payload}) {
  switch (type) {    
    case CHANGE_TRANS: return {...store, trans: payload};
    case READ_BOOK: return {...store, book: payload};
    case SEARCH: return {...store, found: payload};
   
    default: return store;
  }
}

export const [
  StoreProvider, 
  useAppState,
  useHandleAction,
  Store
] = AnglerStore(reducer, initialState);