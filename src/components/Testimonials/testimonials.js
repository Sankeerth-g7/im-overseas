import React from 'react';
import './testimonials.css';

const testimonials = [
  {
    name: "John Doe",
    feedback: "Im overseas provided exceptional guidance for my study visa. Their expertise made the process smooth and stress-free!",
    country: "Canada",
    image: "https://i.pinimg.com/736x/99/2a/b8/992ab8d86b5e6b2a77d84005a09c6508.jpg"
  },
  {
    name: "Jane Smith",
    feedback: "Thanks to Im overseas, I was able to secure my visa to Australia with ease. The team is professional and knowledgeable!",
    country: "Australia",
    image: "data:image/jpeg;base64,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"
  },
  {
    name: "Michael Lee",
    feedback: "I am grateful for the assistance I received for my immigration to the UK. The service was fast and reliable.",
    country: "United Kingdom",
    image: "https://files.oaiusercontent.com/file-GdJTgOLKisBQpPnaq6aBSYL6?se=2024-09-22T12%3A03%3A30Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D6ff4f298-b411-4540-af62-01b55c12cba8.webp&sig=BeM9dY8TqSl3Hwy9g9Vkv%2Bac3F/2wfDj5ERmpR7buRc%3D"
  },
  {
    name: "Priya Gupta",
    feedback: "Im overseas helped me through every step of my New Zealand visa application. They truly care about their clients.",
    country: "New Zealand",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNwnDwweI0dKMGL5AKLYqF7COo65Rr2S7aDQ&s"
  },
  {
    name: "Carlos Hernandez",
    feedback: "Very satisfied with the service. The team is highly knowledgeable, and they made the complex process simple!",
    country: "United States",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoX8oLs4zo35x4l0Yx-WynZLqk1FQSpCd1Tg&s"
  },
  {
    name: "Aisha Khan",
    feedback: "Choosing Im overseas for my immigration process was the best decision. They provided timely updates and fantastic support.",
    country: "Germany",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgfZq_u_8tSc7zdw-nzllfx6ymVfjaKqVz5w&s"
  },
    {
        name: "Alex Johnson",
        feedback: "Im overseas provided exceptional guidance for my study visa. Their expertise made the process smooth and stress-free!",
        country: "Canada",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8H-NH8c3SlRSmqqBd6bVq2kUiyn4RG7MlUg&s"
    },
    {
        name: "Benjamin O'Connor",
        feedback: "Thanks to Im overseas, I was able to secure my visa to Australia with ease. The team is professional and knowledgeable!",
        country: "Australia",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4IC-EQXPH8tf1fC1HFt9iWHPZmUDx4lu2Tg&s"
    },
    {
        name: "Cris Johnson",
        feedback: "I am grateful for the assistance I received in the process of my abroad education. The service was fast and reliable.",
        country: "United Kingdom",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvgree9FX7WIRZGOnCWNVyfsrLfDUuyTD2fw&s"
    },
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
