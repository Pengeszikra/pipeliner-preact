import {h} from 'preact';
import {useState} from 'preact/hooks';
import {handleInput} from '../flow/utils';
import {forditasok} from '../flow/szentirasApi';

export default function({translate}) {
  const [trans, changeTranslate] = useState(translate);
  
  return (
    <select className = "no-select inline half" onChange = {handleInput(changeTranslate)} >
      {Object.keys(forditasok).map((key, i) => <option value={key} key={i}>{forditasok[key]}</option>)}
    </select>
  );
}