import React, { useEffect } from "react";

import { Pagination as MuiPagination } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { useHotelContext } from "../../contexts/HotelContext";

const RoomPagination = () => {
  const { totalPages, page, setPage } = useHotelContext();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    setSearchParams({
      ...currentParams,
      page,
    });
  }, [page]);
  return (
    <MuiPagination
      count={totalPages}
      page={page}
      color="primary"
      onChange={(_, val) => setPage(val)}
    />
  );
};

export default RoomPagination;
