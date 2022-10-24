import { useState } from "react";
const Form = ({displaySearch}) => {
  const [search, setSearch] = useState("")

  const handleChange = (event) => {
    setSearch(document.getElementById('booksearch').value);
    event.preventDefault();
    displaySearch(search);
  }

  return(<form onSubmit={handleChange}>
    <label>Search books</label><br></br>
    <input type="text" id="booksearch" name="booksearch" ></input>
  </form>)
}

export default Form;