function onClick() {
    console.log('navigate to search page')
}

function SearchBookButton() {
    return (
        <div className="open-search">
            <button onClick={onClick}>Add a book</button>
        </div>
    )
}

export default SearchBookButton;