import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyDIEokbMWGAcVfwWEl9uZOYprw55XWUKJs',
	authDomain: 'glambit-b4558.firebaseapp.com',
	projectId: 'glambit-b4558',
	storageBucket: 'glambit-b4558.appspot.com',
	messagingSenderId: '431688784174',
	appId: '1:431688784174:web:b7e0a391c8ad5ed3d302bf',
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
