import {h, render} from 'preact';

const Welcome = ({framework}) => <pre>pipeliner :: {framework} with pipeline operator</pre>;

render( <Welcome framework="preact" />, document.body);