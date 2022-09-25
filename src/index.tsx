import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserHistory} from 'history';
import {Routes,Route ,unstable_HistoryRouter as HistoryRoute} from 'react-router-dom';
// import {HistoryRoute} from 'react-router'

//set up redux 
import { Provider } from 'react-redux';
import {store} from './redux/configStore';
import HomeTamplate from './templates/HomeTemplate/HomeTamplate';
import Cart from './pages/Cart/Cart';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';

export const history = createBrowserHistory();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <HistoryRoute history={history}>
   <Routes>
          <Route path='' element={<HomeTamplate/>}>
              <Route path='' element={<Home/>}/>
             <Route path='cart' element={<Cart/>}/>
             <Route path='login' element={<Login/>}/>
             <Route path='register' element={<Register/>}/>

          </Route>
   </Routes>
    </HistoryRoute>
   </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
