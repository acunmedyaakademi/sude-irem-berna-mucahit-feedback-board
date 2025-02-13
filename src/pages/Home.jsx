import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { DataContext } from "../App";

export default function Home() {
  const { data } = useContext(DataContext);
  console.log(data)



  return (
    <>
    <Link to={`/feedback-details/1`}>id 1</Link>
    <Outlet />
    </>
  )
}