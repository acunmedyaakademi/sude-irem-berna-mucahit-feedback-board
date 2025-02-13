import { useEffect, useRef, useState } from "react";
import Replies from "./Replies";

export default function Comment({ x, comments, setComments, currentUser }){
  const [isReplyingTo, setIsReplyingTo] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const textareaRef = useRef(null);

  useEffect(() => {
    if (isReplyingTo && textareaRef.current) {
      textareaRef.current.focus(); 
    }
  }, [isReplyingTo]);

  function handleClick(){
    setIsReplyingTo(true);
  }

  function handleChange(e){
    setInputValue(e.target.value);
  }

  function addReply(){
   if(inputValue.trim() !== ''){
    const newReply = {
      id: crypto.randomUUID(),
      content: inputValue,
      replyingTo: x.user.username,
      user: currentUser
    }
    const updatedComment = {
      ...x,
      replies: x.replies ? [...x.replies, newReply] : [newReply]
    }
    const updatedComments = comments.map(comment =>
      comment.id === x.id ? updatedComment : comment 
    );

    setComments([...updatedComments]);
    setIsReplyingTo(false);
   }
  }
  
  return(
    <div className="comments-item">
      <div className="comments-item-container">
          <div className="comments-item-top">
            <div className="comments-item-top-wrapper">
              <img src={x.user.image} alt="Profile Picture" />
              <div className="user-info">
                <p className="name">{x.user.name}</p>
                <p className="user-name">@{x.user.username}</p>
              </div>
          </div>
          <button onClick={handleClick}>Reply</button>
        </div>
        <p className="comment-content">{x.content}</p>
        {isReplyingTo ? (
            <div className="reply-input-container">
              <textarea ref={textareaRef} rows="2" onChange={handleChange}></textarea>
              <button onClick={addReply}>Post Reply</button>
            </div>
          ) : ''}
      </div>
      {x.replies ? <Replies comment={x} comments={comments} setComments={setComments} currentUser={currentUser} /> : ''}
      <span className="divider"></span>
    </div>
  )
}