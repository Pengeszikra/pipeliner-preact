import { actionCreator } from 'preact-slash';
import useReducerActions from '../utils/useReducerActions';

export const [ASK_BOOKLIST, askBooklist] = actionCreator('ask-booklist');
export const [READ_BIBLE, readBible] = actionCreator('readBible');
export const [CHANGE_TRANSLATION, changeTranslation] = actionCreator('change-translation');

export const initialState = {
  translation: 'KG',
  bookList: [],
  verses: [],  
}

export const reducer = (state, {type, payload}) => {
  switch (type) {
    case ASK_BOOKLIST: return {...state, bookList: payload};
    case READ_BIBLE: return {...state, verses: payload};
    case CHANGE_TRANSLATION: return {...state, translation: payload};
    default: return state;
  }
}

export const actions = { askBooklist, readBible, changeTranslation };