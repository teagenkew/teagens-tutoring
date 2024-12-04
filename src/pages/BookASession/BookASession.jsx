import "./BookASession.scss";
import HeaderNoNav from "../../components/HeaderNoNav/HeaderNoNav";

function BookASession() {
  return (
    <div className="booking">
      <HeaderNoNav />
      <div className="booking__container">
        <h1 className="booking__title">Book A Session</h1>
        <div className="booking__calendar">
          <iframe src="https://calendly.com/teagenkew9/tutoring-session-1-hour" />
        </div>
      </div>
    </div>
  );
}

export default BookASession;
