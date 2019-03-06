import {h} from 'preact';
import { useState } from 'preact/hooks';
import TranslateSelector from './TranslateSelector';
import SearchInput from './SearchInput';
import SearchResult from './SearchResult';

export default function (props) {
  const [content, changeContent] = useState('');
  const [result = {}, changeResult] = useState({});  
  
  return (
    <div className="content">
      <div className = "logo no-select">🐠</div>
      <SearchInput 
        result={result} 
        changeResult = {changeResult}
        {...props} 
      />      
      <TranslateSelector translate/>
      <SearchResult result = {result} {...props} />
    </div>
  );
}