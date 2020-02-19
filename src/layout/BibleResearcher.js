import { h } from 'preact';
import { useEffect} from 'preact/hooks';
import { divFactory, factory } from 'preact-slash';
import useReducerActions from '../utils/useReducerActions';

import {reducer, initialState, actions} from '../flow/bibleReducer';

export default () => {
  const {state, askAbout, answerReady } = useReducerActions(reducer, initialState, actions);
  const {answer, search} = state;

  useEffect(() => {
    answerReady(`  simplify still begin good question is, why don't work preact-slash/useReducerActions`);
  }, []);

  return (
    <pre>{`
    -- Bible Researcher --

    This is the second rounds of develeopment 
    Bible based researcher application.

    Focus on:
      - research in different Bible publication
      - usability
      - preact-slash test
      - local database test
      - custom input component test      
      - mobile first
    `}
    <input type='text'></input>
    <p>{answer}</p>
    </pre>
  );
}