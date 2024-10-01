import React from 'react';
import './testimonials.css';

const testimonials = [
  {
    name: "Rajesh Kumar",
    feedback: "IM OVERSEAS helped me secure a job in the UAE as an engineer. Their team made the entire visa process seamless and stress-free.",
    country: "UAE",
    image: "https://i.pinimg.com/736x/99/2a/b8/992ab8d86b5e6b2a77d84005a09c6508.jpg"
  },
  {
    name: "Maria Gonzales",
    feedback: "Thanks to IM OVERSEAS, I was able to get a work visa for Qatar as a software developer. Their professional guidance was invaluable!",
    country: "Qatar",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFtHyLxWsuhZP-8-w-GVfG1jflb3GI4E1HcA&s"
  },
  {
    name: "Ahmed Ali",
    feedback: "IM OVERSEAS provided excellent support for my job search and visa process for Saudi Arabia. I highly recommend their services!",
    country: "Saudi Arabia",
    image: "data:image/jpeg;base64,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"
  },
  {
    name: "Priyanka Sharma",
    feedback: "I am grateful for the assistance I received for my work visa in New Zealand. IM OVERSEAS was there every step of the way.",
    country: "New Zealand",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNwnDwweI0dKMGL5AKLYqF7COo65Rr2S7aDQ&s"
  },
  {
    name: "Carlos Mendoza",
    feedback: "Very satisfied with the service. IM OVERSEAS helped me get a labour visa for Qatar. The team is highly knowledgeable and supportive!",
    country: "Qatar",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoX8oLs4zo35x4l0Yx-WynZLqk1FQSpCd1Tg&s"
  },
  {
    name: "Fatima Hassan",
    feedback: "Choosing IM OVERSEAS for my Hajj and Umrah services was the best decision. They provided timely updates and fantastic support.",
    country: "Saudi Arabia",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgfZq_u_8tSc7zdw-nzllfx6ymVfjaKqVz5w&s"
  },
  {
    name: "Alex Johnson",
    feedback: "IM OVERSEAS guided me through the entire process of getting a work visa for Luxembourg. Their expertise made it a smooth experience!",
    country: "Luxembourg",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8H-NH8c3SlRSmqqBd6bVq2kUiyn4RG7MlUg&s"
  },
  {
    name: "Elena Petrova",
    feedback: "Thanks to IM OVERSEAS, I was able to secure a tourist visa for my trip to UAE. They made the process simple and quick.",
    country: "UAE",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxB-LbZT7CC-etMAHzNR2Dzk0cq-P6H-fnEg&s"
  },
  {
    name: "James Brown",
    feedback: "I received excellent support from IM OVERSEAS for my work visa application in New Zealand. They made a complex process easy to understand.",
    country: "New Zealand",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvgree9FX7WIRZGOnCWNVyfsrLfDUuyTD2fw&s"
  }
];


const TestimonialSection = () => {
  return (
    <div className="testimonial-section">
      <h2 className="testimonial-heading">What Our Clients Say</h2>
      <div className="testimonial-cards">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <h3>{testimonial.name}</h3>
            <p className="country">{testimonial.country}</p>
            <p className="feedback">"{testimonial.feedback}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
