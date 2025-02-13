import { useParams } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../App";

export default function EditFeedback() {
  const { feedbackId } = useParams();

  const { data, setData } = useContext(DataContext);
  return (
    <>
     
    </>
  );
}
