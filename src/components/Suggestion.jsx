export default function Suggestion(){
  return(
    <>
      <div className="suggestion-item">
      <span className="upvotes--mobile">upvotes</span>
        <div className="suggestion-item-wrapper">
          <h2></h2>
          <p></p>
          <span className="category">category</span>
        </div>
        <div className="suggestion-item--mobile">
          <span className="upvotes--mobile">upvotes</span>
          <span className="comments--mobile">comments</span>
        </div>
        <span className="comments">comments</span>
      </div>
    </>
  )
}