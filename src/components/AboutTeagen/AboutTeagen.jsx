import aboutTeagen from "../../assets/about-teagen.png";
import "./AboutTeagen.scss";
function AboutTeagen() {
  return (
    <div className="about-teagen__container">
      <img src={aboutTeagen}></img>
      <div className="about-teagen__content-container">
        <h1 className="about-teagen__title">About</h1>
        <div className="about-teagen__paragraph-container">
          <p className="about-teagen__paragraph">
            Teagen has been a dedicated tutor for over ten years, specializing
            in physics and math. With a Master’s degree in Physics from Western
            University and a double major in Mathematics and Physics from Acadia
            University, Teagen combines deep subject expertise with an
            empathetic teaching style. By fostering student-directed sessions,
            Teagen empowers learners to take charge of their education, build
            confidence, and develop a genuine love for the subject.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutTeagen;
