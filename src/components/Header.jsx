import { Link } from "react-router-dom";
import { Context, server } from "../main";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";

const Header = () => {
  const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
    useContext(Context);
  const logoutHandler = async () => {
    setLoading(true);
    try {
      await axios.get(`${server}/users/logout`, {
        withCredentials: true,
      });
      toast.success("Logged Out !!!!");
      setIsAuthenticated(false);
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);

      setIsAuthenticated(true);
      setLoading(false);
    }
  };

  return (
    <nav className="header">
      <div>
        <h2>Your  Todo 🌝📃👇 </h2>
      </div>

      <article>
        <Link to={"/"}>Home</Link>
        <Link to={"/Profile"}>Profile</Link>
        {isAuthenticated ? (
          <button disabled={loading} onClick={logoutHandler} className="btn">
            Logout
          </button>
        ) : (
          <Link to={"/login"}>Login</Link>
        )}
      </article>
    </nav>
  );
};

export default Header;
