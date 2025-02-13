import { useContext } from "react";
import RoadmapHeader from "../components/RoadmapHeader.jsx";
import { DataContext } from "../App.jsx";

export default function Roadmap() {
  const { data } = useContext(DataContext)
  console.log(data)
  return (
    <>
      <div className="roadmap-page">
        <RoadmapHeader />
        <div className="roadmap-container">
          {/* section ve kart ayrı componentler olacak */}
          <div className="roadmap-status-section">
            <h3>Planned (2)</h3>
            <p>Ideas prioritized for research</p>
            <div className="roadmap-status-card">
            </div>
          </div>
        </div>
      </div>
    </>
  )
}