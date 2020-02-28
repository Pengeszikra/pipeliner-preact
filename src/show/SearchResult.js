import {h} from 'preact';
import { divFactory } from 'preact-slash';


const [PoemLine, PoemChapter, BookName, Founded, HitCount] = divFactory(
  "vers-line", "chapter-vers vers-item", "book-name", "found", "hit-count"
);

const Verses = ({verses}) => (
   verses.map(
     ({chapter, numv, text}) => (
      <PoemLine>
        { 
          chapter && 
          <p>
            <PoemChapter>{`${chapter}/${numv}`}</PoemChapter>
            <span>{text}</span>
          </p>
        }
      </PoemLine>
     )
  )
);

const Books = ({results = []}) => (
  results.map(
    ({book = {}, translation = {}, chapters = {}, verses = [{}]}) => 
      <div> 
        <BookName>{book.name}</BookName>
        <Verses verses = {verses} />
      </div>
  )
);

export default function ({results = []}) {  
  return (
    <Founded>
      <HitCount>{results.length}</HitCount>
      <Books results ={results} />
    </Founded> 
  );
}