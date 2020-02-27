import { h } from 'preact';
import { useEffect, useLayoutEffect } from 'preact/hooks';
import { divFactory, factory } from 'preact-slash';

import { kereses } from '../flow/szentirasApi';

import useReducerActions from '../utils/useReducerActions';
import {reducer, initialState, actions} from '../flow/bibleReducer';
import { fromIter, forEach, pipe, filter, combine, merge, map } from 'callbag-basics';
import { debounce } from 'callbag-debounce';
import fromEvent from 'callbag-from-event';
import mergeWith from 'callbag-merge-with';
import fromFunction from 'callbag-from-function';
import timer from 'callbag-timer';
import  interval  from 'callbag-interval';

let toShort = null;
const treshold = 1000;

export default () => {
  const {state, askAbout, answerReady } = useReducerActions(reducer, initialState, actions);
  const {answer, search} = state;

  const changeSearchInput = ({target:{value}}) => value |> askAbout;
  const apiSearch = searchText => searchText |> kereses(json => JSON.stringify(json, null, 2) |> answerReady );

  useEffect(() => {
    clearTimeout(toShort);
    toShort = setTimeout(() => search.length > 2 && apiSearch(search), treshold); 
  }, [search])
  
  return (
    <pre>{`
    -- Bible Study --

     simple useEffect beat callbag
    
    `} 
    <a href="https://szentiras.hu/api" target="_base">szentiras.hu/api</a>
    <br />
    <input type='text' value={search} onInput={changeSearchInput}/><span>{search}</span>
    <p>{answer}</p>
    
    </pre>
  );
}