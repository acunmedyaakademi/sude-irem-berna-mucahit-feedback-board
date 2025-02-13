import { useContext } from "react"
import { DataContext } from "../App"
import RoadmapStatusCard from "./RoadmapStatusCard";

export default function RoadmapStatusSection({ roadmapSectionTitle }) {
  const { data } = useContext(DataContext);

  const roadmapSectionData = data?.filter(x => x.status == roadmapSectionTitle);

  return (
    <>
      <div className="roadmap-status-section">
        <h3>{roadmapSectionTitle} ({roadmapSectionData.length})</h3>
        <p>Ideas prioritized for research</p>
        {
          roadmapSectionData?.map(x => <RoadmapStatusCard x={x} />)
        }

      </div>
    </>
  )
}