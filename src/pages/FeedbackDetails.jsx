import { useParams } from "react-router-dom"

export default function FeedbackDetails() {
  const { feedbackId } = useParams()
  
  return (
    <>
      <h1>{feedbackId}</h1>
    </>
  )
}