export default function EditFeedbackBtn({ navigate, feedbackId }){
  return(
    <>
      <div className="edit-feedback-btn" onClick={() => navigate(`/edit-feedback/${feedbackId}`)}>
        Edit Feedback
      </div>
    </>
  )
}