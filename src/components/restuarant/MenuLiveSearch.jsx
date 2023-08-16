import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useFoodContext } from "../../contexts/FoodContext";

const MenuLiveSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { setPage } = useFoodContext();
  const [search, setSearch] = useState(searchParams.get("search" || ""));

  const [firstMount, setFirstMount] = useState(true);

  useEffect(() => {
    if (firstMount) {
      setFirstMount(false);
      return;
    }
    const currentParams = Object.fromEntries([...searchParams]);
    setSearchParams({
      ...currentParams,
      search,
    });
    setPage(1);
  }, [search]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "20px",
        marginTop: "20px",
      }}
    >
      <TextField
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        label="Search"
      />
    </div>
  );
};

export default MenuLiveSearch;
