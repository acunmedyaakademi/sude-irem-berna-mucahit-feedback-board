import { useState } from "react";

export default function AddComment({ comments, setComments, currentUser }){

  const [ characterLimit, setCharacterLimit ] = useState(250);
  const [ inputValue, setInputValue ] = useState('');

  function handleChange(e){
    setCharacterLimit(characterLimit - 1);
    setInputValue(e.target.value);
  }

  function handleClick(){
    if(inputValue.trim() !== ''){
      setComments([
        ...comments, 
        {
          id: 15,
          content: inputValue,
          user: currentUser
        }
      ]);
      setInputValue('');
      setCharacterLimit(250);
    };
  }

  return(
    <div className="add-comment-input-container">
      <h3>Add Comment</h3>
      <textarea placeholder="Type your comment here" value={inputValue} onChange={handleChange}></textarea>
      <div className="add-comment-input-container-wrapper">
        <p>{characterLimit} Characters left</p>
        <button onClick={handleClick}>Post Comment</button>
      </div>
    </div>
  )
}