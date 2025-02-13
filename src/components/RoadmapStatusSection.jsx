import { useContext } from "react"
import { DataContext } from "../App"
import RoadmapStatusCard from "./RoadmapStatusCard";

export default function RoadmapStatusSection({ roadmapSectionTitle }) {
  const { data } = useContext(DataContext);

  const roadmapSectionData = data?.filter(x => x.status == roadmapSectionTitle);

  const titleInfos = {
    "planned": {"info": "Ideas prioritized for research", "color":"orange"},
    "in-progress": {"info":"Currently being developed", "color": "purple"},
    "live": {"info":"Released features", "color": "blue"}
  }

  return (
    <>
      <div className="roadmap-status-section">
        <h3>{roadmapSectionTitle} ({roadmapSectionData.length})</h3>
        <p>{titleInfos[roadmapSectionTitle].title}</p>
        {
          roadmapSectionData?.map(x => <RoadmapStatusCard x={x} />)
        }

      </div>
    </>
  )
}