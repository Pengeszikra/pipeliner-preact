import { h } from 'preact';
import { useEffect, useLayoutEffect } from 'preact/hooks';
import { divFactory, factory } from 'preact-slash';

import { kereses } from '../flow/szentirasApi';

import useReducerActions from '../utils/useReducerActions';
import {reducer, initialState, actions} from '../flow/bibleReducer';
import { fromIter, forEach, pipe, filter } from 'callbag-basics';
import { debounce } from 'callbag-debounce';
import fromEvent from 'callbag-from-event';
import mergeWith from 'callbag-merge-with';
import fromFunction from 'callbag-from-function';
import timer from 'callbag-timer';

export default () => {
  const {state, askAbout, answerReady } = useReducerActions(reducer, initialState, actions);
  const {answer, search} = state;

  const changeSearchInput = ({target:{value}}) => value |> askAbout;
  const {source:watchSearch, emitter: checkSearch} = fromFunction(p => p);
 
  useLayoutEffect(() => {
    /*
    if (search.length > 3) {
      search |> kereses(json => JSON.stringify(json, null, 2) |> answerReady );
    } 
    */
    checkSearch(search);
  }, [search]);

  watchSearch |> debounce(500)|> filter(search => search.length > 2) |> forEach(console.log);
  
  return (
    <pre>{`
    -- Bible Study --

     How speed up javascript development process?
    
    `} 
    <a href="https://szentiras.hu/api" target="_base">szentiras.hu/api</a>
    <br />
    <input type='text' value={search} onInput={changeSearchInput}/><span>{search}</span>
    <p>{answer}</p>
    
    </pre>
  );
}