import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import { BrowserRouter as Router } from 'react-router-dom'


const WithRoute = () => (
    <Router>
        <App />
    </Router>
)

ReactDOM.render(<WithRoute />, document.getElementById('root'));
serviceWorker.unregister();