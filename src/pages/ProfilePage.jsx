import React from "react";
import "../profile.css";
const ProfilePage = () => {
  return (
    <div className="container-profile">
      <img style={{ borderRadius: "50%", height: "190px" }} src="" alt="" />

      <h1>UserName</h1>
      <h5>Email</h5>

      {/*{!user && <h3>Зарегестрируйся</h3>}*/}
    </div>
  );
};

export default ProfilePage;
