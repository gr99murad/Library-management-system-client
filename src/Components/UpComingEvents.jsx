import React from "react";

const UpComingEvents = () => {
  const events = [
    {
      title: "Book Club: January Edition",
      date: "January 20, 2025",
      description:
        "Join our monthly book club to discuss the book of the month.",
      venue: "Library Hall",
    },
    {
      title: "Author Talk: John Doe",
      date: "February 5, 2025",
      description: "Meet the author John Doe and discuss his latest book.",
      venue: "Conference Room B",
    },
    {
      title: "Children's Reading Workshop",
      date: "February 15, 2025",
      description: "A fun and interactive reading workshop for kids aged 6-10.",
      venue: "Children's Section",
    },
  ];
  return (
    <div className="px-7 md:px-6 lg:px-4 ">
      <h2 className="text-4xl font-semibold mb-4 text-center">
        Library Events & WorkShops
      </h2>

      <div className="space-y-4 pt-10">
        {events.map((event, index) => (
          <div
            key={index}
            className="p-4 border border-gray-300 rounded-md bg-[#e9e2e2]"
          >
            <h3 className="text-text font-bold text-xl">{event.title}</h3>
            <p>Date: {event.date}</p>
            <p>{event.description}</p>
            <p>Venue: {event.venue}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpComingEvents;
