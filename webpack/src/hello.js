import ReactDOM from 'react-dom';
import React from 'react';
import { hot } from 'react-hot-loader';

import NotesApp from './components/NotesApp.jsx'

ReactDOM.render(
	<NotesApp />,
	document.getElementById('root')
);

export default hot(module)(NotesApp)

import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/style.css'