import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';


ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  document.getElementById('root')
);

// if (module.hot) {
//   module.hot.accept('./App.jsx', function () {
//     console.log('Accepting the updated App module!');
//     // printMe();
//   });
// }