import { useState } from "react";

export default function AddComment({ comments, setComments }){

  const [ characterLimit, setCharacterLimit ] = useState(250);
  const [ inputValue, setInputValue ] = useState('');

  function handleChange(e){
    setCharacterLimit(characterLimit - 1);
    setInputValue(e.target.value);
  }

  function handleClick(){
    setComments([
      ...comments, 
      {
        id: 15,
        content: inputValue,
        user: {
          image: "/assets/user-images/image-elijah.jpg",
          name: "Elijah Moss",
          username: "hexagon.bestagon"
        }
      }
    ])
  }

  return(
    <div className="add-comment-input-container">
      <h3>Add Comment</h3>
      <textarea onChange={handleChange}></textarea>
      <div className="add-comment-input-container-wrapper">
        <p>{characterLimit} Characters left</p>
        <button onClick={handleClick}>Post Comment</button>
      </div>
    </div>
  )
}