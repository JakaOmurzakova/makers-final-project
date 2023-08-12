import React from "react";
import { useHotelContext } from "../../contexts/HotelContext";
import { useAuthContext } from "../../contexts/AuthContext";
import { useNavigate, useParams } from "react-router-dom";

const Details = ({ item }) => {
  const { user } = useAuthContext();
  const { oneRoom } = useHotelContext();
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <div>{item.description}</div>
    </div>
  );
};

export default Details;
