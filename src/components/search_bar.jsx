import React, { Component } from 'react';

class SearchBar extends Component {
  handleChange = (e) => {
    this.props.search(e.target.value);
  }

  render() {
    return (
      <input type="text" className="search-bar" placeholder="Search for gifs..." onChange={this.handleChange} />
    );
  }
}

export default SearchBar;
