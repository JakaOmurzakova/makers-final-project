import React, { useEffect } from "react";
import { useHotelContext } from "../../contexts/HotelContext";
import { useSearchParams } from "react-router-dom";
import RoomItem from "../../components/hotelrooms/RoomItem";
import { Grid } from "@mui/material";

const RoomPage = () => {
  const { getRooms, rooms } = useHotelContext();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    getRooms();
  }, [searchParams]);
  return (
    <Grid container spacing={2} justifyContent="center">
      {rooms.map((item) => (
        <RoomItem key={item.id} item={item} />
      ))}
    </Grid>
  );
};

export default RoomPage;
