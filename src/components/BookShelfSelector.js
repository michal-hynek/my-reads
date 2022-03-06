import PropTypes from 'prop-types';

function BookShelfSelector(props) {
    function selectShelf(event) {
        const shelf = event.target.value;

        if (shelf !== props.selectedShelf) {
            props.onShelfUpdated(shelf);
        }
    }

    return (
        <div className="book-shelf-changer">
            <select>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading" onClick={selectShelf}>Currently Reading</option>
                <option value="wantToRead" onClick={selectShelf}>Want to Read</option>
                <option value="read" onClick={selectShelf}>Read</option>
                <option value="none" onClick={selectShelf}>None</option>
            </select>
        </div>
    )
}

BookShelfSelector.propTypes = {
    selectedShelf: PropTypes.string.isRequired,
    onShelfUpdated: PropTypes.func.isRequired,
};

export default BookShelfSelector;