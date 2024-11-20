import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import About from "./pages/About/About";
import TopicMenu from "./pages/TopicMenu/TopicMenu";
import KinematicsNotes from "./pages/Notes/Physics/Kinematics/KinematicsNotes";
import KinematicsPQ from "./pages/PracticeQuestions/Physics/Kinematics/KinematicsPQ";
import CompositeFunctionsNotes from "./pages/Notes/Math/CompositeFunctions/CompositeFunctionsNotes";
import CompositeFunctionsPQ from "./pages/PracticeQuestions/Math/CompositeFunctions/CompositeFunctionsPQ";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/:subject/topics" element={<TopicMenu />} />
          <Route
            path="/physics/kinematics/notes"
            element={<KinematicsNotes />}
          />{" "}
          <Route
            path="/physics/kinematics/practice"
            element={<KinematicsPQ />}
          />
          <Route
            path="/math/compositefunctions/notes"
            element={<CompositeFunctionsNotes />}
          />{" "}
          <Route
            path="/math/compositefunctions/practice"
            element={<CompositeFunctionsPQ />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
