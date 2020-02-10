import { h } from 'preact';
import { useReducerActions, divFactory, factory } from 'preact-slash';
import { actionCreator } from 'preact-slash';

/*
const [ASK_ABOUT, askAbout] = actionCreator('search');
const [ANSWER_READY, answerReady] = actionCreator('search');

const initialState = {
  answer: null,
  search: ''
}

const reducer = (state, {type, payload}) => {
  switch (type) {
    case ASK_ABOUT: return {...state, search: payload, answer: null};
    case ANSWER_READY: return {...state, answer: payload};
    default: return state;
  }
}

const actions = { askAbout, answerReady }
*/

export default () => {
  //const {state, askAbout, answerReady } = useReducerActions(reducer, initialState, actions);

  return (
    <pre>{`
    -- Bible Researcher --

    This is the second rounds of develeopment 
    Bible based researcher application.

    Focus on:
      - usability.
      - mobile first
      
    `}
    <input type='text'></input>
    </pre>
  );
}