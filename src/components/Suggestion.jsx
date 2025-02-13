export default function Suggestion({ upvotes, comments, category }){
  return(
    <>
      <div className="suggestion-item">
      <span className="upvotes--mobile">{upvotes}</span>
        <div className="suggestion-item-wrapper">
          <h2></h2>
          <p></p>
          <span className="category">{category}</span>
        </div>
        <div className="suggestion-item--mobile">
          <span className="upvotes--mobile">{upvotes}</span>
          <span className="comments--mobile"><img src="./images/comments-icon.svg" alt="Comments Icon" /> {comments.length}</span>
        </div>
        <span className="comments"><img src="./images/comments-icon.svg" alt="Comments Icon" /> {comments.length}</span>
      </div>
    </>
  )
}