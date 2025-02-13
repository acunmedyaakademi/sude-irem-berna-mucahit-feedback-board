import { useState } from "react";
import AddComment from "./AddComment";
import Comments from "./Comments";

export default function CommentsContainer({ selectedFeedback, currentUser }){

  const [ comments, setComments] = useState([...selectedFeedback?.comments]);


  return(
    <>
      <Comments comments={comments} setComments={setComments} currentUser={currentUser} />
      <AddComment comments={comments} setComments={setComments} currentUser={currentUser} />
    </>
  )
}