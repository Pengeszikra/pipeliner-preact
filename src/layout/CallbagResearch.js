import { h } from 'preact';
import { useEffect, useState} from 'preact/hooks';
import { pipe, take, fromIter, forEach, map, merges, merge } from 'callbag-basics';
import interval from 'callbag-interval';
import takeWhile from 'callbag-take-while';
import { debounce } from 'callbag-debounce';
import fromEvent from 'callbag-from-event';
import mergeWith from 'callbag-merge-with';
import fromFunction from 'callbag-from-function';
import timer from 'callbag-timer';

export default () => {
  const [data, setData] = useState(null);
  const [test, setTest] = useState('---> 1234 <---');
  
  const log = p => setData(d => d ? [d,p].join('\n') :  p );
  const mapTo = p => map( () => p );

  const {source, emitter} = fromFunction(() => 28736127836);

  source |> mapTo('--> hasznaltak ') |> forEach(log);

  useEffect(() => {
    fromEvent(global, 'click') |> forEach(emitter);
  }, []);
    
  useEffect(() => {
    setData('-- start test --');
    
    interval(1000) |> take(1) |> mapTo('... end after 1 sec') |> forEach(log);
    
    interval(2000) |> take(1) |> mapTo('... end after 2 sec') |> forEach(log);

    interval(2000) |> take(1) |> forEach(
      () => fromEvent(window, 'mousemove') |> forEach(log)
    )

    timer(3000, 100) |> take(5) |> map( p => '3 sec after ' + p) |>  forEach(log);
  }, []);

  return <pre style={{margin:'2em'}}>{data}<br/>{test}</pre>;
}