import { useParams } from "react-router-dom"
import { useContext } from "react"
import { DataContext } from "../App"

export default function FeedbackDetails() {
  const { feedbackId } = useParams()

  const { data, setData } = useContext(DataContext);

  console.log(data);
  
  return (
    <>
      <h1>{feedbackId}</h1>
    </>
  )
}