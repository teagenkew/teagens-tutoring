import "./Comments.scss";

function Comments({ comments }) {
  return (
    <div className="comments__container">
      <h3 className="comments__title">Comments</h3>
      <div className="all-comments">
        {comments.map((comment) => {
          return (
            <div key={comment.id} className="comment__container">
              <p className="comment__username">{comment.username}</p>
              <p className="comment__body">{comment.comment}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Comments;
