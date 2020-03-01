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
import SearchResult from './SearchResult';
import TranslateSelector from './TranslateSelector';
import { forditasok } from './../flow/szentirasApi';

let toShort = null;
const treshold = 1000;
const translationKeys = Object.keys(forditasok);

export default () => {
  const {state, askAbout, answerReady, changeTranslation } = useReducerActions(reducer, initialState, actions);
  const {answer, search, translation} = state;

  const changeSearchInput = ({target:{value}}) => value |> askAbout;
  const apiSearch = searchText => searchText |> kereses(json => answerReady(json));

  useEffect(() => {
    clearTimeout(toShort);
    const searchWithTranslation = [search, translation].join('/');
    toShort = setTimeout(() => search.length > 2 && apiSearch(searchWithTranslation), treshold); 
  }, [search])

  const {fullTextResult:{results = []} = {}} = answer || {};

  const counts = translationKeys
    .map(transKey => results.filter(({translation:{abbrev}}) => abbrev === transKey)
  ).map(founds => founds.length);
  
  const filteredResults = results.filter(({translation:{abbrev}}) => abbrev === translation);

  const clickTransSelect = transKey => event => changeTranslation(transKey);
  
  return (
    <main>
    <input type='text' value={search} onInput={changeSearchInput}/>
 
    {counts.map((hit, key) => hit > 0 && ( 
      translationKeys[key] === translation 
      ? <span key={key} selected class="trans-shorthand" onClick={clickTransSelect(translationKeys[key])} data-hit-count={hit}>{translationKeys[key]}</span>
      : <span key={key} class="trans-shorthand" onClick={clickTransSelect(translationKeys[key])} data-hit-count={hit}>{translationKeys[key]}</span>
    ))}
    
    <TranslateSelector changeTranslation={changeTranslation} translation={translation}/>
    {answer && <SearchResult results={filteredResults} />}
    {/* {answer && <pre>{JSON.stringify(answer, null, 2)}</pre>} */}
    
    </main>
  );
}