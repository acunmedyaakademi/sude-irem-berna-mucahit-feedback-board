import { useContext, useEffect, useState } from "react"
import { Link, Outlet, useNavigate, useParams } from "react-router-dom"
import { DataContext } from "../App.jsx"

// id
export default function EditFeedback() {
  const [currentFeedback, setCurrentFeedback] = useState()
  const { data, setData } = useContext(DataContext);
  const { feedbackId } = useParams();

  const navigate = useNavigate()

  useEffect(() => {
    data ? setCurrentFeedback(data.find(x => x.id == feedbackId)) : ""
  }, [data])

  const categories = ["UI", "UX", "Enhancement", "Bug", "Feature"];
  const statuses = ["Suggestion", "Planned", "In-Progress", "Live"];

  function handleEditFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObj = Object.fromEntries(formData);
    const updatedFeedback = {
      id: currentFeedback.id,
      title: formObj.title,
      category: formObj.category,
      status: formObj.status,
      description: formObj.description
    };

    const updatedData = data.map(feedback => feedback.id == currentFeedback.id ? updatedFeedback : feedback);
    setData(updatedData);
    console.log(data)

  }

  function handleDelete() {
    setData(data.filter(x => x.id != feedbackId))
    navigate("/")
    console.log(data)
  }

  return (
    <>
      <div className="edit-feedback-page">
        <Link to={`/feedback-details/${feedbackId}`}>Go back</Link>
        <div className="edit-feedback-main-cont">
          <h2>Editing ‘{currentFeedback?.title}’</h2>
          <div className="edit-feedback-form-cont">
            <form onSubmit={handleEditFormSubmit}>
              <input type="text" name="title" defaultValue={currentFeedback?.title} />
              <select name="category" defaultValue={currentFeedback?.category || categories[0]}>
                {categories.map((x) => (
                  <option key={x} value={x}>
                    {x}
                  </option>
                ))}
              </select>
              <select name="status" defaultValue={currentFeedback?.category || categories[0]}>
                {
                  statuses.map(x =>
                    <option key={x} value={x}>
                      {x}
                    </option>)
                }
              </select>
              <input type="text" name="description" defaultValue={currentFeedback?.description} />
              <div className="edit-feedback-btns-container">
                <button onClick={handleDelete} type="button" className="delete-btn">Delete</button>
                <Link className="feedback-btn" to={`/feedback-details/${feedbackId}`}>Cancel</Link>
                <Outlet />
                <button type="submit">Add Feedback</button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </>
  );
}
