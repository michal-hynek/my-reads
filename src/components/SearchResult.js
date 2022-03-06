import PropTypes from 'prop-types';
import Book from "./Book";

function SearchResult(props) {
    return (
        <div className="search-books-results">
            <ol className="books-grid">
                {props.books.map(book => (
                    <li key={book.id}>
                        <Book
                            id={book.id}
                            title={book.title}
                            authors={book.authors}
                            shelf={props.name}
                            cover={book.imageLinks.thumbnail}
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