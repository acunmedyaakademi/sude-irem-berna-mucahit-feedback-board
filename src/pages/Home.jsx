import { Link, Outlet } from "react-router-dom";

export default function Home() {

  return (
    <>
    <Link to={`/feedback-details/1`}>id 1</Link>
    <Outlet />
    <br />
    <Link to={`/roadmap`}>r</Link>
    <Outlet />
    </>
  )
}