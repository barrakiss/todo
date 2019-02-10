import React, { Component } from 'react';
import './assets/style/App.scss';
import TodoApp from './components/todo/TodoApp';
import CustomParticles from './components/Particles';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomParticles />
        <TodoApp />
      </div>
    );
  }
}

export default App;
