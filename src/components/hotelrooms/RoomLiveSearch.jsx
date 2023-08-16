import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useHotelContext } from "../../contexts/HotelContext";

const RoomLiveSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { setPage } = useHotelContext();
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
    <div>
      <TextField
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        label="Search"
      />
    </div>
  );
};

export default RoomLiveSearch;
