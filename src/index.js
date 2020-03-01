import {h, render} from 'preact';
import './style/style.scss';

import BibleStudy from './show/BibleStudy';
import CallbagResearch from './show/CallbagResearch';

render( (
  <main>
    <BibleStudy />
    <BibleStudy />
  </main>
), document.body );