import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import registerServiceWorker from './registerServiceWorker';
import {HashRouter} from 'react-router-dom'

ReactDOM.render(
<HashRouter>
<App />
</HashRouter>
, document.getElementById('root'));
registerServiceWorker();
