import React from "react";

const RoomItem = ({ item }) => {
  return (
    <div>
      <div>{item.name}</div>

      <div>{item.description}</div>
    </div>
  );
};

export default RoomItem;
