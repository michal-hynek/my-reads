import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class SearchBar extends Component {
    state = {
        searchQuery: ''
    };

    handleChange(event) {
        event.preventDefault();

        const searchQuery = event.target.value;
        this.setState({
            searchQuery
        });
        this.props.onSearchQueryUpdated(searchQuery);
    }

    render() {
        return (
            <div className="search-books-bar">
                <Link to="/" className="close-search">Close</Link>
                <div className="search-books-input-wrapper">
                    <input type="text"
                        value={this.state.searchQuery}
                        onChange={(event) => this.handleChange(event)}
                        placeholder="Search by title or author" />
                </div>
            </div>
        )
    }
}

SearchBar.propTypes = {
    onSearchQueryUpdated: PropTypes.func.isRequired
};

export default SearchBar;
