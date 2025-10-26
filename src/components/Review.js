import React, { useState } from "react";
import data from "./authors.json";

const Review = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevReview= () => {
        setCurrentIndex(prev => prev === 0 ? 0 : prev - 1);
    }

    const nextReview= () => {
        setCurrentIndex(next => next >= data.length - 1 ? data.length - 1 : next + 1);
    }

    const randomReview = () => {
        const min = 0;
        const max = data.length - 1;
        setCurrentIndex(Math.floor(Math.random() * (max - min + 1)))
    }

    const currentReview = data[currentIndex];

    return(
        <div style={{display: "flex", justifyContent:"space-around", flexDirection: "column", alignItems: "center",}}>
            <div id="reviewDiv">
                <button className="prev-btn" onClick={prevReview}>Previous</button>
                <div id="review-box">
                    <h2 className="author" id={`author-${currentReview?.id}`}>{currentReview?.author}</h2>
                    <img className="person-img" src={currentReview["person-img"]} alt={currentReview?.author} />
                    <p className="job">{currentReview?.job}</p>
                    <h4 className="info">{currentReview?.info}</h4>
                </div>
                <button className="next-btn" onClick={nextReview}>Next</button>
            </div>
            <div>
                <button onClick={randomReview} className="random-btn">surprise me</button>
            </div>
        </div>
    )
}

export default Review;