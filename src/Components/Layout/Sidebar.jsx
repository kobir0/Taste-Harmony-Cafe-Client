// @ts-nocheck
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-2">
      {/* Navbar menu content here */}
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "btn btn-primary " : "btn btn-ghost "
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/allfooditems"
        className={({ isActive }) =>
          isActive ? "btn btn-primary " : "btn btn-ghost "
        }
      >
        All-Food-Items
      </NavLink>
      <NavLink
        to="/blog"
        className={({ isActive }) =>
          isActive ? "btn btn-primary " : "btn btn-ghost "
        }
      >
        Blogs
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive ? "btn btn-primary " : "btn btn-ghost "
        }
      >
        Login
      </NavLink>
    </div>
  );
};

export default Sidebar;
