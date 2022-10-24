import { useState } from "react";
const Wish = ({displayRead}) => {
  const [read, setRead] = useState(false)
  
  const handleClick = () => {
    setRead(!read);
    displayRead();
  }
  return <button onClick={handleClick}> {read? 'Stop showing me read':'Show Wishlist'}</button>
}

export default Wish