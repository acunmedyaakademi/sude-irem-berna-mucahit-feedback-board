import { useContext, useState, useEffect, useRef } from "react";
import { DataContext } from "../App";
import Suggestion from "../components/Suggestion";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [sortValue, setSortValue] = useState("most-upvotes");
  const { data } = useContext(DataContext);
  const navigate = useNavigate(); // bunun ile butona tıkladığımda newfeedback sayfasına yönlendireceğim.
  const [isMenuOpen, setIsOpenMenu] = useState(false);
  const [filter, setFilter] = useState("ALL");

  const dialogRef = useRef(null);

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

  const filteredData =
    filter === "ALL"
      ? sortedData
      : sortedData.filter(
          (x) => x.category.toLowerCase() === filter.toLowerCase()
        );

  // Eğer veri yoksa
  if (!data || data.length === 0) {
    return;
  }

  const openMenu = <img src="/images/hamburger.svg" />;
  const closeMenu = <img src="/images/close-img.svg" />;

  return (
    <div className="home-container">
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
              <button onClick={() => setFilter("ALL")}>ALL</button>
              <button onClick={() => setFilter("UI")}>UI</button>
              <button onClick={() => setFilter("UX")}>UX</button>
            </div>
            <div className="enhancement-bug">
              <button onClick={() => setFilter("Enhancement")}>
                Enhancement
              </button>
              <button onClick={() => setFilter("Bug")}>Bug</button>
            </div>
            <button onClick={() => setFilter("Feature")}>Feature</button>
          </div>
        </div>
        <div className="header-tablet-third">
          <div className="hamburger-roadmap">
            <div className="hamburger-roadmap-title">
              <h2>Roadmap</h2>
              <button
                className="roadmap-view"
                onClick={() => navigate("/roadmap")}
              >
                View
              </button>
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
            <div className="suggestion-img">
              <img src="/images/header-bottom.svg" alt="" />
              <h2>{filteredData.length} Suggestions</h2>
            </div>
            <div>
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
          </div>
          <button
            className="addFeedBackBtn"
            onClick={() => navigate("/new-feedback")}
          >
            + Add FeedBack
          </button>
        </div>
        <div className="suggestion-container">
          {filteredData.length === 0 ? (
            <div className="empty-feedback-container">
              <div className="empty-content">
                <img src="/images/no-feedback-img.svg" alt="" />
                <h3>There is no feedback yet.</h3>
                <p>
                  Got a suggestion? Found a bug that needs to be squashed? We
                  love hearing about new ideas to improve our app.
                </p>
                <button
                  className="addFeedBackBtn"
                  onClick={() => navigate("/new-feedback")}
                >
                  + Add Feedback
                </button>
              </div>
            </div>
          ) : (
            filteredData.map((x) => <Suggestion key={x.id} feedBack={x} />)
          )}
        </div>
        <dialog ref={dialogRef} className="hamburger-menu-dialog">
          <div className="hamburger-menu-container">
            <div className="hamburger-buttons">
              <div className="all-uı-ux">
                <button
                  onClick={() => {
                    setFilter("ALL");
                    dialogRef.current.close();
                  }}
                >
                  ALL
                </button>
                <button
                  onClick={() => {
                    setFilter("UI");
                    dialogRef.current.close();
                  }}
                >
                  UI
                </button>
                <button
                  onClick={() => {
                    setFilter("UX");
                    dialogRef.current.close();
                  }}
                >
                  UX
                </button>
              </div>
              <div className="enhancement-bug">
                <button
                  onClick={() => {
                    setFilter("Enhancement");
                    dialogRef.current.close();
                  }}
                >
                  Enhancement
                </button>
                <button
                  onClick={() => {
                    setFilter("Bug");
                    dialogRef.current.close();
                  }}
                >
                  Bug
                </button>
              </div>
              <button
                onClick={() => {
                  setFilter("Feature");
                  dialogRef.current.close();
                }}
              >
                Feature
              </button>
            </div>
            <div className="hamburger-roadmap">
              <div className="hamburger-roadmap-title">
                <h2>Roadmap</h2>
                <button
                  className="roadmap-view"
                  onClick={() => navigate("/roadmap")}
                >
                  View
                </button>
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
      </div>
    </div>
  );
}
