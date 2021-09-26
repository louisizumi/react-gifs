import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import giphy from 'giphy-api';

import '../assets/stylesheets/application.scss';

import SearchBar from './components/search_bar';
import Gif from './components/gif';
import GifList from './components/gif_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: ["28GHfhGFWpFgsQB4wR", "icUEIrjnUuFCWDxFpU"],
      selectedGifId: "28GHfhGFWpFgsQB4wR"
    };

    this.search("hello");
  }

  search = (query) => {
    giphy("1KMPHCBIOe3hOjJwCJQX49sRc6cM0oIm").search({
      q: query,
      rating: 'g'
    }, (error, result) => {
      console.log(result)
      this.setState({ gifs: result.data });
    });
  }

  render() {
    const { gifs, selectedGifId } = this.state;
    return (
      <div>
        <div className="left">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={selectedGifId} />
          </div>
        </div>
        <div className="right">
          <GifList gifs={gifs} />
        </div>
      </div>
    );
  } 
};

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App />, root);
}
