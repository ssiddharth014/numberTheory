import React from 'react';
import logo from './logo.svg';
import Main from './components/main'
import './App.css';
import { BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App" >
      <Main/>
    </div>
   </BrowserRouter>
    
  );
}

export default App;
