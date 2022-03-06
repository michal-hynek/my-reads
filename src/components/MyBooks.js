import PropTypes from 'prop-types';
import BookShelf from "./BookShelf";

function MyBooks(props) {
    return (
        <div className="list-books-content">
            <BookShelf
                name="currentlyReading"
                title="Currently Reading"
                books={props.books.filter(b => b.shelf === "currentlyReading")}
            />
            <BookShelf
                name="wantToRead"
                title="Want to Read"
                books={props.books.filter(b => b.shelf === "wantToRead")}
            />
            <BookShelf
                name="read"
                title="Read"
                books={props.books.filter(b => b.shelf == "read")}
            />
        </div>
    )
}

MyBooks.propTypes = {
    books: PropTypes.array.isRequired
};

export default MyBooks;