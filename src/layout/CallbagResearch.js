import { h } from 'preact';
import { useEffect, useState} from 'preact/hooks';
import { pipe, take, fromIter, forEach } from 'callbag-basics';
import takeWhile from 'callbag-take-while';
import { debounce } from 'callbag-debounce';

export default () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    function *foo() {
      for(let i=0; i< 15; i++) {
        yield i;
      }
    }

    
  foo() 
    |> fromIter
    |> debounce(150) 
    |> takeWhile(n => n <= 9) 
    |> forEach(p => setData(d => d ? [d,p].join('\n') :  p ))
    
  }, []);

  return <pre style={{margin:'2em'}}>{data}</pre>;
}