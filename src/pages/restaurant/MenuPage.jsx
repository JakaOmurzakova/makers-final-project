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

const MenuPage = () => {
  const { dishes, getDishes } = useFoodContext();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    getDishes();
  }, [searchParams]);
  return (
    <div style={{ marginTop: "100px" }}>
      <Box>
        <MenuLiveSearch />
      </Box>
      <MenuFilter />
      <Grid container spacing={2} justifyContent="center" gap="25px">
        {dishes.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </Grid>
      <Box sx={{ width: "max-content", margin: "50px auto" }}>
        <MenuPagination />
      </Box>
      <Comment />
    </div>
  );
};

export default MenuPage;
