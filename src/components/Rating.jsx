import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { BASE_URL } from "../utils/consts";
import { useParams } from "react-router";
import { useEffect } from "react";

export default function BasicRating() {
  const [value, setValue] = React.useState(2);
  const { id } = useParams();

  async function addRating(newValue) {
    try {
      await axios(`${BASE_URL}hotels/${id}`);
    } catch (e) {
      console.log(e);
    }
    getRating();
  }

  async function getRating(id) {
    try {
      const { data } = await axios.get(`${BASE_URL}hotels/${id}`);
      setValue(data.rating);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
}
