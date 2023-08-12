import React, { useEffect, useState } from "react";
import { useHotelContext } from "../../contexts/HotelContext";
import { useAuthContext } from "../../contexts/AuthContext";
import { useParams } from "react-router-dom";
import Details from "../../components/hotelrooms/Details";

const HotelDetailPage = () => {
  const { detail, getDetail } = useHotelContext();
  const { user } = useAuthContext();
  const { id } = useParams();
  const [item, setItem] = useState(null);
  useEffect(() => {
    getDetail(id);
  }, []);

  useEffect(() => {
    if (detail) {
      setItem(detail);
    }
  }, [detail]);
  return (
    <div>
      <Details item={item} />
    </div>
  );
};

export default HotelDetailPage;
