import { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { DataContext } from "../App";

export default function RoadmapStatusCard({ x, color }) {
  const [clickedUpvote, setClickedUpvote] = useState(false)
  const [currentFeedback, setCurrentFeedback] = useState({})
  const [upvotes, setUpvotes] = useState(null)
  const { data, setData } = useContext(DataContext);
  

  useEffect(() => {
    const feedback = data?.find(y => y.id == x.id)
    setCurrentFeedback(feedback);
    setUpvotes(feedback.upvotes)
  }, [])

  function handleUpvote() {
    setClickedUpvote(!clickedUpvote)
    console.log(clickedUpvote);
    clickedUpvote ? setUpvotes(upvotes - 1) : setUpvotes(upvotes + 1);
    console.log(upvotes);
  }

  return (
    <>
      <div className="roadmap-status-card">
        <div style={{ backgroundColor: color }} className="roadmap-card-top"></div>
        <div className="roadmap-status-card-content">
          <p className="roadmap-status">
            <span className="roadmap-status-ball">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="4" cy="4" r="4" fill={color} />
              </svg> </span>
            {x?.status}</p>
          <h4><Link to={`/feedback-details/${x?.id}`}>{x?.title}</Link>
            <Outlet /></h4>
          <p style={{ color: "gray" }}>{x?.description}</p>
          <span className="roadmap-status-category-span">{x?.category}</span>
          <div className="roadmap-status-card-reaction">
            <button onClick={handleUpvote} className={clickedUpvote ? "roadmap-upvotes-btn roadmap-upvotes-btn-pressed" : "roadmap-upvotes-btn"}>{upChevron} {upvotes}</button>
            <span className="roadmap-comments">{commentSvg} {x?.comments?.length > 0 ? x?.comments?.length : 0}</span>
          </div>
        </div>
      </div>
    </>
  )
}

const ballSvg = <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="4" cy="4" r="4" fill="#AD1FEA" />
</svg>

const commentSvg = <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2.62074 16H1.34534L2.24718 15.0895C2.73344 14.5986 3.0371 13.9601 3.11873 13.2674C1.03637 11.8878 0 9.88917 0 7.79388C0 3.92832 3.51913 0 9.0305 0C14.8692 0 18 3.61479 18 7.45522C18 11.321 14.8361 14.9333 9.0305 14.9333C8.0135 14.9333 6.95226 14.7963 6.00478 14.5448C5.10787 15.4735 3.89262 16 2.62074 16Z" fill="#CDD2EE" />
</svg>

const upChevron = <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 6L4 2L8 6" stroke="#4661E6" stroke-width="2" />
</svg>
