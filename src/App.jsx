import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import About from "./pages/About/About";
import TopicMenu from "./pages/TopicMenu/TopicMenu";
import TopicPage from "./pages/TopicPage/TopicPage";
import BookASession from "./pages/BookASession/BookASession";
import KinematicsPQ from "./pages/PracticeQuestions/Physics/Kinematics/KinematicsPQ";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />{" "}
          <Route path="/book" element={<BookASession />} />
          <Route path="/:subject/topics" element={<TopicMenu />} />
          <Route path="/:subject/topics/:topic" element={<TopicPage />} />
          <Route
            path="/physics/topics/kinematics/practice-questions"
            element={<KinematicsPQ />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
