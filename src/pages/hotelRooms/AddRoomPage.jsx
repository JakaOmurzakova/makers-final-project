import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useHotelContext } from "../../contexts/HotelContext";

const defaultTheme = createTheme();

export default function AddRoomPage() {
  const { addRoom } = useHotelContext();

  const [formValue, setFormValue] = useState({
    title: "",
    description: "",
  });

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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formValue.title.trim() || !formValue.description.trim()) {
      return;
    }

    console.log(formValue);

    const data = new FormData(event.currentTarget);

    addRoom(data);

    setFormValue({
      title: "",
      description: "",
    });
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
            New Room
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
              value={formValue.name}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="description"
              label="Description"
              value={formValue.description}
              onChange={handleChange}
            />

            {/*<TextField
              margin="normal"
              required
              fullWidth
              name="price"
              label="Price"
              type="number"
              value={formValue.price}
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
                  <MenuItem key={category.slug} value={category.slug}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{ mt: 1 }}>
              <InputLabel>Stock</InputLabel>
              <Select
                value={formValue.stock}
                onChange={handleChange}
                label="Stock"
                name="stock"
              >
                <MenuItem value="in_stock">In stock</MenuItem>
                <MenuItem value="out_of_stock">Out of stock</MenuItem>
              </Select>
            </FormControl>
            <TextField
              margin="normal"
              required
              fullWidth
              type="file"
              name="image"
              onChange={handleChange}
            />*/}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add New Product
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
