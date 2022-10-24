import Book from '../Book'
const BookList = ({books}) => {
  return(<div className="bookList">
    {books.length > 0 ? (
    <ul className="books">
      {books.map((book, index) => (
        <Book book={book} key={index} />
      ))}
    </ul>
    ) : (
      <p className="placeholder">placeholder</p>
    )}
  </div>)
}
export default BookList;