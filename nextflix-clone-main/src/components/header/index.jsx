import { Link } from "react-router-dom";
import "./index.scss";
import { SearchOutlined, CloseOutlined } from "@ant-design/icons";
import { useState } from "react";
function Header() {

  const [showearch, setShowSearch] = useState(false);
  return (
    <header className="header">
      <div className={`header__search  ${showearch == true ? "active" : ""}`}>
        <input type="text" placeholder="Search Phim đây nè..."/>
        <CloseOutlined onClick={() => setShowSearch(false)} />
      </div>

      <div className="header__logo">
        <Link to={""}>
          <img
            src="https://th.bing.com/th/id/OIP.l3OV6YCiNCA0xOBNJA70zgHaEK?rs=1&pid=ImgDetMain"
            alt=""
            width={100}
          />
        </Link>
      </div>

      <nav className="header__nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Movies</Link>
          </li>
          <li>
            <Link to="/movie-management">Movie Management</Link>
          </li>
          <li onClick={() => setShowSearch(true) }>
            <SearchOutlined />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
