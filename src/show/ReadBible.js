import { h } from 'preact';
import { useEffect, useLayoutEffect } from 'preact/hooks';
import { divFactory, factory } from 'preact-slash';
import { kereses } from '../flow/szentirasApi';
import useReducerActions from '../utils/useReducerActions';
import {reducer, initialState, actions} from '../flow/readingReducer';
import TranslateSelector from './TranslateSelector';
import { forditasok, konyvek } from './../flow/szentirasApi';

const [BookName, BooksHolder] = divFactory('book-name-item', 'books-holder')

export default () => {
  const {state, askBooklist, readBible, changeTranslation } = useReducerActions(reducer, initialState, actions);
  const {translation, books, verses} = state;

  useEffect(() => {
    translation |> konyvek(askBooklist);
  }, [translation])

  return (
    <main>
      <TranslateSelector changeTranslation={changeTranslation} translation={translation}/>
      <BooksHolder>
        {books && books.map(({name}) => <BookName>{name}</BookName>)}
      </BooksHolder>
    </main>
  );
}