import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useCommentContext } from "../contexts/CommentContext";
import { useAuthContext } from "../contexts/AuthContext";

const Comment = () => {
  const { comments, getComments, addComment } = useCommentContext();
  const [inputValue, setInputValue] = useState("");
  const user = "Luka";

  useEffect(() => {
    getComments();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    if (!inputValue.trim()) {
      return;
    }
    const newComment = {
      text: inputValue,
      user: user.username,
      date: new Date().toString(),
    };

    addComment(newComment);
    setInputValue("");
  }

  return (
    <div
      style={{
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div>
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            <>{user}</>
            <TextField
              fullWidth
              label="Your comment"
              id="fullWidth"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Button type="submit">Send</Button>
          </Box>
        </form>
        <Box>
          {comments.map((item) => (
            <Box
              key={item.id}
              sx={{
                marginTop: "35px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ margin: "15px" }}>
                <h6>{item.user}</h6>
                <h6>{item.date}</h6>
              </div>
              <h6>{item.text}</h6>
            </Box>
          ))}
        </Box>
      </div>
    </div>
  );
};

export default Comment;
