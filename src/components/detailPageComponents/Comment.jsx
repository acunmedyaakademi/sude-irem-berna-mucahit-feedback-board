import { useState } from "react";
import Replies from "./Replies";

export default function Comment({ x, comments, setComments }){
  const [isReplyingTo, setIsReplyingTo] = useState(false);
  const [inputValue, setInputValue] = useState('');

  function handleClick(){
    setIsReplyingTo(true);
  }

  function handleChange(e){
    setInputValue(e.target.value);
  }

  function addReply(){
    const newReply = {
      id: crypto.randomUUID(),
      content: inputValue,
      replyingTo: x.user.username,
      user: {
        image: "/assets/user-images/image-zena.jpg",
        name: "Zena Kelley",
        username: "velvetround"
      }
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
  
  return(
    <div className="comments-item">
      <div className="comments-item-container">
          <div className="comments-item-top">
            <div className="comments-item-top-wrapper">
              <img src={`https://ui-avatars.com/api/?name=${x.user.name.split(" ")[0]}+${x.user.name.split(" ")[1]}&background=random&bold=true&color=fff`} alt="Profile Picture" />
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
              <textarea rows="2" onChange={handleChange}></textarea>
              <button onClick={addReply}>Post Reply</button>
            </div>
          ) : ''}
      </div>
      {x.replies ? <Replies comment={x} comments={comments} setComments={setComments} /> : ''}
      <span className="divider"></span>
    </div>
  )
}