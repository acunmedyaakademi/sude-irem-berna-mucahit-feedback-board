import { useNavigate } from "react-router-dom"

export default function Suggestion({ feedBack }){

  const navigate = useNavigate();

  return(
    <>
      <div className="suggestion-item">
        <div className="suggestion-item-wrapper-container">
        <span className="upvotes"><img src="/images/arrow-up.svg" /> <span>{feedBack?.upvotes}</span></span>
          <div className="suggestion-item-wrapper">
            <h2>{feedBack?.title}</h2>
            <p>{feedBack?.description}</p>
            <span className="category">{feedBack?.category?.charAt(0).toUpperCase() + feedBack?.category?.slice(1)}</span>
          </div>
        </div>
        <div className="suggestion-item--mobile">
          <span className="upvotes--mobile"> <img src="/images/arrow-up.svg" /> {feedBack?.upvotes}</span>
          <span className="comments--mobile" onClick={() => {
            navigate(`/feedback-details/${feedBack.id}`);
            window.scroll(0, 0);
          }}><img src="/images/comments-icon.svg" alt="Comments Icon" /> {feedBack?.comments?.length}</span>
        </div>
        <span className="comments" onClick={() => navigate(`/feedback-details/${feedBack.id}`)}><img src="/images/comments-icon.svg" alt="Comments Icon" /> {feedBack?.comments?.length}</span>
      </div>
    </>
  )
}