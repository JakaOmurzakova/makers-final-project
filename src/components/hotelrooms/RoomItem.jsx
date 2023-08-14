import React from "react";
import "../../roomStyleCard.css";
import { Button } from "@mui/material";
import { useHotelContext } from "../../contexts/HotelContext";
import { useNavigate, useParams } from "react-router-dom";

const RoomItem = ({ item }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { deleteRoom } = useHotelContext();
  return (
    <div>
      <div className="card-container">
        <div className="card-block">
          <div className="img-content">
            <img src="https://static.tildacdn.com/tild3937-3336-4038-b465-653534623538/8380536.jpg" />
          </div>
          <div className="content">
            <p className="heading">{item.name}</p>
            <p>{item.description}</p>
            <div>
              <Button onClick={() => navigate(`/room-detail/${id}`)}>
                DETAILS
              </Button>
            </div>
            <div>
              <Button onClick={() => deleteRoom(`${item.id}`)}>DELETE</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomItem;
