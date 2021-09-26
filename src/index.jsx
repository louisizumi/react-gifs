import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

import SearchBar from './components/search_bar';
import Gif from './components/gif';
import GifList from './components/gif_list';

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
          <SearchBar />
          <div className="selected-gif">
            <Gif id="28GHfhGFWpFgsQB4wR" />
          </div>
        </div>
        <div className="right">
          <div className="gif-list">
            <GifList />
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
