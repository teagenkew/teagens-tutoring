import React from "react";
import { useLocation } from "react-router-dom";

function CompositeFunctionsNotes() {
  const compositeNotesRef = useRef(null);

  const location = useLocation();
  const path = location.pathname;
  const topic = path.split("/")[3];
  const [comments, setComments] = useState([]);
  const getComments = async (topic) => {
    const response = await axios.get(`${BASE_URL}/comments/${topic}`);
    setComments(response.data);
    return response.data;
  };
  useEffect(() => {
    const fetchComments = async () => {
      await getComments(topic);
    };
    fetchComments();
  }, [topic]);

  const refetchComments = () => {
    getComments(topic);
  };

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return <div>CompositeFunctionsNotes</div>;
}

export default CompositeFunctionsNotes;
