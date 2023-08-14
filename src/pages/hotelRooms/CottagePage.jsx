import React, { useEffect } from "react";
import { useHotelContext } from "../../contexts/HotelContext";
import { useSearchParams } from "react-router-dom";
import RoomItem from "../../components/hotelrooms/RoomItem";
import { Grid } from "@mui/material";

const CottagePage = () => {
  const { getRooms, rooms } = useHotelContext();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    getRooms();
  }, [searchParams]);
  return (
    <Grid
      sx={{ marginTop: "100px", marginBottom: "60px" }}
      container
      spacing={2}
      justifyContent="center"
      md={8}
      gap="15px"
    >
      {rooms.map((item) => (
        <RoomItem item={item} key={item.id} />
      ))}
    </Grid>
  );
};
export default CottagePage;