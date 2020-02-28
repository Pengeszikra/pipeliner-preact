import {h} from 'preact';
import {handleInput} from '../flow/utils';
import {forditasok} from '../flow/szentirasApi';

export default function({changeTranslation, translation}) {
  return (
    <select className = "no-select inline half" onChange = {handleInput(changeTranslation)} >
      { Object.keys(forditasok).map((key, i) => key === translation 
        ? <option selected value={key} key={i}>{forditasok[key]}</option>
        : <option value={key} key={i}>{forditasok[key]}</option>
      )}
    </select>
  );
}