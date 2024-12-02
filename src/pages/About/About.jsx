import aboutTeagen from "../../assets/about-teagen.png";
import HeaderAbout from "../../components/HeaderAbout/HeaderAbout";
import "./About.scss";
function About() {
  return (
    <>
      <HeaderAbout />
      <div className="about__container">
        <h1 className="about__title">About</h1>
        <img src={aboutTeagen}></img>
        <div className="about__paragraph-container">
          <p className="about__paragraph">
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
    </>
  );
}

export default About;
