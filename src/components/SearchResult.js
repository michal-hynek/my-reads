import PropTypes from 'prop-types';
import Book from "./Book";

function SearchResult(props) {
    return (
        <div className="search-books-results">
            <ol className="books-grid">
                {props.books.map(book => (
                    <li key={book.id}>
                        <Book
                            book={book}
                            onBookMoved={props.onBookMoved}
                        >
                        </Book>
                    </li>
                ))}
            </ol>
        </div>
    )
}

SearchResult.propTypes = {
    books: PropTypes.array.isRequired,
    onBookMoved: PropTypes.func.isRequired,
};

export default SearchResult;