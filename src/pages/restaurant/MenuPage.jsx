import React from "react";
import MenuItem from "../../components/restuarant/MenuItem";
import { useEffect } from "react";
import { useFoodContext } from "../../contexts/FoodContext";
import { useSearchParams } from "react-router-dom";
import { Grid } from "@mui/material";

const MenuPage = () => {
  const { dishes, getDishes } = useFoodContext();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    getDishes();
  }, [searchParams]);
  return (
    <div>
      <Grid container spacing={2} justifyContent="center" gap="15px">
        {dishes.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </Grid>
    </div>
  );
};

export default MenuPage;
