import React from 'react'
import Review from './Review';
import "../styles/App.css";

const App = () => {
  return (
    <div className="container">
        <h1 id="review-heading">Our Reviews</h1>
        <main>
            <Review />
        </main>
    </div>
  )
}

export default App;