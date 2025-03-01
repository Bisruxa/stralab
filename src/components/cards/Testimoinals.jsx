import React from "react";
import AboutCard from "./AboutCard";
function Card() {
  const cardData = [
    {
      content: "This course changed my whole concept regarding Landing Pages.",
      location: "Young Alaska,London",
      rating: 5,
      totalStars: 5,
    },
    {
      content:
        "This course is amazing I didn't expect this so much of great information!",
      location: "Frederic Simon,New York",
      rating: 4.5,
      totalStars: 5,
    },
    {
      content:
        "So many insight,new information,loved the tips about landing page.",
      location: "Lucas Tomhill,Bangkok",
      rating: 4.5,
      totalStars: 5,
    },
    // Add more data objects here if needed
  ];
  return (
    <div className="flex flex-row justify-between gap-x-24">
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

export default Card;
