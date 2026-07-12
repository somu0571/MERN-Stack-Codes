import { useState } from "react";

export default function LikeButton() {
    const [isLiked, setIsLiked] = useState(false);
    let [count, setCount] = useState(0);

    function toggleLike() {
        setIsLiked(prev => !prev);
        setCount(prev => prev + 1);
    }

    return (
        <div>
            <h3>Like Count = {count}</h3>
            <p onClick={toggleLike}>
                {isLiked ? (
                    <i className="fa-solid fa-heart"></i>
                ) : (
                    <i className="fa-regular fa-heart"></i>
                )}
            </p>
        </div>
    );
}
