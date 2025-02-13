import { useNavigate, useParams } from "react-router-dom"
import { useContext } from "react"
import { DataContext } from "../App.jsx"
import GoBackBtn from "../components/GoBackBtn";
import EditFeedbackBtn from "../components/EditFeedbackBtn";
import Suggestion from "../components/Suggestion";
import CommentsContainer from "../components/detailPageComponents/CommentsContainer.jsx";

export default function FeedbackDetails() {
  const { data, currentUser } = useContext(DataContext);
  const { feedbackId } = useParams();
  const navigate = useNavigate();

  if(!data || data.length === 0){
    return;
  }

  const selectedFeedback = data?.find(x => x.id === Number(feedbackId));

  return (
    <div className="feedback-details-container">
      <div className="detail-buttons-container">
        <GoBackBtn />
        <EditFeedbackBtn navigate={navigate} feedbackId={feedbackId} />
      </div>
      <Suggestion feedBack={selectedFeedback} />
      <CommentsContainer selectedFeedback={selectedFeedback} currentUser={currentUser} />
    </div>
  )
}