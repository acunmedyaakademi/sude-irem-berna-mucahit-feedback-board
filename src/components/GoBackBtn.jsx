import { useNavigate } from "react-router-dom";

export default function GoBackBtn({ url }){

  const navigate = useNavigate();

  function handleClick(){
    navigate(url);
  }

  return(
    <>
      <div className="go-back-btn" onClick={handleClick}>
        <img src="/images/arrow-left.svg"/>
        <p>Go Back</p>
      </div>
    </>
  )
}