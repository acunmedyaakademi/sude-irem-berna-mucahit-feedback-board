export default function Suggestion({ feedBack }){

  return(
    <>
      <div className="suggestion-item">
        <span className="upvotes">{feedBack.upvotes}</span>
        <div className="suggestion-item-wrapper">
          <h2>{feedBack.title}</h2>
          <p>{feedBack.description}</p>
          <span className="category">{feedBack.category}</span>
        </div>
        <div className="suggestion-item--mobile">
          <span className="upvotes--mobile"> <img src="/images/arrow-up.svg" /> {feedBack.upvotes}</span>
          <span className="comments--mobile"><img src="/images/comments-icon.svg" alt="Comments Icon" /> {feedBack.comments.length}</span>
        </div>
        <span className="comments"><img src="/images/comments-icon.svg" alt="Comments Icon" /> {feedBack.comments.length}</span>
      </div>
    </>
  )
}