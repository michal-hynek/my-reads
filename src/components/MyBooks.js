import PropTypes from 'prop-types';
import BookShelf from "./BookShelf";

function MyBooks(props) {
    return (
        <div className="list-books-content">
            <BookShelf
                name="currentlyReading"
                title="Currently Reading"
                books={props.currentlyReading}
                onBookMoved={props.onBookMoved}
            />
            <BookShelf
                name="wantToRead"
                title="Want to Read"
                books={props.wantToRead}
                onBookMoved={props.onBookMoved}
            />
            <BookShelf
                name="read"
                title="Read"
                books={props.read}
                onBookMoved={props.onBookMoved}
            />
        </div>
    )
}

MyBooks.propTypes = {
    currentlyReading: PropTypes.array.isRequired,
    wantToRead: PropTypes.array.isRequired,
    read: PropTypes.array.isRequired,
    onBookMoved: PropTypes.func.isRequired,
};

export default MyBooks;