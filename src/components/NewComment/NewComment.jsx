import { useState } from "react";
import axios from "axios";
import "./NewComment.scss";
const BASE_URL = import.meta.env.VITE_BASE_URL;

function NewComment({ refetchComments, topic }) {
  const [formData, setFormData] = useState({
    username: "",
    comment: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Process form data (e.g., send to an API or update UI)
    try {
      const commentBody = {
        topic: topic,
        username: formData.username,
        comment: formData.comment,
      };
      console.log(commentBody);
      const sendComment = await axios.post(`${BASE_URL}/comments`, commentBody);
      refetchComments();
      console.log(sendComment.data);

      setFormData({
        username: "",
        comment: "",
      });
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  return (
    <div className="new-comment__container">
      <h3 className="new-comment__title">Leave A Comment</h3>
      <form className="new-comment__form" onSubmit={handleSubmit}>
        <label className="new-comment__label">name </label>
        <input
          type="text"
          placeholder="type your name here"
          onChange={handleChange}
          value={formData.username}
          name="username"
          className="new-comment__username"
        ></input>

        <label htmlFor="comment" className="new-comment__label">
          comment
        </label>
        <textarea
          placeholder="write your comment here..."
          id="comment"
          onChange={handleChange}
          value={formData.comment}
          name="comment"
          className="new-comment__comment"
        ></textarea>

        <button type="submit" className="new-comment__button">
          comment
        </button>
      </form>
    </div>
  );
}

export default NewComment;
