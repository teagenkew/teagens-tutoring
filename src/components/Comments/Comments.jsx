import "./Comments.scss";
const BASE_URL = import.meta.env.VITE_BASE_URL;
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Comments() {
  const location = useLocation();
  const path = location.pathname;
  const topic = path.split("/")[3];
  console.log(topic);
  const [comments, setComments] = useState([]);
  const getComments = async (t) => {
    const response = await axios.get(`${BASE_URL}/comments/${t}`);
    console.log(response);
    setComments(response.data);
    return response.data;
  };
  useEffect(() => {
    const fetchComments = async () => {
      await getComments(topic);
    };
    fetchComments();
  }, [topic]);

  return (
    <div>
      <h3 className="comments__title">Comments</h3>
      <div>
        {console.log(comments)}
        {comments.map((comment) => {
          return (
            <div key={comment.id}>
              <p>{comment.username}</p>
              <p>{comment.comment}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Comments;
