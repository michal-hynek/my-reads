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
                <div className="book-cover" style={getBookCoverStyle(props.cover)}></div>
                <BookShelfSelector
                    selectedShelf={props.shelf}
                    onShelfUpdated={(shelf) => props.onBookMoved({ book: { id: props.id }, shelf })}
                />
            </div>
            <div className="book-title">{props.title}</div>
            <div className="book-authors">{(props.authors || []).join(", ")}</div>
        </div>
    )
}

Book.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authors: PropTypes.array.isRequired,
    shelf: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    onBookMoved: PropTypes.func.isRequired,
};

export default Book;