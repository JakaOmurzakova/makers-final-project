import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useHotelContext } from "../../contexts/HotelContext";
import { LIMIT } from "../../utils/consts";
import "../../roomStyleCard.css";

const RoomFilter = () => {
  const { setPage } = useHotelContext();
  const [searchPar, setSearchPar] = useSearchParams();
  const [category, setCategory] = useState(searchPar.get("category") || "all");
  const handleChange = (_, val) => {
    val && setCategory(val);
  };

  useEffect(() => {
    const curPar = Object.fromEntries([...searchPar]);
    if (category === "all") {
      const { _limit, _page, q } = curPar;
      setSearchPar({
        _limit: LIMIT,
        _page: _page || 1,
        q: q || "",
      });
    } else {
      setSearchPar({
        ...curPar,
        category,
        _page: 1,
      });
      setPage(1);
    }
  }, [category]);

  return (
    <ToggleButtonGroup
      className="filter_text"
      color="primary"
      value={category}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton
        sx={{
          border: "none",

          fontWeight: 700,

          borderRadius: "25px",
        }}
        value="all"
      >
        All
      </ToggleButton>
      <ToggleButton
        sx={{
          border: "none",

          fontWeight: 700,

          borderRadius: "50px",
        }}
        value="oneBedroom"
      >
        One Bedroom
      </ToggleButton>
      <ToggleButton
        sx={{
          border: "none",

          fontWeight: 700,
          borderRadius: "50px",
        }}
        value="twoBedroom"
      >
        Two Bedroom
      </ToggleButton>
      <ToggleButton
        sx={{
          border: "none",

          fontWeight: 700,
          borderRadius: "50px",
        }}
        value="threeBedroom"
      >
        Three Bedroom
      </ToggleButton>
      <ToggleButton
        sx={{
          border: "none",
          fontWeight: 700,
          borderRadius: "50px",
        }}
        value="vip"
      >
        VIP
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default RoomFilter;
