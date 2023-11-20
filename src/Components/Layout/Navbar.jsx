// @ts-nocheck
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const { currentUser, logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Successfully Logged Out");
      })
      .catch(() => {
        toast.error("Logout Action Failed");
      });
  };
  return (
    <div className="w-full max-w-[1250px] px-[25px] mx-auto">
      <div className="flex-none lg:hidden">
        <label
          htmlFor="my-drawer-3"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>

      <div className="flex-1 text-xl font-bold">
        <Link to="/">TasteHarmony Cafe</Link>
      </div>

      <div className="hidden lg:flex items-center gap-2">
        {" "}
        {/* This will be displayed on larger screens */}
        {/* Navbar menu content here */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "btn btn-outline bg-[#C59D5F] text-white btn-sm"
              : "btn btn-ghost btn-sm"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/allfooditems"
          className={({ isActive }) =>
            isActive
              ? "btn btn-outline bg-[#C59D5F] text-white btn-sm"
              : "btn btn-ghost btn-sm"
          }
        >
          Foods
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive
              ? "btn btn-outline bg-[#C59D5F] text-white btn-sm"
              : "btn btn-ghost btn-sm"
          }
        >
          Blogs
        </NavLink>
        {currentUser?.email ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="cursor-pointer">
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img src={currentUser.photoURL} alt="User Avatar" />
                </div>
              </div>
            </label>
            <div
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavLink
                to="/user/addedfooditems"
                className="px-4 py-2 hover:bg-base-300 rounded-lg"
              >
                My Foods
              </NavLink>
              <NavLink
                to="/user/addfood"
                className="px-4 py-2 hover-bg-base-300 rounded-lg"
              >
                Add Food
              </NavLink>
              <NavLink
                to="/user/orders"
                className="px-4 py-2 hover:bg-base-300 rounded-lg"
              >
                Orders
              </NavLink>

              <div
                onClick={handleLogOut}
                className="cursor-pointer text-red-500 px-4 py-2 hover:bg-base-300 rounded-lg"
              >
                Logout
              </div>
            </div>
          </div>
        ) : (
          <>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "btn bg-[#C59D5F] btn-sm" : "btn btn-ghost btn-sm"
              }
            >
              Login
            </NavLink>
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img
                  src="https://i.ibb.co/bLrMRXp/user.png"
                  alt="User Avatar"
                />
              </div>
            </div>
          </>
        )}
      </div>

      <div className="lg:hidden">
        {" "}
        {/* This will be displayed on smaller screens */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="cursor-pointer">
            <div className="avatar">
              <div className="w-10 rounded-full">
                {currentUser?.email ? (
                  <img src={currentUser.photoURL} alt="User Avatar" />
                ) : (
                  <img
                    src="https://i.ibb.co/bLrMRXp/user.png"
                    alt="User Avatar"
                  />
                )}
              </div>
            </div>
          </label>
          <div
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            {currentUser?.email ? (
              <>
                <NavLink
                  to="/user/addedfooditems"
                  className="px-4 py-2 hover:bg-base-300 rounded-lg"
                >
                  My Foods
                </NavLink>
                <NavLink
                  to="/user/addfood"
                  className="px-4 py-2 hover:bg-base-300 rounded-lg"
                >
                  Add Food
                </NavLink>
                <NavLink
                  to="/user/orders"
                  className="px-4 py-2 hover:bg-base-300 rounded-lg"
                >
                  Orders
                </NavLink>
                <div
                  onClick={handleLogOut}
                  className="cursor-pointer text-red-500 px-4 py-2 hover:bg-base-300 rounded-lg"
                >
                  Logout
                </div>
              </>
            ) : (
              <NavLink
                to="/login"
                className="px-4 py-2 hover:bg-base-300 rounded-lg"
              >
                Login
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
