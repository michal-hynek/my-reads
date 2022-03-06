import { Link } from 'react-router-dom';

function SearchBookButton() {
    return (
        <div className="open-search">
            <Link to="/search">
                <button>Add a book</button>
            </Link>
        </div>
    )
}

export default SearchBookButton;