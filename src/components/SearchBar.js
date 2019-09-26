import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="feild">
            <label>
              <h1>Video Search</h1>
            </label>
            <input
              placeholder="search for videos!"
              onChange={this.onInputChange}
              type="text"
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
