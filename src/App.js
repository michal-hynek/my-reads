import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MyBooks from './components/MyBooks';
import SearchBookButton from './components/SearchBookButton';
import { getAll, update } from './api/BookAPI';
import SearchPage from './components/SearchPage';

class App extends Component {
    state = {
        currentlyReading: [],
        wantToRead: [],
        read: [],
    };

    componentDidMount() {
        getAll().then((books) => this.setState({
            currentlyReading: books.filter(b => b.shelf === "currentlyReading"),
            wantToRead: books.filter(b => b.shelf === "wantToRead"),
            read: books.filter(b => b.shelf === "read"),
        }));
    }

    updateBookHandler(book, shelf) {
        function updateBooks(shelf, bookIds, bookMap) {
            return bookIds
                .filter(id => bookMap[id])
                .map(id => {
                    bookMap[id].shelf = shelf;
                    return bookMap[id];
                });
        }

        update(book, shelf)
            .then((update) => this.setState((prevState) => {
                const books = [...prevState.currentlyReading, ...prevState.wantToRead, ...prevState.read]
                const bookMap = books.reduce((map, book) => {
                    map[book.id] = book;
                    return map;
                }, {});

                return {
                    currentlyReading: updateBooks("currentlyReading", update.currentlyReading, bookMap),
                    wantToRead: updateBooks("wantToRead", update.wantToRead, bookMap),
                    read: updateBooks("read", update.read, bookMap),
                };
            }));
    }

    render() {
        return (
            <Routes>
                <Route path="/" element={
                    <div className="list-books">
                        <Header />
                        <MyBooks
                            currentlyReading={this.state.currentlyReading}
                            wantToRead={this.state.wantToRead}
                            read={this.state.read}
                            onBookMoved={(update) => this.updateBookHandler(update.book, update.shelf)} />
                        <SearchBookButton />
                    </div>
                } />
                <Route path="/search" element={
                    <SearchPage onBookMoved={(update) => this.updateBookHandler(update.book, update.shelf)} />
                } />
            </Routes>
        )
    }
}

export default App;