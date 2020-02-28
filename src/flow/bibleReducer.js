import { actionCreator } from 'preact-slash';
import useReducerActions from '../utils/useReducerActions';

export const [ASK_ABOUT, askAbout] = actionCreator('ask-about');
export const [ANSWER_READY, answerReady] = actionCreator('answer-ready');
export const [CHANGE_TRANSLATION, changeTranslation] = actionCreator('change-translation');

export const initialState = {
  answer: null,
  search: '',
  translation: 'KG',
}

export const reducer = (state, {type, payload}) => {
  switch (type) {
    case ASK_ABOUT: return {...state, search: payload, answer: null};
    case ANSWER_READY: return {...state, answer: payload};
    case CHANGE_TRANSLATION: return {...state, translation: payload};
    default: return state;
  }
}

export const actions = { askAbout, answerReady, changeTranslation };