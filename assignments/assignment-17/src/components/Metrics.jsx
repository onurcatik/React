import React from "react";

const Metrics = ({ totalLikes }) => {
  return (
    <div className="metrics">
      <h2>Metrics</h2>
      <p>Total Likes: {totalLikes}</p>
    </div>
  );
};

export default Metrics;
