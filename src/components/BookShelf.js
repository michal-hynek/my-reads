import PropTypes from 'prop-types';
import Book from './Book';

function BookShelf(props) {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.books.map(book => (
                        <li key={book.id}>
                            <Book
                                id={book.id}
                                title={book.title}
                                authors={book.authors}
                                shelf={props.name}
                                cover={book.imageLinks.thumbnail}
                                onBookMoved={props.onBookMoved}
                            />
                        </li>
                    ))
                    }
                </ol>
            </div>
        </div>
    )
}

BookShelf.propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onBookMoved: PropTypes.func.isRequired,
};

export default BookShelf;