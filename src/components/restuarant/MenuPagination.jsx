import React, { useEffect } from "react";

import { Pagination as MuiPagination } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { useFoodContext } from "../../contexts/FoodContext";

const MenuPagination = () => {
  const { totalPages, page, setPage } = useFoodContext();
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

export default MenuPagination;
