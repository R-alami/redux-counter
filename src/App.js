import React, { Component } from 'react';
import './App.css'
import Counter from './components/Counter'


class App extends Component {

  /* componentWillMount(){
    const storeState = this.props.store.getState();
    console.log(storeState);
    
  } */


  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    );
  }
}

export default App;
