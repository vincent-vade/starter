import React from 'react';
import Header from './components/Header';

export default class App extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div className="app">
        <Header />
        <div>testtt</div>
      </div>
    );
  }
}
