import axios from "axios";
import React, { useContext, useState } from "react";
import { createContext } from "react";
import { ComAPI } from "../utils/consts";

const commentContext = createContext();

export function useCommentContext() {
  return useContext(commentContext);
}

const CommentContext = ({ children }) => {
  const [comments, setComments] = useState([]);

  async function getComments() {
    try {
      const { data } = await axios.get(ComAPI);
      setComments(data);
    } catch (e) {
      console.log(e);
    }
  }

  async function addComment(comment) {
    try {
      await axios.post(ComAPI, comment);
      getComments();
    } catch (e) {
      console.log(e);
    }
  }

  const value = { getComments, addComment, comments };
  return (
    <commentContext.Provider value={value}>{children}</commentContext.Provider>
  );
};

export default CommentContext;
