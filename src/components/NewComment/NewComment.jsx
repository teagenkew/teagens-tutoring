import { useState } from "react";

function NewComment() {
  // State for form fields
  const [formData, setFormData] = useState({
    username: "",
    comment: "",
  });

  // Handle changes in input fields
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value); // Debugging: log to check values

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Process form data (e.g., send to an API or update UI)
    console.log(formData);
  };
  return (
    <div>
      <h3 className="new-comment__title">Leave A Comment</h3>
      <form className="new-comment__form" onSubmit={handleSubmit}>
        <label className="new-comment__label">
          name
          <input
            type="text"
            placeholder="type your name here"
            onChange={handleChange}
            value={formData.username}
            name="username"
          ></input>
        </label>
        <label htmlFor="comment" className="new-comment__label">
          comment
        </label>
        <textarea
          placeholder="comment"
          id="comment"
          onChange={handleChange}
          value={formData.comment}
          name="comment"
        ></textarea>

        <button type="submit">comment</button>
      </form>
    </div>
  );
}

export default NewComment;
