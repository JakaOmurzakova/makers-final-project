import { Button, ImageList, ImageListItem } from "@mui/material";
import React, { useEffect, useNavigate, useState } from "react";
import { useServiceContext } from "../contexts/ServicesContext";
import { useParams } from "react-router";
import { Box, Container } from "@mui/system";
import { Link } from "react-router-dom";
import axios from "axios";

const ServicesPage = () => {
  const { getServices, services, category, setCategory } = useServiceContext();

  return (
    <div
      style={{
        marginTop: "100px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "50px",
        }}
      >
        <Button
          variant="#5585b5"
          disableElevation
          id="sport"
          onClick={(e) => setCategory(e.currentTarget.id)}
        >
          Sport
        </Button>
        <Button
          variant="#5585b5"
          disableElevation
          id="spa"
          onClick={(e) => setCategory(e.currentTarget.id)}
        >
          Spa & Massage
        </Button>
        <Button
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
          <Box key={item.id} sx={{ margin: "50px", display: "flex" }}>
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
              <h3 onClick={getServices}>{item.title}</h3>
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
