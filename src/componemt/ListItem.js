import React, { useEffect, useState } from "react";

function ListItem() {
  const [task, settask] = useState(null);
  useEffect(() => {
    fetch("http://localhost:8000/posts")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log("res", res);
        settask(res);
      })
      .catch((res) => {
        console.log(res);
      });
  }, []);
  function onedit(id) {
    settask(task)
    fetch("http://localhost:8000/posts/"+id).then((res)=>{
      return res.json()
    }).then((res) => {
        console.log("userdata", res);
        // settask(res);
      })
      .catch((res) => {
        console.log(res);
      });
  }
  function onDelete(id) {
    console.log(id);
  }
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">List Of Item</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {task &&
            task.map((res) => (
              <tr key={res.id}>
                <td>{res.id}</td>
                <td>{res.title}</td>
                <td>
                  <button
                    className="btn btn-primary mx-3"
                    onClick={() => {
                      onedit(res.id);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-primary mx-3"
                    onClick={() => {
                      onDelete(res.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListItem;
