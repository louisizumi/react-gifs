import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { query: "" };
  }

  handleChange = (e) => {
    this.setState({ query: e.target.value });
    this.props.search(e.target.value);
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.query}
        className="search-bar"
        placeholder="Search for gifs..."
        onChange={this.handleChange}
      />
    );
  }
}

export default SearchBar;
