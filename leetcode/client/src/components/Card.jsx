import React from "react";

const categories = {
  0: "Arrays & Hashing",
  1: "Two Pointers",
  2: "Stack",
  3: "Binary Search",
  4: "Sliding Window",
  5: "Linked List",
  6: "Trees",
  7: "Tries",
  8: "Backtracking",
  9: "Heap / Priority Queue",
  10: "Intervals",
  11: "Greedy",
  12: "Advanced Graphs",
  13: "Graphs",
  14: "Dynamic Programming",
  15: "Bit Manipulations",
  16: "Tree",
};

// Logged In card height = 32, width = 72
function Card({
  number,
  description,
  category,
  onClick,
  color,
  height,
  width,
}) {
  
  const isArray = Array.isArray(category);
  const matchedCategories = isArray
    ? category.map((cat) => categories[cat]).filter((cat) => cat !== undefined)
    : [categories[category] || category];

  return (
    // Card Container
    <div className="card-container">
      {/* The card */}
      <div
        onClick={onClick}
        className={`card ${color} shadow-md rounded-lg m-4`}
        style={{ height: `${height}px`, width: `${width}px` }}
      >
        {/* Front of the card */}
        <div className="card-front flex flex-col justify-center items-center">
          {/* Problem number */}
          <span className="text-2xl font-extrabold text-white text-center">
            {number}
          </span>
          <span className="text-md font-semibold text-white px-4 text-center">
            {description}
          </span>
        </div>
        {/* Back of the card */}
        <div className="card-back flex flex-col justify-center items-center">
          {matchedCategories.length > 0 ? (
            matchedCategories.map((cat, index) => (
              <span
                key={index}
                className="text-l font-extrabold text-white text-center"
              >
                {cat}
              </span>
            ))
          ) : (
            <span className="text-l font-extrabold text-white text-center">
              No Matching Categories
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
