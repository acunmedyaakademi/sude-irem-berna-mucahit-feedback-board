import { Link, Outlet } from "react-router-dom";

export default function RoadmapHeader() {

  return (
    <>
      <div className="roadmap-header">
        <div className="roadmap-header-titles">
          <Link to={`/`}>Go back</Link>
          <Outlet />
          <h2>Roadmap</h2>
        </div>
        <Link to={`/new-feedback`}>+ Add Feedback</Link>
        <Outlet />
      </div>
    </>
  )
}