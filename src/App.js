import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Registration from './components/Login';

 import Greet from './components/Greet';

function App() {

  
  const [token, setToken] = useState();
  if(!token) {
    return <Login setToken={setToken} />
  }else{
    return <Greet setToken={setToken} />

  }
//   return (
//     <div className="App">
//              <BrowserRouter>
//         <Switch>
//           <Route path="/greet">
//             <Greet />
//           </Route>
          
//         </Switch>
//       </BrowserRouter>

//     </div>
//   );
 }

export default App;
