import PropTypes from "prop-types";
import React, { Component } from "react";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import { search } from "../api/BookAPI";

class SearchPage extends Component {
    state = {
        searchResult: []
    };

    bookMoveHandler(update) {
        this.setState((prevState) => ({
            searchResult: prevState.searchResult
                .map(book => {
                    if (book.id === update.book.id) {
                        return {
                            ...book,
                            shelf: update.shelf,
                        };
                    } else {
                        return book;
                    }
                })
        }));

        this.props.onBookMoved(update);
    }

    searchHandler(query) {
        if (query) {
            search(query).then((response) => {
                const searchResult = response && !response.error ? response : [];
                const booksMap = this.props.myBooks.reduce((map, book) => {
                    map[book.id] = book;
                    return map;
                }, {});

                this.setState({
                    searchResult: searchResult.map(book => ({
                        ...book,
                        shelf: booksMap[book.id]?.shelf || 'none',
                    })),
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
                <SearchResult books={this.state.searchResult} onBookMoved={(update) => this.bookMoveHandler(update)} />
            </div>
        )
    }
}

SearchPage.propTypes = {
    myBooks: PropTypes.array.isRequired,
    onBookMoved: PropTypes.func.isRequired,
};

export default SearchPage;