import { useContext, useEffect, useState } from "react"
import { Link, Outlet, useNavigate, useParams } from "react-router-dom"
import { DataContext } from "../App.jsx"
import GoBackBtn from "../components/GoBackBtn.jsx";

// id
export default function EditFeedback() {
  const [currentFeedback, setCurrentFeedback] = useState()
  const { data, setData } = useContext(DataContext);
  const { feedbackId } = useParams();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const navigate = useNavigate()

  useEffect(() => {
    if (data) {
      const foundFeedback = data.find(x => x.id == feedbackId);
      console.log(foundFeedback);
      setCurrentFeedback(foundFeedback);
      if (foundFeedback) {
        setSelectedCategory(foundFeedback.category); 
        setSelectedStatus(foundFeedback.status);
      }
    }
  }, [data, feedbackId]); 

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
      description: formObj.description,
      comments: currentFeedback.comments
    };

    const updatedData = data.map(feedback => feedback.id == currentFeedback.id ? updatedFeedback : feedback);
    if(formObj.title.trim() !== '' || formObj.description.trim() !== ''){
      setData(updatedData);
      navigate(`/feedback-details/${currentFeedback.id}`);
    }
  }

  function handleDelete() {
    if(confirm("Are you sure you want to delete this feedback?")){
      setData(data.filter(x => x.id != feedbackId));
      navigate("/");
    }
  }

  return (
    <>
      <div className="edit-feedback-page">
        <GoBackBtn url={`/feedback-details/${feedbackId}`} />
        <div className="feedback-newpage-main">
          <img src="/images/edit-icon.svg" alt="Edit Icon" />
          <h2>Editing ‘{currentFeedback?.title}’</h2>
          <div className="edit-feedback-form-cont">
            <form onSubmit={handleEditFormSubmit}>
              <input type="text" name="title" defaultValue={currentFeedback?.title} />
              <select name="category" value={(selectedCategory || '').charAt(0).toUpperCase() + (selectedCategory || '').slice(1)} onChange={(e) => setSelectedCategory(e.target.value)}>
                {categories.map((x) => (
                  <option key={x} value={x}>
                    {x}
                  </option>
                ))}
              </select>
              <select name="status" value={(selectedStatus || '').charAt(0).toUpperCase() + (selectedStatus || '').slice(1)} onChange={(e) => setSelectedStatus(e.target.value)}>
                {
                  statuses.map(x =>
                    <option key={x} value={x}>
                      {x}
                    </option>)
                }
              </select>
              <textarea name="description" defaultValue={currentFeedback?.description} rows="4"></textarea>
              <div className="edit-feedback-btns-container edit-page">
                <div className="edit-feedback-btns-container-wrapper">
                  <button className="addfeedback-btn" type="submit">Save Changes</button>
                  <Link className="feedback-btn" to={`/feedback-details/${feedbackId}`}>Cancel</Link>
                  <Outlet />
                </div>
                <button onClick={handleDelete} type="button" className="delete-btn">Delete</button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </>
  );
}
