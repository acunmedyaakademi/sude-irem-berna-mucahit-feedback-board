import { useContext, useState } from "react";
import RoadmapHeader from "../components/RoadmapHeader.jsx";
import { DataContext } from "../App.jsx";
import RoadmapStatusSection from "../components/RoadmapStatusSection.jsx";

export default function Roadmap() {
  const [currentTab, setCurrentTab] = useState("planned")
  
  const tabs = {
    "planned": <RoadmapStatusSection roadmapSectionTitle={"planned"} />,
    "in-progress": <RoadmapStatusSection roadmapSectionTitle={"in-progress"} />,
    "live": <RoadmapStatusSection roadmapSectionTitle={"live"} />
  }
  
  return (
    <>
      <div className="roadmap-page">
        <RoadmapHeader />
        <div className="roadmap-section-container-desktop-tablet">
          <RoadmapStatusSection roadmapSectionTitle={"planned"} />
          <RoadmapStatusSection roadmapSectionTitle={"in-progress"} />
          <RoadmapStatusSection roadmapSectionTitle={"live"} />
        </div>
        {/* h3'e feedback sayısı eklenecek */}
        <div className="roadmap-section-container-mobile">
          <div className="roadmap-section-container-mobile-tab-header">
            <h3 className={currentTab == "planned" ? "roadmap-selected-tab roadmap-mobile-tab" : "roadmap-mobile-tab"} onClick={() => setCurrentTab("planned")}>Planned</h3>
            <h3 className={currentTab == "in-progress" ? "roadmap-selected-tab roadmap-mobile-tab" : "roadmap-mobile-tab"} onClick={() => setCurrentTab("in-progress")}>In-Progress</h3>
            <h3 className={currentTab == "live" ? "roadmap-selected-tab roadmap-mobile-tab" : "roadmap-mobile-tab"} onClick={() => setCurrentTab("live")}>Live</h3>
          </div>
          <div className="roadmap-section-mobile-tab">
            {tabs[currentTab]}
          </div>
        </div>

      </div>
    </>
  )
}