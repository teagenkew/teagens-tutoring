import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import About from "./pages/About/About";
import TopicMenu from "./pages/TopicMenu/TopicMenu";
import TopicPage from "./pages/TopicPage/TopicPage";
import BookASession from "./pages/BookASession/BookASession";
import PracticeQuestions from "./pages/PracticeQuestions/PracticeQuestions";

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
            path="/:subject/topics/:topic/practice-questions"
            element={<PracticeQuestions />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
