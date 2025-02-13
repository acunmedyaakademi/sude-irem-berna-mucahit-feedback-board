export default function GoBackBtn(){

  function handleClick(){
    window.history.back();
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