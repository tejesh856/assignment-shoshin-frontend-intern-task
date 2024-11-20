import React from "react";
import Card from "./Card";
import ChartCards from "./ChartCards";
import image1 from "../assets/graph1.png";
import image2 from "../assets/graph2.png";

export default function Analytics() {
  const cards = [
    {
      id: 1,
      title: "Available Position",
      content: "4 Urgently needed",
      count: 24,
      bgcolor: `#FFEFE7`,
      color: "#FF5151",
    },
    {
      id: 2,
      title: "Job Open",
      content: "4 Active hiring",
      count: 10,
      bgcolor: "#E8F0FB",
      color: "#3786F1",
    },
    {
      id: 3,
      title: "New Employees",
      content: "4 Active hiring",
      count: 24,
      bgcolor: "#FDEBF9",
      color: "#EE61CF",
    },
  ];
  const charts = [
    {
      id: 1,
      title: "Total Employees",
      count: 216,
      men: 120,
      women: 96,
      increament: 2,
      image: image1,
    },
    {
      id: 2,
      title: "Talent Request",
      count: 16,
      men: 6,
      women: 10,
      increament: 5,
      image: image2,
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 justify-between">
        {cards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            count={card.count}
            content={card.content}
            color={card.color}
            bgcolor={card.bgcolor}
          />
        ))}
      </div>
      <div className="flex gap-4 justify-between">
        {charts.map((chart) => (
          <ChartCards
            key={chart.id}
            title={chart.title}
            count={chart.count}
            increament={chart.increament}
            men={chart.men}
            women={chart.women}
            image={chart.image}
          />
        ))}
      </div>
    </div>
  );
}
