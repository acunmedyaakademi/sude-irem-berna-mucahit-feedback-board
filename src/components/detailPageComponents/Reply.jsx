import { useState } from "react";
import Replies from "./Replies";

export default function Reply({ x, comments, setComments, comment}){
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
    const updatedReply = {
      ...x,
      replies: x.replies ? [...x.replies, newReply] : [newReply]
    }
    let updatedComment = comments.find(x => x.id === comment);
    updatedComment = {
      ...comment,
      replies: comment.replies.map(x => x.id == updatedReply.id ? updatedReply : x)
    }
    const updatedComments = comments.map(x =>
      x.id === comment.id ? updatedComment : x 
    );
    
    setComments([...updatedComments]);
    setIsReplyingTo(false);
  }

  // const colors = ['#AD1FEA', '#4661E6', '#373F68', '#3A4374', '#F49F85', '#62BCFA', '#647196'];
  
  return(
    <div className="replies-container">
      <div className="comments-item">
        <div className="comments-item-container">
          <div className="comments-item-top">
            <div className="comments-item-top-wrapper">
              <img src={`https://ui-avatars.com/api/?name=${x.user.name.split(" ")[0]}+${x.user.name.split(" ")[1]}&background=#373F68&bold=true&color=fff`} alt="Profile Picture" />
              <div className="user-info">
                <p className="name">{x.user.name}</p>
                <p className="user-name">@{x.user.username}</p>
              </div>
            </div>
            <button onClick={handleClick}>Reply</button>
          </div>
          <p className="comment-content"><span>@{x.replyingTo}</span> {x.content}</p>
          {isReplyingTo ? (
            <div className="reply-input-container">
              <textarea rows="2" onChange={handleChange}></textarea>
              <button onClick={addReply}>Post Reply</button>
            </div>
          ) : ''}
        </div>
      </div>
      {x.replies ? <Replies comment={x} comments={comments} setComments={setComments} /> : ''}
    </div>
  )
}