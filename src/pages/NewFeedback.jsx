import { useParams } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../App";
import { useState } from "react";

export default function NewFeedback() {
  const { feedbackId } = useParams();

  const { data, setData } = useContext(DataContext);

  const [feedback, setFeedback] = useState({
    title: "",
    category: "",
    detail: "",
  });

  const handleChange = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="create-new-feedback">
        <h2>Create New Feedback</h2>
        <form onSubmit={handleSubmit}>
          <div className="create-new-feedback-title">
            <h3>Feedback Title</h3>
            <p>Add a short, descriptive headline</p>
            <input
              name="title"
              value={feedback.title}
              onChange={handleChange}
              type="text"
            />
          </div>
          <div className="create-new-feedback-category">
            <h3>Category</h3>
            <p>Choose a category for your feedback</p>
            <select
              name="category"
              value={feedback.category}
              onChange={handleChange}
            >
              <option value="Feature">Feature</option>
              <option value="Feature">UI</option>
              <option value="Feature">UX</option>
              <option value="Feature">Enhancement</option>
              <option value="Feature">Bug</option>
            </select>
          </div>
          <div className="create-new-feedback-detail">
            <h3>Feedback Detail</h3>
            <p>
              Include any specific comments on what should be improved, added,
              etc.
            </p>
            <textarea
              name="newfeedback-message"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="create-new-feedback-btn">
            <button
              className="feedbackBtn-cancelBtn"
              onClick={() =>
                setFeedback({ title: "", category: "Feature", detail: "" })
              }
            >
              Cancel
            </button>
            <button>Add Feedback</button>
          </div>
        </form>
      </div>
    </>
  );
}
