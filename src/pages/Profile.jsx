import React, { useContext } from "react";
import { Context } from "../main";
import Loader from "../components/Loader";

const Profile = () => {
  const { isAuthenticated, loading, user } = useContext(Context);

  return loading ? (
    <Loader />
  ) : (
    <div className="profile">
      <h1>Name : {user?.name}</h1>
      <p>Email : {user?.email}</p>
    </div>
  );
};

export default Profile;
