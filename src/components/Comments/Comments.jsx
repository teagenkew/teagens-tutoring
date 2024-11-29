import "./Comments.scss";

function Comments({ comments }) {

  return (
    <div>
      <h3 className="comments__title">Comments</h3>
      <div>
        {comments.map((comment) => {
          return (
            <div key={comment.id}>
              <p>{comment.username}</p>
              <p>{comment.comment}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Comments;
