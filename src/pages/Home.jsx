import { useContext, useState, useEffect, useRef } from "react";
import { DataContext } from "../App";
import Suggestion from "../components/Suggestion";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [sortValue, setSortValue] = useState("most-upvotes");
  const { data } = useContext(DataContext);
  const navigate = useNavigate(); // bunun ile butona tıkladığımda newfeedback sayfasına yönlendireceğim.
  const [isMenuOpen, setIsOpenMenu] = useState(false);

  const dialogRef = useRef(null)

  const toggleMenu = () => {
    setIsOpenMenu(!isMenuOpen);

    if (!isMenuOpen) {
      dialogRef.current.showModal(); 
    } else {
      dialogRef.current.close();
    }
  };

  // Sıralama işlemi yaptım
  const sortedData = [...data].sort(
    sortValue.includes("upvotes")
      ? sortValue === "most-upvotes"
        ? (a, b) => b.upvotes - a.upvotes
        : (a, b) => a.upvotes - b.upvotes
      : sortValue === "most-comments"
      ? (a, b) => b.comments - a.comments
      : (a, b) => a.comments - b.comments
  );

  // Eğer veri yoksa 
  if (!data || data.length === 0) {
    return ;
  }

  const openMenu = <img src="/images/hamburger.svg" />;
  const closeMenu = <img src="/images/close-img.svg" />;



  return (
    <>
      <header className="header">
        <div className="header-name">
          <h1>Frontend Mentor</h1>
          <h3>Feedback Board</h3>
        </div>
        <button className="hamburger-btn" onClick={toggleMenu}>
        {isMenuOpen ? closeMenu : openMenu}
        </button>
      </header>
      <div className="header-container">
        <div className="header-bottom">
          <div className="filter-content">
            <label htmlFor="sort">Sort by:</label>
            <select
              className="sort"
              value={sortValue}
              onChange={(e) => setSortValue(e.target.value)}
            >
              <option value="most-upvotes">Most Upvotes</option>
              <option value="least-upvotes">Least Upvotes</option>
              <option value="most-comments">Most Comments</option>
              <option value="least-comments">Least Comments</option>
            </select>
          </div>
          <button onClick={() => navigate('/new-feedback') }>+ Add FeedBack</button>
        </div>
      </div>
      <div className="suggestion-container">
      {data.length === 0 ? (
        <div className="empty-feedback-container">
          <div className="empty-content">
            <img src="/images/no-feedback-img.svg" alt="" />
            <h3>There is no feedback yet.</h3>
            <p>
              Got a suggestion? Found a bug that needs to be squashed? We love
              hearing about new ideas to improve our app.
            </p>
            <button onClick={() => navigate("/new-feedback")}>
              + Add Feedback
            </button>
          </div>
        </div>
      ) : (
        sortedData.map((x) => <Suggestion key={x.id} feedBack={x} />)
      )}
    </div>
    <dialog ref={dialogRef} className="hamburger-menu-dialog">
        <div className="hamburger-menu-container">
          <div className="hamburger-buttons">
            <button>ALL</button>
            <button>UI</button>
            <button>UX</button>
            <button>Enhancement</button>
            <button>Bug</button>
            <button>Feature</button>
          </div>
          <div className="hamburger-roadmap">
          <div className="hamburger-roadmap-title">
            <h2>Roadmap</h2>
            <button onClick={() => navigate('/roadmap')}>view</button>
          </div>
          <div className="hamburger-roadmap-section">
            <li>Planned</li>
            <li>In-Progress</li>
            <li>Live</li>
          </div>
          </div>
        </div>
    </dialog>
    </>
  );
}