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
            <select value={props.selectedShelf || "none"} onChange={selectShelf}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )
}

BookShelfSelector.propTypes = {
    selectedShelf: PropTypes.string.isRequired,
    onShelfUpdated: PropTypes.func.isRequired,
};

export default BookShelfSelector;