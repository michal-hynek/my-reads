import './App.css';
import Header from './components/Header';
import MyBooks from './components/MyBooks';
import SearchBookButton from './components/SearchBookButton';
import books from "./api/StaticBookList.json";

function App() {
    return (
        <div className="list-books">
            <Header />
            <MyBooks books={books} />
            <SearchBookButton />
        </div>
    );
}

export default App;