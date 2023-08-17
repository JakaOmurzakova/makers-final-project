import React from "react";
import MenuItem from "../../components/restuarant/MenuItem";
import { useEffect } from "react";
import { useFoodContext } from "../../contexts/FoodContext";
import { useSearchParams } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import MenuFilter from "../../components/restuarant/MenuFilter";
import MenuPagination from "../../components/restuarant/MenuPagination";
import MenuLiveSearch from "../../components/restuarant/MenuLiveSearch";
import Comment from "../../components/Comment";
import "../../menuStyleCard.css";

const MenuPage = () => {
  const { dishes, getDishes } = useFoodContext();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    getDishes();
  }, [searchParams]);
  return (
    <div
      className="menuPage_container"
      style={{ marginTop: "100px", height: "100%" }}
    >
      <Box>
        <MenuLiveSearch />
      </Box>
      <MenuFilter />
      <Grid container spacing={2} justifyContent="center" gap="25px">
        {dishes.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </Grid>
      <Box
        sx={{ margin: "100px 0", display: "flex", justifyContent: "center" }}
      >
        <MenuPagination />
      </Box>
      <Comment />
    </div>
  );
};

export default MenuPage;
