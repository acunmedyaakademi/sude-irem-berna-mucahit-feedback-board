import { useContext, useEffect, useState } from "react"
import { Link, Outlet, useNavigate, useParams } from "react-router-dom"
import { DataContext } from "../App.jsx"
import GoBackBtn from "../components/GoBackBtn.jsx";

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
    navigate("/home")
    console.log(data)
  }

  console.log(currentFeedback)


  return (
    <>
      <div className="edit-feedback-page">
        <GoBackBtn />
        <div className="edit-feedback-main-cont">
          <img src="/images/edit-icon.svg" alt="Edit Icon" />
          <h2>Editing ‘{currentFeedback?.title}’</h2>
          <div className="edit-feedback-form-cont">
            <form onSubmit={handleEditFormSubmit}>
              <input type="text" name="title" defaultValue={currentFeedback?.title} />
              <select name="category">
                {categories.map((x) => (
                  <option key={x} value={x} selected={currentFeedback?.category == x.toLowerCase()}>
                    {x}
                  </option>
                ))}
              </select>
              <select name="status">
                {
                  statuses.map(x =>
                    <option key={x} value={x} selected={currentFeedback?.status == x.toLowerCase()}>
                      {x}
                    </option>)
                }
              </select>
              <textarea name="description" defaultValue={currentFeedback?.description} rows="4"></textarea>
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
