import Reply from "./Reply";

export default function Replies({ comment, comments, setComments, currentUser }){
  return(
    <div className="replies-container">
      {comment?.replies.map((reply, index) => <Reply x={reply} key={index} comments={comments} setComments={setComments} comment={comment} currentUser={currentUser} />)}
    </div>
  )
}