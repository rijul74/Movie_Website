import React from 'react';
import './css/services.css';
import Nav from './Nav';
import Footer from './Footer';
const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Movie Ticket Booking',
      description: 'Easily book movie tickets online for the latest movies and shows. Choose your preferred seats and showtimes effortlessly.',
      link:'https://www.shutterstock.com/image-photo/woman-holding-smartphone-buying-movie-600nw-2156185629.jpg'
    },
    {
      id: 2,
      title: 'Snacks and Beverages',
      description: 'Pre-order snacks and beverages along with your tickets. Enjoy a variety of options at the theater.',
      link:'https://cbx-prod.b-cdn.net/COLOURBOX42029482.jpg?width=800&height=800&quality=70'
    },
    {
      id: 3,
      title: 'Exclusive Membership Plans',
      description: 'Become a member to avail exclusive discounts, early bookings, and special offers on movie tickets and snacks.',
      link:'https://as2.ftcdn.net/v2/jpg/00/90/73/13/1000_F_90731324_h7mO9FL2v7c3qIwDxddY5uY5cTgKvxuT.jpg'
    },
    {
      id: 4,
      title: 'Gift Cards',
      description: 'Gift an unforgettable movie experience with our special gift cards, redeemable at any time.',
      link:'https://media.istockphoto.com/id/1361203739/vector/gift-card-icon-in-flat-style-discount-coupon-vector-illustration-on-isolated-background.jpg?s=612x612&w=0&k=20&c=TjREjzAnLGHXTkKWDC_uldNfEbIq0xszB2nQVA8fVDE='
    },
  ];

  return (
    <>
    <Nav/>
    <div className="services-page">
      <h1>Our Services</h1>
      <div className="services-list">
        {services.map((service) => (
          <div key={service.id} className="service-item">
            <div className="img_x">
                <img src={service.link} alt={service.title} />
            </div>
            <div className="text_x">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Services;
