import { useParams } from "react-router-dom"
import { useContext } from "react"
import { DataContext } from "../App.jsx"
import GoBackBtn from "../components/GoBackBtn";
import EditFeedbackBtn from "../components/EditFeedbackBtn";
import Suggestion from "../components/Suggestion";

export default function FeedbackDetails() {
  const { data, setData } = useContext(DataContext);
  const { feedbackId } = useParams();

  console.log(data);
  console.log(feedbackId)

  if(!data || data.length === 0){
    return;
  }

  const selectedFeedback = data.find(x => x.id === Number(feedbackId));

  // if(data !== undefined){
  //   console.log(data.find(x => x.id == Number(feedbackId)))
  // }

  
  return (
    <div className="feedback-details-container">
      <div className="detail-buttons-container">
        <GoBackBtn />
        <EditFeedbackBtn />
      </div>
      <Suggestion feedBack={selectedFeedback} />
    </div>
  )
}