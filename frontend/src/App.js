import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/button';
import React from 'react';
import Homepage from './components/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [show, setShow]= React.useState(true)

  return (
    <div className="App">
      {show?
      <header className="App-header">
        <img src="https://images.vexels.com/media/users/3/245388/isolated/preview/4a014e570ee3a2da3cb00094866be67b-retro-sunset-circle-shape.png" className="App-logo" alt="logo" />
        <p>
          Let's catch a sunset
        </p>
        <Button variant="outline-warning" onClick={()=>setShow(false)}> Start </Button>
      </header> : null}

      <Homepage/>
       

      
    </div>
  );
}

export default App;
