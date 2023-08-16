import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useFoodContext } from "../../contexts/FoodContext";
import { useNavigate, useParams } from "react-router-dom";

const defaultTheme = createTheme();

export default function EditProductPage() {
  const { editDish, getOneDish, getCategories, oneDish, categories } =
    useFoodContext();
  const { id } = useParams();
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    title: "",

    category: "",
    image_product: "",
    price: "",
  });

  useEffect(() => {
    getCategories();
    getOneDish(id);
  }, []);

  useEffect(() => {
    if (oneDish) {
      setFormValue({ ...oneDish, image: "" });
    }
  }, [oneDish]);

  useEffect(() => {
    getOneDish(id);
  }, []);

  //useEffect(() => {
  //  if (dish) {
  //    setFormValue(dish);
  //  }
  //}, [dish]);

  function handleChange(e) {
    if (e.target.name === "image") {
      setFormValue({
        ...formValue,
        image: e.target.files[0],
      });
    } else {
      setFormValue({
        ...formValue,
        [e.target.name]: e.target.value,
      });
    }
  }
  //function handleChange(e) {
  //  setFormValue({ ...formValue, [e.target.name]: e.target.value });
  //}

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !formValue.title.trim() ||
      !formValue.description.trim() ||
      !formValue.price
    ) {
      return;
    }

    console.log(formValue);

    const data = new FormData(event.currentTarget);

    if (!formValue) {
      data.delete("image");
      editDish(id, data);
    } else {
      editDish(id, data);
    }

    navigate("/menu");
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Edit Dish
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              label="Title"
              name="title"
              autoFocus
              value={formValue.title}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="price"
              label="Price"
              type="number"
              value={formValue.price}
              onChange={handleChange}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="image_product"
              type="file"
              //label="Image"
              //value={formValue.image}
              onChange={handleChange}
            />

            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                value={formValue.category}
                onChange={handleChange}
                label="Category"
                name="category"
              >
                {categories.map((category) => (
                  <MenuItem key={category.id} value={category.id}>
                    {category.category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Save Changes
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
