import React, { useState } from "react";
import { FaStar, FaRegStar, FaThumbsUp, FaThumbsDown } from "react-icons/fa";

export default function ReviewCard() {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [review, setReview] = useState("");
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!review.trim()) return alert("Please write a review!");
        console.log({ rating, review, likes, dislikes });
        alert("Review submitted ✅ (later you can save it in MongoDB)");
        setReview("");
        setRating(0);
    };

    return (
        <div className="max-w-md w-full bg-white shadow-lg rounded-md p-4">
            {/* Rating */}
            <div className="flex items-center mb-3">
                {[1, 2, 3, 4, 5].map((star) =>
                    star <= (hover || rating) ? (
                        <FaStar
                            key={star}
                            className="text-yellow-400 text-2xl cursor-pointer"
                            onClick={() => setRating(star)}
                            onMouseEnter={() => setHover(star)}
                            onMouseLeave={() => setHover(0)}
                        />
                    ) : (
                        <FaRegStar
                            key={star}
                            className="text-gray-400 text-2xl cursor-pointer"
                            onClick={() => setRating(star)}
                            onMouseEnter={() => setHover(star)}
                            onMouseLeave={() => setHover(0)}
                        />
                    )
                )}
                <span className="ml-2 text-sm text-gray-600">
                    {rating ? `${rating} / 5` : "Rate"}
                </span>
            </div>

            {/* Review Input */}
            <form onSubmit={handleSubmit}>
                <textarea
                    className="w-full p-2 border rounded-lg resize-none focus:ring-2 focus:ring-blue-400"
                    rows="3"
                    placeholder="Write your review..."
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                ></textarea>

                {/* Like / Dislike */}
                <div className="flex items-center gap-4 mt-3">
                    <button
                        type="button"
                        onClick={() => setLikes(likes + 1)}
                        className="flex items-center gap-1 text-green-600 hover:text-green-800"
                    >
                        <FaThumbsUp /> {likes}
                    </button>
                    <button
                        type="button"
                        onClick={() => setDislikes(dislikes + 1)}
                        className="flex items-center gap-1 text-red-600 hover:text-red-800"
                    >
                        <FaThumbsDown /> {dislikes}
                    </button>
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                >
                    Submit Review
                </button>
            </form>
        </div>
    );
}
