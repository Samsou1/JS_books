import BookList from './components/BookList'
import Favourite from './components/Favourite'
import Wish from './components/Wish'
import { useEffect } from "react";
import { useState } from "react";
import Books from './assets/books'
import Form from './components/Form'

const App = () => {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const [fav, setFav] = useState(false)
  const [read, setRead] = useState(false)

  const displayFavourite = () => {
    let savedBooks = JSON.parse(localStorage.getItem("books"));
    if(!fav){
      setBooks(savedBooks.filter(element => element.isFav == true));
    }else{
      setBooks(savedBooks);
    }
    setFav(!fav)
  }

  const displayRead = () => {
    const savedBooks = JSON.parse(localStorage.getItem("books"));
    if(!read){
      setBooks(savedBooks.filter(element => element.read == true));
    }else{
      setBooks(savedBooks);
    }
    setRead(!read)
  }

  const displaySearch = (str) => {
    const savedBooks = localStorage.getItem("books");
    if(str == ''){
      setBooks(JSON.parse(savedBooks) ?? []);
    }else{
      setBooks(JSON.parse(savedBooks).filter(element => element.title == str) ?? [])
    }
  }

  useEffect(() => {
    const data = JSON.stringify(Books['books']);
    localStorage.setItem('books', data);
    const savedBooks = localStorage.getItem("books");
    setBooks(JSON.parse(savedBooks) ?? []);
    setLoading(true);
  }, []);

  useEffect(() => {
    if (!loading) localStorage.setItem("books", JSON.stringify(books));
  }, [books, loading]);

  return (
    <>
      <Form displaySearch={displaySearch}/>
      <Favourite displayFavourite={displayFavourite} />
      <Wish displayRead={displayRead} />
      <BookList books={books}/>
    </>
  );
}

export default App;