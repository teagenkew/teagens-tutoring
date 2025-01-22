import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage/HomePage";
import About from "./pages/About/About";
import TopicMenu from "./pages/TopicMenu/TopicMenu";
import TopicPage from "./pages/TopicPage/TopicPage";
import BookASession from "./pages/BookASession/BookASession";
import PracticeQuestions from "./pages/PracticeQuestions/PracticeQuestions";
import KinematicsNotes from "./pages/Notes/Physics/Kinematics/KinematicsNotes";
import Quiz from "./pages/Quiz/Quiz";
import UnderConstruction from "./pages/UnderConstruction/UnderConstruction";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import CompositeFunctions from "./components/Notes/CompositeFunctions/CompositeFunctions.jsx";

function App() {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(location.pathname);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    if (location.pathname !== currentPage) {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentPage(location.pathname);
        setTransitioning(false);
      }, 200);
    }
  }, [location.pathname, currentPage]);
  return (
    <>
      <div
        className={`page-container ${transitioning ? "fade-out" : "fade-in"}`}
      >
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/book" element={<BookASession />} />
          <Route path="/:subject/topics" element={<TopicMenu />} />
          <Route path="/:subject/topics/:topic" element={<TopicPage />} />
          <Route
            path="/:subject/topics/:topic/practice-questions"
            element={<PracticeQuestions />}
          />
          <Route
            path="/physics/topics/kinematics/notes"
            element={<KinematicsNotes />}
          />
          <Route
            path="/math/topics/compositeFunctions/notes"
            element={<UnderConstruction />}
          />
          <Route
            path="/:subject/topics/:topic/notes"
            element={<UnderConstruction />}
          />
          <Route path="/:subject/topics/:topic/:unitQuiz" element={<Quiz />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
