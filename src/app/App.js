import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Timer from '../timer/component/Timer';

import '../style/app.css';

class App extends Component {
  render() {
    return (
      <Timer />
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));