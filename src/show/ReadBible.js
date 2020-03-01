import { h } from 'preact';
import { useEffect, useLayoutEffect } from 'preact/hooks';
import { divFactory, factory } from 'preact-slash';
import { kereses } from '../flow/szentirasApi';
import useReducerActions from '../utils/useReducerActions';
import {reducer, initialState, actions} from '../flow/readingReducer';
import TranslateSelector from './TranslateSelector';
import { forditasok, konyvek, idezet } from './../flow/szentirasApi';

const [BookName, BooksHolder, VersSor] = divFactory('book-name-item', 'books-holder', 'vers-sor')

export default () => {
  const {state, askBooklist, readBible, changeTranslation } = useReducerActions(reducer, initialState, actions);
  const {translation, books, verses} = state;

  useEffect(() => {
    translation |> konyvek(askBooklist);
  }, [translation])

  const clickOpenBook = abbrev => event => {
    `${abbrev}1/${translation}` |> idezet(readBible);
  }

  const {valasz: {versek = []} = {}} = verses || {};
  const Chapter = versek.map(({szoveg}) => <VersSor>{szoveg}</VersSor>)    

  return (
    <main>
      <TranslateSelector changeTranslation={changeTranslation} translation={translation}/>
      <BooksHolder>
        {books && books.map(({name, abbrev, number}) => <BookName onClick={clickOpenBook(abbrev)}>{name}</BookName>)}
      </BooksHolder>
      {Chapter}
    </main>
  );
}