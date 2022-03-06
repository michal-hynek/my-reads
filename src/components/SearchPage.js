import PropTypes from "prop-types";
import React, { Component } from "react";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import { search } from "../api/BookAPI";

class SearchPage extends Component {
    state = {
        searchResult: []
    };

    searchHandler(query) {
        if (query) {
            search(query).then((response) => {
                const searchResult = response && !response.error ? response : [];

                this.setState({
                    searchResult: searchResult.map(b => ({ ...b, shelf: 'none' })),
                })
            });
        } else {
            this.setState({
                searchResult: [],
            })
        }
    }

    render() {
        return (
            <div className="search-books">
                <SearchBar onSearchQueryUpdated={(query) => this.searchHandler(query)} />
                <SearchResult books={this.state.searchResult} onBookMoved={this.props.onBookMoved} />
            </div>
        )
    }
}

SearchPage.propTypes = {
    onBookMoved: PropTypes.func.isRequired,
};

export default SearchPage;