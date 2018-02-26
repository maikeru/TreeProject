import React from 'react';
import Tree from './components/Tree';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="Header">
          <h1>Hello</h1>
        </div>
        <Tree />
      </div>
    );
  }
}
