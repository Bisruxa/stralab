import React from "react";
import AboutCard from "./AboutCard";

function Testimonial() {
  const cardData = [
    {
      content: "This course changed my whole concept regarding Landing Pages.",
      location: "Young Alaska, London",
      rating: 5,
      totalStars: 5,
    },
    {
      content:
        "This course is amazing! I didn't expect so much valuable information. The open, positive, and proactive approach helps align your work environment with your team’s culture and attutude you and your team aspire.",
      location: "Frederic Simon, New York",
      rating: 5,
      totalStars: 5,
    },
    {
      content: "So many insights! I loved the tips about landing pages.",
      location: "Lucas Tomhill, Bangkok",
      rating: 4.5,
      totalStars: 5,
    },
    {
      content:
        "This course exceeded my expectations. I learned so much about aligning work environments effectively.",
      location: "Frederic Simon, New York",
      rating: 4.5,
      totalStars: 5,
    },
    {
      content: "This course provides amazing insights! Highly recommended.",
      location: "Frederic Simon, New York",
      rating: 5,
      totalStars: 5,
    },
    {
      content: "A great learning experience! Loved every bit of it.",
      location: "Lucas Tomhill, Bangkok",
      rating: 4.5,
      totalStars: 5,
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-8">
      {cardData.map((card, index) => (
        <AboutCard
          key={index}
          rating={card.rating}
          content={card.content}
          location={card.location}
          total={card.totalStars}
        />
      ))}
    </div>
  );
}

export default Testimonial;
