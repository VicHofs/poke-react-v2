import React from 'react';
import ReactDOM from 'react-dom';
import jwt from 'jwt-simple';
import App from './App';

declare global {
  interface Window {
    hasRestoredState: any;
  }
}

const lastKnownState = localStorage.getItem(
  `@lastKnown_${window.location.href}`,
);

const secret = '123456';
if (lastKnownState && lastKnownState !== 'undefined') {
  console.log(jwt.decode(lastKnownState, secret));

  if (document.getElementById('root')?.innerHTML !== null) {
    document.getElementById('root')!.innerHTML = jwt.decode(
      lastKnownState,
      secret,
    );
    window.hasRestoredState = true;
  }
}

if (window.hasRestoredState) {
  ReactDOM.hydrate(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root'),
  );
} else {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root'),
  );
}
