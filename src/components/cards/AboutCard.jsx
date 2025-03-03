import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

function AboutCard({ rating, content, location, total }) {
  const stars = [];
  for (let i = 1; i <= total; i++) {
    if (i <= rating) {
      stars.push(<FaStar key={i} className="text-yellow-300" />);
    } else {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-300" />);
    }
  }

  return (
    <div className="bg-[#F7F6F9] rounded-lg p-6 shadow-xl border min-h-min">
      <div className="flex items-center">
        <span className="flex">{stars}</span>
        <span className="ml-2 font-bold">{rating}</span>
      </div>
      <p className="mt-2">{content}</p>
      <p className="mt-4 font-semibold text-gray-700">{location}</p>
    </div>
  );
}

export default AboutCard;
