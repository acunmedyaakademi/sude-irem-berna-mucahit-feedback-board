import Comment from "./Comment.jsx";

export default function Comments({ comments, setComments, currentUser }){

  return(
    <div className="comments-container">
      <h3>{comments?.length} Comments</h3>
      <div className="comments-items-container">
        {comments?.map(x => <Comment x={x} key={x.id} comments={comments} setComments={setComments} currentUser={currentUser} />)}
      </div>
    </div>
  )
}