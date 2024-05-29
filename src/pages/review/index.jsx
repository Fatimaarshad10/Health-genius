import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import {jwtDecode} from 'jwt-decode';
import { useParams } from "react-router-dom";
import { apiEndpoint } from "../../config/environment";
import { toast } from "react-toastify";

function Review() {
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { token } = useParams();
    const decodedToken = jwtDecode(token);
    const user = useSelector((state) => state?.auth?.detail);

    const handleSubmit = async () => {
        if (!review || !rating || rating < 1 || rating > 5) {
            alert('Please provide a valid rating and review.');
            return;
        }
        setLoading(true);
        const reviewData = {
            patientId: user?._id,
            doctorId: decodedToken.doctorId,
            rating,
            comments: review,
        };
        try {
            const response = await axios.post(`${apiEndpoint}review`, reviewData); // Adjust the URL as needed
            toast.success(response.data.message);
            navigate('/');
        } catch (error) {
            console.error('Error submitting review:', error);
            alert('There was an error submitting your review. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="flex flex-col items-center mt-20">
                <h1 className="text-3xl font-bold text-center mb-2">Leave a Review</h1>
                <div className="flex flex-col max-w-md w-full text-center">
                    <textarea
                        className="p-3 mt-2 border rounded-md shadow-sm bg-indigo-100 border-l-2 border-indigo-500 border-2"
                        placeholder="Write your review..."
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                    />
                </div>
               
                <div className="flex items-center mt-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                            key={star}
                            className={`w-10 h-10 text-${star <= rating ? 'yellow' : 'gray'}-300 ms-1`}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                            onClick={() => setRating(star)}
                            style={{ cursor: 'pointer' }}
                        >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                    ))}
                </div>
                <div className="mt-5">
                    <div className="flex justify-center">
                        <button
                            className="mt-5 rounded-md bg-indigo-900 px-4 py-2 text-md font-semibold text-white shadow-sm hover:border-2 hover:bg-white hover:text-indigo-900 hover:border-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-900"
                            onClick={handleSubmit}
                            disabled={loading}
                        >
                            {loading ? 'Submitting...' : 'Submit Review'}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Review;
