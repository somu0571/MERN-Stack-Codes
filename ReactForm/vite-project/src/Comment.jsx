import { useState } from "react";
import "./Comment.css";
import CommentsForm from "./CommentsForm";

export default function Comment() {
    const [comments, setComments] = useState([
        {
            username: "@sk",
            remarks: "Great job!",
            rating: 4,
        },
    ]);

    const addNewComment = (comment) => {
        setComments((currComments) => [...currComments, comment]);
    };

    return (
        <>
            <h3>All Comments</h3>

            {comments.map((comment, index) => (
                <div className="comment" key={index}>
                    <span>{comment.remarks}</span>
                    &nbsp;
                    <span>(Rating = {comment.rating})</span>
                    <p>- {comment.username}</p>
                </div>
            ))}

            <CommentsForm addNewComment={addNewComment} />
        </>
    );
}