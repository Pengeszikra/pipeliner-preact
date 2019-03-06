import {h} from 'preact';
import { useState } from 'preact/hooks';
import {kereses} from '../flow/szentirasApi';
import {dynamicApiRequest, handleInput} from '../flow/utils';

export default function ({changeResult, trans}) {
  const [search, changeSearchText] = useState('');
  const dynamicSearchHandle = handleInput(dynamicApiRequest({api:kereses, trans, changeResult, changeSearchText}));
  
  return (
    <input 
      placeholder = {'keresés'}
      value = {search}
      onChange = {dynamicSearchHandle}
    />
  );
}