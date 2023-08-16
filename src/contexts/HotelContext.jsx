import React, { createContext, useContext, useReducer, useState } from "react";
import { API_HOTEL, BASE_URL, HOTEL_ACTION } from "../utils/consts";
import { useSearchParams } from "react-router-dom";
import $axios from "../utils/axios";

const hotelContext = createContext();

export const useHotelContext = () => useContext(hotelContext);

const initState = {
  rooms: [],
  oneRoom: null,
  totalPages: 1,
  categories: [],
};

function reducer(state, action) {
  switch (action.type) {
    case HOTEL_ACTION.rooms:
      return { ...state, rooms: action.payload };
    case HOTEL_ACTION.oneRoom:
      return { ...state, oneRoom: action.payload };
    case HOTEL_ACTION.totalPages:
      return { ...state, totalPages: action.payload };
    case HOTEL_ACTION.categories:
      return { ...state, categories: action.payload };
  }
}

const HotelContext = ({ children }) => {
  const [state, dispach] = useReducer(reducer, initState);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(+searchParams.get("page") || 1);
  const [detail, setDetail] = useState(null);

  async function getRooms() {
    try {
      const { data } = await $axios.get(
        `${BASE_URL}hotels/${window.location.search}`
      );
      console.log(data);
      //const totalCount = Math.ceil()

      dispach({
        type: HOTEL_ACTION.rooms,
        payload: data.results,
      });
    } catch (e) {
      console.log(e);
    }
  }

  async function getOneRoom(id) {
    try {
      const { data } = await $axios.get(`${BASE_URL}hotels/${id}`);
      dispach({
        type: HOTEL_ACTION.oneRoom,
        payload: data,
      });
    } catch (e) {
      console.log(e);
    }
  }

  async function addRoom(newRoom) {
    try {
      await $axios.post(`${BASE_URL}hotels/`, newRoom);
    } catch (e) {
      console.log(e);
    }
  }

  async function deleteRoom(id) {
    try {
      await $axios.delete(`${BASE_URL}hotels/${id}`);
      getRooms();
    } catch (e) {
      console.log(e);
    }
  }

  async function editRoom(id, newData) {
    try {
      await $axios.patch(`${BASE_URL}hotels/${id}`, newData);
    } catch (e) {
      console.log(e);
    }
  }

  async function getDetail(id) {
    const { data } = await $axios.get(`${BASE_URL}hotels/${id}`);
    setDetail(data);
  }

  const value = {
    rooms: state.rooms,
    oneRoom: state.oneRoom,
    totalPages: state.totalPages,
    categories: state.categories,
    getRooms,
    getOneRoom,
    addRoom,
    deleteRoom,
    editRoom,
    page,
    setPage,
    getDetail,
    detail,
  };

  return (
    <hotelContext.Provider value={value}>{children}</hotelContext.Provider>
  );
};

export default HotelContext;
