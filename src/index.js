import React from 'react';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom';
import registerServiceWorker from "./registerServiceWorker";

const app = (
    <BrowserRouter>
      <App/>
    </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
