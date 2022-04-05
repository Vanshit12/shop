import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Stock Update</Link>
          </li>
          <li>
            <Link to="/blogs">Shop Analysis</Link>
          </li>
          <li>
            <Link to="/contact">Add Entry</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;