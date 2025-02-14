import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../App";
import { useState } from "react";
import GoBackBtn from "../components/GoBackBtn";

export default function NewFeedback() {
  const { data, setData } = useContext(DataContext);
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState({
    id: crypto.randomUUID(),
    title: "",
    category: "",
    detail: "",
    upvotes: 0,
    comments: [],
  });

  const handleChange = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFeedBack = {
      id: Number(data[data.length - 1].id) + 1,
      title: e.target.title.value,
      category: e.target.category.value.toLowerCase(),
      description: e.target.description.value,
      upvotes: 0,
      comments: [],
    }

    setFeedback(newFeedBack);
    setData([...data, newFeedBack]);

    navigate("/", { state: feedback });
  };

  return (
    <>
      <GoBackBtn url={'/'} />
      <div className="edit-feedback-page">
        <div className="feedback-newpage-main">
          <h2>Create New Feedback</h2>
          <form onSubmit={handleSubmit}>
            <div className="feedback-newpage-main-form">
              <div className="edit-feedback-form-cont">
                <h3>Feedback Title</h3>
                <p>Add a short, descriptive headline</p>
                <input
                  name="title"
                  value={feedback.title}
                  onChange={handleChange}
                  type="text"
                />
              </div>
              <div className="edit-feedback-form-cont">
                <h3>Category</h3>
                <p>Choose a category for your feedback</p>
                <select
                  name="category"
                  value={feedback.category}
                  onChange={handleChange}
                >
                  <option value="Feature">Feature</option>
                  <option value="UI">UI</option>
                  <option value="UX">UX</option>
                  <option value="Enhancement">Enhancement</option>
                  <option value="Bug">Bug</option>
                </select>
              </div>
              <div className="edit-feedback-form-cont">
                <h3>Feedback Detail</h3>
                <p>
                  Include any specific comments on what should be improved,
                  added, etc.
                </p>
                <textarea
                  name="description"
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="edit-feedback-btns-container">
                <button type="submit" className="addfeedback-btn">
                  Add Feedback
                </button>
                <button
                  className="feedback-btn"
                  onClick={() =>
                    setFeedback({ title: "", category: "Feature", detail: "" })
                  }
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
