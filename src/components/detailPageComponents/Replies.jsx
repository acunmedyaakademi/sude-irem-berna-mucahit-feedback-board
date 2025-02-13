import Reply from "./Reply";

export default function Replies({ comment, comments, setComments }){
  return(
    <>
      {comment.replies.map((reply, index) => <Reply x={reply} key={index} comments={comments} setComments={setComments} comment={comment} />)}
    </>
  )
}