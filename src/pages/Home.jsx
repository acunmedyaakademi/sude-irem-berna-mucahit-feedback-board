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
      <div className="header-tablet">
        <div className="header-tablet-first">
        <div className="header-name">
          <h1>Frontend Mentor</h1>
          <h3>Feedback Board</h3>
        </div>
        </div>
        <div className="header-tablet-second">
        <div className="hamburger-buttons">
          <div className="all-uı-ux">
            <button>ALL</button>
              <button>UI</button>
              <button>UX</button>
            </div>
            <div className="enhancement-bug">
              <button>Enhancement</button>
              <button>Bug</button>
            </div>
            <button>Feature</button>
          </div>
        </div>
        <div className="header-tablet-third">
        <div className="hamburger-roadmap">
          <div className="hamburger-roadmap-title">
            <h2>Roadmap</h2>
            <button className="roadmap-view" onClick={() => navigate('/roadmap')}>View</button>
          </div>
          <div className="hamburger-roadmap-section">
            <div className="roadmap-list">
              <li>Planned</li>
              <span>2</span>
            </div>
            <div className="roadmap-list">
              <li>In-Progress</li>
              <span>3</span>
            </div>
            <div className="roadmap-list">
              <li>Live</li>
              <span>1</span>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className="header-container">
        <div className="header-bottom">
          <div className="filter-content">
            <label htmlFor="sort">Sort by : </label>
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
          <button className="addFeedBackBtn" onClick={() => navigate('/new-feedback') }>+ Add FeedBack</button>
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
          <div className="all-uı-ux">
            <button>ALL</button>
              <button>UI</button>
              <button>UX</button>
            </div>
            <div className="enhancement-bug">
              <button>Enhancement</button>
              <button>Bug</button>
            </div>
            <button>Feature</button>
          </div>
          <div className="hamburger-roadmap">
          <div className="hamburger-roadmap-title">
            <h2>Roadmap</h2>
            <button className="roadmap-view" onClick={() => navigate('/roadmap')}>View</button>
          </div>
          <div className="hamburger-roadmap-section">
            <div className="roadmap-list">
              <li>Planned</li>
              <span>2</span>
            </div>
            <div className="roadmap-list">
              <li>In-Progress</li>
              <span>3</span>
            </div>
            <div className="roadmap-list">
              <li>Live</li>
              <span>1</span>
            </div>
          </div>
          </div>
        </div>
    </dialog>
    </>
  );
}