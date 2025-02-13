import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { DataContext } from "../App";

export default function Home() {
  const { data } = useContext(DataContext);
  

  return (
    <>
    <header className="header">
     <div className="header-name">
     <h1>Frontend Mentor</h1>
     <h3>Feedback Board</h3>
     </div>
      <a href="#"><img src="images/hamburger.svg" alt="" /></a>
    </header>
    <div className="header-container">
      <label htmlFor="Sort by:">
        
      </label>
    </div>
  
    </>
  )
}