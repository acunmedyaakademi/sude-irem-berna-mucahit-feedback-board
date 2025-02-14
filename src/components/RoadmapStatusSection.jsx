import { useContext } from "react"
import { DataContext } from "../App"
import RoadmapStatusCard from "./RoadmapStatusCard";

export default function RoadmapStatusSection({ roadmapSectionTitle }) {
  const { data } = useContext(DataContext);

  const roadmapSectionData = data?.filter(x => x.status == roadmapSectionTitle);

  const titleInfos = {
    "planned": {"info": "Ideas prioritized for research", "color": "#F49F85"},
    "in-progress": {"info": "Currently being developed", "color": "#AD1FEA"},
    "live": {"info": "Released features", "color": "#62BCFA"}
  }

  return (
    <>
      <div className="roadmap-status-section">
        <h3>{roadmapSectionTitle} ({roadmapSectionData.length})</h3>
        <p>{titleInfos[roadmapSectionTitle].title}</p>
        {
          roadmapSectionData?.map(x => <RoadmapStatusCard x={x} key={x.id} color={titleInfos[roadmapSectionTitle].color} />)
        }

      </div>
    </>
  )
}