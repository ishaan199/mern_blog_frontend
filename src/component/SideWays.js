import {Link} from 'react-router-dom';
import Cookies from 'js-cookie';

const SideWays = () => {


    const userId = Cookies.get('userId')
    console.log(userId)
    return (
      <div className="sideWays">
        <div className="side-container">
          {/* <img src="" alt="Image" /> */}
        </div>
        <div className="side-buttons">
          <Link to={`/profile/${userId}`}>
            <button className="buttons">profile</button>
          </Link>
          <Link to="/write">
            <button className="buttons">Write Post</button>
          </Link>
          <Link to="/logout">
            <button className="buttons">Logout</button>
          </Link>
          <Link to="/about">
            <button className="buttons">about</button>
          </Link>
        </div>
      </div>
    );
};

export default SideWays;