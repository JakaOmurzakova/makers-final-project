import { Button, ImageList, ImageListItem } from "@mui/material";
import React, { useEffect, useNavigate } from "react";
import { useServiceContext } from "../contexts/ServicesContext";
import { useParams } from "react-router";
import { Box, Container } from "@mui/system";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  const { category, setCategory, services } = useServiceContext();

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
      className="servicepage_container"
    >
      <div className="services_hero">
        <div className="services_hero_text-container">
          <h2>Relax, Enjoy, Be Calm</h2>
          <p>
            Nestled on the tranquil shores, our spa offers a haven of calmness
            and serenity. From revitalizing massages to invigorating facials,
            our skilled therapists curate a personalized journey just for
            you.Immerse yourself in therapies harnessing the healing power of
            the sea, leaving you refreshed and revitalized.
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "50px",
          marginTop: "30px",
        }}
        className="servicepage_btn_container"
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
        <div
          style={{ width: "4px", height: "40px", backgroundColor: "white" }}
        ></div>
        <Button
          sx={{ fontSize: "20px" }}
          variant="#5585b5"
          disableElevation
          id="spa"
          onClick={(e) => setCategory(e.currentTarget.id)}
        >
          Spa & Massage
        </Button>
        <div
          style={{ width: "4px", height: "40px", backgroundColor: "white" }}
        ></div>
        <Button
          sx={{ fontSize: "20px" }}
          variant="#5585b5"
          disableElevation
          id="events"
          onClick={(e) => setCategory(e.currentTarget.id)}
        >
          Event Concept
        </Button>
      </div>
      <Container
        style={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        {services.map((item) => (
          <Box sx={{ margin: "50px", display: "flex" }}>
            <ImageList variant="standard" cols={3} gap={8}>
              <ImageListItem>
                <img
                  src={item.img}
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
              variant="standard"
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <Link to={"/order"}>Order</Link>
            </Box>
          </Box>
        ))}
      </Container>
    </div>
  );
};

export default ServicesPage;

{
  /* <Container
      style={{
        marginTop: "30px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "30px",
      }}
    >
      {itemData.map((item) => (
        <Box sx={{ margin: "50px", display: "flex" }}>
          <ImageList variant="standard" cols={3} gap={8}>
            <ImageListItem>
              <img
                src={item.img}
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
            variant="standard"
          >
            <h3>{item.title}</h3>
            <p>description</p>
            <h3>calendar</h3>
          </Box>
        </Box>
      ))}
    </Container> */
}
