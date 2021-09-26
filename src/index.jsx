import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: null
    };
  }

  render() {
    return (
      <p>
        Hello, World
      </p>
    );
  } 
};

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App />, root);
}
