import {h} from 'preact';

const Verses = ({verses}) => (
   verses.map(
     ({chapter, numv, text}) => <div className = "vers-line">
      { 
        chapter && 
        <p>
          <div className = "chapter-vers vers-item">{`${chapter}/${numv}`}</div>
          <span>{text}</span>
        </p>
      }
    </div>
  )
);

const Books = ({results = []}) => (
  results.map(
    ({book = {}, translation = {}, chapters = {}, verses = [{}]}) => 
      <div> 
        <div className = "book-name">{book.name}</div>
        <Verses verses = {verses} />
      </div>
  )
);

export default function ({result = {}}) {
  const {fullTextResult = {}} = result;
  const {results, hitCount = 0} = fullTextResult;
      
  return (
    <div className = "found">
      <div className = "hit-count">{hitCount}</div>
      <Books results ={results} />
    </div>    
  );
}