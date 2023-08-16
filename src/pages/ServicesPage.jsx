import { Button, ImageList, ImageListItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useServiceContext } from "../contexts/ServicesContext";
import { Box, Container } from "@mui/system";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  const { fetchServices, services } = useServiceContext();
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetchServices();
  }, []);

  const filteredServices = services.filter(
    (item) => item.category === category
  );

  return (
    <div className="servicepage_container">
      <div className="services_hero">
        <div className="services_hero_text-container">
          <h2>Relax, Enjoy, Be Calm</h2>
          <p>
            Nestled on the tranquil shores, our spa offers a haven of calmness
            and serenity. From revitalizing massages to invigorating facials,
            our skilled therapists curate a personalized journey just for you.
            Immerse yourself in therapies harnessing the healing power of the
            sea, leaving you refreshed and revitalized.
          </p>
        </div>
      </div>
      <div
        className="servicepage_btn_container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Button
          sx={{
            fontSize: "20px",
          }}
          variant="#5585b5"
          disableElevation
          id="sport"
          onClick={(e) => setCategory(e.currentTarget.id)}
        >
          Sport
        </Button>
        <Button
          sx={{
            fontSize: "20px",
          }}
          variant="#5585b5"
          disableElevation
          id="spa"
          onClick={(e) => setCategory(e.currentTarget.id)}
        >
          Spa
        </Button>
        <Button
          sx={{
            fontSize: "20px",
          }}
          variant="#5585b5"
          disableElevation
          id="events"
          onClick={(e) => setCategory(e.currentTarget.id)}
        >
          Event Hall
        </Button>
      </div>
      <Container className="services_container">
        {filteredServices.map((item) => (
          <Box key={item.id} sx={{ margin: "50px", display: "flex" }}>
            <ImageList variant="standard" cols={3} gap={8}>
              <ImageListItem>
                <img
                  src={item.img}
                  alt={item.title}
                  style={{ width: "450px", maxWidth: "none" }}
                />
              </ImageListItem>
            </ImageList>
            <Box
              sx={{
                width: "100%",
                height: 450,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto",
                padding: "10px",
                textAlign: "center",
              }}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <Link to="/order">{item.order}</Link>
            </Box>
          </Box>
        ))}
      </Container>
    </div>
  );
};

export default ServicesPage;
