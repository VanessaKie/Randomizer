import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Main from './Components/Main/index'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  handleButtonRandom = (input) => {
    console.log(input);
  }

  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;
