import React, { useEffect } from "react";
import { useHotelContext } from "../../contexts/HotelContext";
import { useSearchParams } from "react-router-dom";
import RoomItem from "../../components/hotelrooms/RoomItem";
import { Grid } from "@mui/material";
import RoomFilter from "../../components/hotelrooms/RoomFilter";

const CottagePage = () => {
  const { getRooms, rooms } = useHotelContext();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    getRooms();
  }, [searchParams]);
  return (
    <div style={{ marginTop: "100px", marginBottom: "60px" }}>
      <RoomFilter />
      <Grid container spacing={2} justifyContent="center" gap="15px">
        {rooms.map((item) => (
          <RoomItem item={item} key={item.id} />
        ))}
      </Grid>
    </div>
  );
};
export default CottagePage;
