import PropTypes from 'prop-types';
import BookShelfSelector from './BookShelfSelector';

function getBookCoverStyle(bookCover) {
    return {
        width: 128,
        height: 193,
        backgroundImage: `url(${bookCover})`
    } ;
}

function Book(props) {
    const { book } = props;
    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={getBookCoverStyle(book.imageLinks?.thumbnail)}></div>
                <BookShelfSelector
                    selectedShelf={book.shelf || 'none'}
                    onShelfUpdated={(shelf) => props.onBookMoved({ book, shelf})}
                />
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{(book.authors || []).join(", ")}</div>
        </div>
    )
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    onBookMoved: PropTypes.func.isRequired,
};

export default Book;