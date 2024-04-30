import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut().then().catch();
  };
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/AllArtCraftItems">All Art & craft Items</NavLink>
      </li>
      <li>
        <NavLink to="/AddCraftItem">Add Craft Item</NavLink>
      </li>
      <li>
        <NavLink to="/MyArtCraftList">My Art&Craft List</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register"> Register</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <div className="w-7 h-7">
            <img
              src="https://i.ibb.co/DRHMrbf/9859772-craft-wood-chisel-statue-sculpture-icon.pnghttps://i.ibb.co/XbznGHw/9859772-craft-wood-chisel-statue-sculpture-icon-1.png"
              alt=""
            />
          </div>

          <a className=" text-xl font-bold">Craftopia Haven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>

        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar tooltip tooltip-left"
              data-tip={user?.displayName ?? "Hello"}
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={
                    user?.photoURL ??
                    "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  }
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              {user ? (
                <button onClick={handleSignOut} className="btn">
                  SIGN OUT
                </button>
              ) : (
                "In"
              )}
            </ul>
          </div>
          {user ? (
            <button onClick={handleSignOut} className="btn">
              SIGN OUT
            </button>
          ) : (
            <Link to="/login">
              <button className="btn">LOGIN</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
