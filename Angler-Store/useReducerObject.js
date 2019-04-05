import {useReducer} from 'preact/hooks';
import reducerLookUp from './reducerLookUp';

export default (lookUp, initialState) => useReducer(reducerLookup(lookUp), initialState);