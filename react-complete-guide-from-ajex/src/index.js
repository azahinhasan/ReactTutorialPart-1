import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios'; //more in blog.js




//axios.defaults.baseURL='https://jsonplaceholder.typicode.com/'; //define url by defult
//moved to axios.js

axios.defaults.headers.common['Authorization'] = "AUTH TOKEN";
axios.defaults.headers.post['Content-Type']='application/json';




axios.interceptors.request.use(request =>{
    console.log(request);

    return request; //have to return or ruquest gonna block
}, error =>{
  console.log(error);
  return Promise.reject(error);
});


axios.interceptors.response.use(response=>{
  console.log(response);

  return response; //have to return or ruquest gonna block
}, error =>{
console.log(error);
return Promise.reject(error);
});






ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
