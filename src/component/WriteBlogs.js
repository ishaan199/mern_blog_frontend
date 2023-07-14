import {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
function WriteBlogs() {
    const [update,setUpdate] = useState({
        title:"",
        description:"",
    });
    console.log(update)
    const createHandleClick = async () => {
        await axios.post(
          "http://localhost:4000/create/blog/64acd3e66018172b32b92a70",
          update
        )
          .then((result) => {
            console.log(result);
          })
          .catch((err) => {
            console.log(err.message);
          });
    }

  return (
    <div className="write-container">
      <div className="title-textarea">
        <h1>Title : </h1>
        <input
          className="title"
          name="title"
          id=""
          cols="30"
          rows="2"
          onChange={(e) => {
            setUpdate({ ...update, title: e.target.value });
          }}
        ></input>
      </div>
      <div className="description-textarea">
        <h1>Description : </h1>
        <textarea
          className="des"
          name="description"
          id=""
          cols="60"
          rows="10"
          onChange={(e) => {
            setUpdate({ ...update, description: e.target.value });
          }}
        ></textarea>
      </div>
      <div>
        <button onClick={createHandleClick}>Create</button>
        <Link to="/home">
          <button>home</button>
        </Link>
        <Link to="/profile">
          <button>profile</button>
        </Link>
      </div>
    </div>
  );
}

export default WriteBlogs
