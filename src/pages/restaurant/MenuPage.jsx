import React from "react";
import MenuItem from "../../components/restuarant/MenuItem";
import { useEffect } from "react";
import { useFoodContext } from "../../contexts/FoodContext";
import { useSearchParams } from "react-router-dom";
import { Grid } from "@mui/material";
import MenuFilter from "../../components/restuarant/MenuFilter";

const MenuPage = () => {
  const { dishes, getDishes } = useFoodContext();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    getDishes();
  }, [searchParams]);
  return (
    <div style={{ marginTop: "100px" }}>
      <MenuFilter />
      <Grid container spacing={2} justifyContent="center" gap="25px">
        {dishes.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </Grid>
    </div>
  );
};

export default MenuPage;
