import React, { createContext, useContext, useReducer, useState } from "react";
import { ACTIONS, API_MENU, BASE_URL, LIMIT } from "../utils/consts";
import { useSearchParams } from "react-router-dom";
import $axios from "../utils/axios";
import axios from "axios";

const foodContext = createContext();

export function useFoodContext() {
  return useContext(foodContext);
}

const initState = {
  dishes: [],
  oneDish: null,
  totalPages: 1,
  categories: [],
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.dishes:
      return { ...state, dishes: action.payload };
    case ACTIONS.oneDish:
      return { ...state, oneDish: action.payload };
    case ACTIONS.totalPages:
      return { ...state, totalPages: action.payload };
    case ACTIONS.categories:
      return { ...state, categories: action.payload };
    default:
      return state;
  }
}

const FoodContext = ({ children }) => {
  const [state, dispach] = useReducer(reducer, initState);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(+searchParams.get("page") || 1);

  async function getDishes() {
    try {
      const { data, headers } = await $axios.get(
        `${API_MENU}${window.location.search}`
      );
      const totalCount = Math.ceil(headers["x-total-count"] / LIMIT);

      dispach({
        type: ACTIONS.totalPages,
        payload: totalCount,
      });

      dispach({
        type: ACTIONS.dishes,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function getOneDish(id) {
    try {
      const { data } = await $axios.get(`${API_MENU}/${id}`);
      dispach({
        type: ACTIONS.oneDish,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function addDish(newDish) {
    try {
      const { data } = await $axios.post(`${API_MENU}`, newDish);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteDish(id) {
    try {
      await $axios.delete(`${API_MENU}/${id}`);
      getDishes();
    } catch (error) {
      console.log(error);
    }
  }

  async function editDish(id, newData) {
    try {
      await $axios.patch(`${API_MENU}/${id}`, newData);
    } catch (error) {
      console.log(error);
    }
  }

  async function getCategories() {
    try {
      const { data } = await $axios.get(`${BASE_URL}category_restaurant/`);
      dispach({
        type: ACTIONS.categories,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  const value = {
    dishes: state.dishes,
    oneDish: state.oneDish,
    totalPages: state.totalPages,
    categories: state.categories,
    getDishes,
    getOneDish,
    addDish,
    deleteDish,
    editDish,
    getCategories,
    page,
    setPage,
  };
  return <foodContext.Provider value={value}>{children}</foodContext.Provider>;
};

export default FoodContext;
