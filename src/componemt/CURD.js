import React, {useState } from "react";

function CURD() {
  function handletitle(event){
    settitle(event.target.value)

  }
  const [title,settitle]=useState("")
 
  function submit(){  
    let data={title}
    fetch("http://localhost:8000/posts",{
      method:"POST",
      headers:{
        "Accept":"application/json",
        "content-type":"application/json"},
      body:JSON.stringify(data)
    }).then((res) => {
      console.log(res)
      alert("Item Added SuccessFully")
        
      }).catch((res) => {
        console.log(res);
      });
      settitle("")
    }
  
  
  return (
    <>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <strong><h1>Make A list</h1></strong>
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={title}
          onChange={handletitle}
        ></textarea>
      </div>
      <div>
        <button className="btn btn-primary"onClick={submit}>Add</button>
      </div>
    </>
  );
}

export default CURD;
