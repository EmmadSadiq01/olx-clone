import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <BrowserRouter>
  <App />
</BrowserRouter>,
  document.getElementById('root')
);
serviceWorker.unregister();

// let x=0;
//   document.getElementById("option1").addEventListener("click", (e) => {
            
//           if(x===0){
//             let mobile = document.getElementById("none");
//             mobile.style.display="none";
//             let item = document.getElementById("show");
//             item.style.display="block";
//             let rotate = document.getElementById("rotate")
//             rotate.style.transform=" rotate(180deg)"
//             x=1
//           }
//           else{
//             let mobile = document.getElementById("none");
//             mobile.style.display="block";
//             let item = document.getElementById("show");
//             item.style.display="none";
//             let rotate = document.getElementById("rotate")
//             rotate.style.transform=" rotate(360deg)"

//             x=0
//           }
            
               




//             })

//   document.getElementById("option2").addEventListener("click", (e) => {
            
//           if(x===0){
//             let mobile = document.getElementById("none1");
//             mobile.style.display="none";
//             let item = document.getElementById("show1");
//             item.style.display="block";
//             let rotate = document.getElementById("rotate1")
//             rotate.style.transform=" rotate(180deg)"
//             x=1
//           }
//           else{
//             let mobile = document.getElementById("none1");
//             mobile.style.display="block";
//             let item = document.getElementById("show1");
//             item.style.display="none";
//             let rotate = document.getElementById("rotate1")
//             rotate.style.transform=" rotate(360deg)"

//             x=0
//           }
            
               




//             });