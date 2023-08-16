import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { LIMIT } from "../../utils/consts";
import { useFoodContext } from "../../contexts/FoodContext";

const MenuFilter = () => {
  const { setPage } = useFoodContext();
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
      className="menu_filter_container"
      color="primary"
      value={category}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton
        className="filter_text"
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
        value="salad"
      >
        salad
      </ToggleButton>
      <ToggleButton
        sx={{
          border: "none",

          fontWeight: 700,

          borderRadius: "50px",
        }}
        value="breakfast"
      >
        breakfast
      </ToggleButton>
      <ToggleButton
        sx={{
          border: "none",

          fontWeight: 700,
          borderRadius: "50px",
        }}
        value="lanch"
      >
        lanch
      </ToggleButton>
      <ToggleButton
        sx={{
          border: "none",

          fontWeight: 700,
          borderRadius: "50px",
        }}
        value="dinner"
      >
        dinner
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

export default MenuFilter;
