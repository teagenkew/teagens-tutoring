import { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
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
    <div>
      <h3 className="new-comment__title">Leave A Comment</h3>
      <form className="new-comment__form" onSubmit={handleSubmit}>
        <label className="new-comment__label">
          name
          <input
            type="text"
            placeholder="type your name here"
            onChange={handleChange}
            value={formData.username}
            name="username"
          ></input>
        </label>
        <label htmlFor="comment" className="new-comment__label">
          comment
        </label>
        <textarea
          placeholder="comment"
          id="comment"
          onChange={handleChange}
          value={formData.comment}
          name="comment"
        ></textarea>

        <button type="submit">comment</button>
      </form>
    </div>
  );
}

export default NewComment;
