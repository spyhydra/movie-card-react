import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore} from 'redux';
import './index.css';
import App from './components/App';
import rootReducer from './reducers/';

const store= createStore(rootReducer);

// console.log('store',store);


// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{name:'Superman'}]
// })

// console.log('after dispatching',store.getState());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store}/>
   
  </React.StrictMode>
);


