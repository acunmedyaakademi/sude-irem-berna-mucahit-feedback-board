import { Link, Outlet } from "react-router-dom";

export default function RoadmapStatusCard({ x }) {

  return (
    <>
      <div className="roadmap-status-card">
        <h4><Link to={`/feedback-details/${x?.id}`}>{x?.title}</Link>
        <Outlet /></h4>
        <p style={{ color: "gray" }}>{x?.description}</p>
        <span>{x?.category}</span>
        {/* upvotes'u 1 arttır */}
        <button>^ {x?.upvotes}</button>
        <span>Comments: {x?.comments?.length > 0 ? x?.comments?.length : 0}</span>
      </div>
    </>
  )
}