import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Review() {
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);
    const navigate = useNavigate();

    const handleSubmit = () => {
        // Handle the review submission logic here
        console.log('Review:', review, 'Rating:', rating);
        navigate('/'); // Redirect to the desired page after submission
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold mb-4">Leave a Review</h1>
            <textarea
                className="w-1/2 p-2 border"
                placeholder="Write your review..."
                value={review}
                onChange={(e) => setReview(e.target.value)}
            />
            <div className="flex items-center mt-4">
                <label className="mr-2">Rating:</label>
                <input
                    type="number"
                    min="1"
                    max="5"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                />
            </div>
            <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white"
                onClick={handleSubmit}
            >
                Submit Review
            </button>
        </div>
    );
}

export default Review;
