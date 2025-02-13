import { Link, Outlet } from "react-router-dom";
import GoBackBtn from "./GoBackBtn";

export default function RoadmapHeader() {

  return (
    <>
      <div className="roadmap-header">
        <div className="roadmap-header-titles">
          <Link to={`/`}><GoBackBtn /></Link>
          <Outlet />
          <h2>Roadmap</h2>
        </div>
        <Link to={`/new-feedback`} className="add-feedback-btn">+ Add Feedback</Link>
        <Outlet />
      </div>
    </>
  )
}