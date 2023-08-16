import React, { useEffect } from "react";
import { useHotelContext } from "../../contexts/HotelContext";
import { useSearchParams } from "react-router-dom";
import RoomItem from "../../components/hotelrooms/RoomItem";
import { Box, Grid } from "@mui/material";
import RoomFilter from "../../components/hotelrooms/RoomFilter";
import RoomPagination from "../../components/hotelrooms/RoomPagination";
import RoomLiveSearch from "../../components/hotelrooms/RoomLiveSearch";

const CottagePage = () => {
  const { getRooms, rooms } = useHotelContext();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    getRooms();
  }, [searchParams]);
  return (

    <div
      style={{
        marginTop: "100px",
        marginBottom: "60px",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
      }}
    >

    <div style={{ marginTop: "100px", marginBottom: "60px" }}>
      <Box>
        <RoomLiveSearch />
      </Box>

      <RoomFilter />
      <Grid container spacing={2} justifyContent="center" gap="15px">
        {rooms.map((item) => (
          <RoomItem item={item} key={item.id} />
        ))}
      </Grid>
      <Box sx={{ width: "max-content", margin: "50px auto" }}>
        <RoomPagination />
      </Box>
    </div>
  );
};
export default CottagePage;
