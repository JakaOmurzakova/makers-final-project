import React from "react";
import MenuItem from "../../components/restuarant/MenuItem";
import Comment from "../../components/Comment";

const MenuPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <MenuItem />
      <Comment />
    </div>
  );
};

export default MenuPage;
