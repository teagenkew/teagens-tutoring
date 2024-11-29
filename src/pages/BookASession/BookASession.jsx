import "./BookASession.scss";
import HeaderNoNav from "../../components/HeaderNoNav/HeaderNoNav";

function BookASession() {
  return (
    <>
      <HeaderNoNav />
      <div className="booking__container">
        <div className="booking__calendar">
          <iframe
            src="https://calendly.com/teagenkew9/tutoring-session-1-hour"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default BookASession;
