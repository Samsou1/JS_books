import React,{ useEffect, useState } from "react";

const Book = ({book}) => {
  const {title, authors, isbn, shortDescription, isFav, read} = book;
  const [favourited, setFavourite] = useState(isFav)
  const [readed, setRead] = useState(read)

  const toggleFav = () => {
    setFavourite(!favourited)
    const allBooks = JSON.parse(localStorage.getItem('books'));
    const changedList = allBooks.map((bk)=> {
      if(bk.isbn === isbn){
        bk.isFav = !bk.isFav;
        return bk;
      }else{
        return bk;
      }
    })
    localStorage.setItem('books', JSON.stringify(changedList));
  }
  
  const toggleRead = () => {
    setRead(!readed)
    const allBooks = JSON.parse(localStorage.getItem('books'));
    const changedList = allBooks.map((bk)=> {
      if(bk.isbn == isbn){
        bk.read = !bk.read;
        return bk;
      }else{
        return bk;
      }
    })
    localStorage.setItem('books', JSON.stringify(changedList));
  }

  return (<div>
    <p>Title: {title}</p>
    <p>Authors: {authors}</p>
    <p>ISBN: {isbn}</p>
    <p>Description: {shortDescription}</p>
    <button onClick={toggleFav}>{favourited ? 'Unfavourite':'Add to favourite'}</button>
    <button onClick={toggleRead}>{readed ? 'Mark as unread':'Mark as read'}</button>
  </div>)
}

export default Book;