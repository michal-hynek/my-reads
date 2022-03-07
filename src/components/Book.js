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
    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={getBookCoverStyle(props.book.imageLinks?.thumbnail)}></div>
                <BookShelfSelector
                    selectedShelf={props.book.shelf || 'none'}
                    onShelfUpdated={(shelf) => props.onBookMoved({ book: props.book, shelf})}
                />
            </div>
            <div className="book-title">{props.book.title}</div>
            <div className="book-authors">{(props.book.authors || []).join(", ")}</div>
        </div>
    )
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    onBookMoved: PropTypes.func.isRequired,
};

export default Book;