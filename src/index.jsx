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
      <div>
        <div className="left">
          <input type="text" class="form-control form-search" value="pepe"></input>
          <div className="selected-gif">
            
          </div>
        </div>
        <div className="right">
          <div className="gif-list">
            
          </div>
        </div>
      </div>
    );
  } 
};

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App />, root);
}
