import React from 'react';
import Hero from '../components/Hero';
import '../styles/Home.css';

const Home = () => {
  return (
    <>
      <Hero
        title="Floraire"
        subtitle="Delicious vegetarian cuisine made with love"
        buttonText="View Our Menu"
        backgroundImage="./src/assets/dark-mood-food.jpg"
      />
      <div className="home-container">
        <section className="summary-section">
          <h2>Our Mission</h2>
          <p>
            At <span className="highlight">Floraire</span>, we take pride in serving flavorful and nutritious vegetarian and vegan meals. We're committed to offering a welcoming space to everyone with endless variations of delicious plant-based food. Come share an experience like no other, and enjoy our healthy and sustainable meals.
          </p>
        </section>

        <section className="summary-section">
          <h2>Why Choose Us?</h2>
          <p>
            We're proud of our <span className="highlight">farm-to-table philosophy</span>, sourcing the freshest seasonal ingredients from 
            local farms. Every dish is crafted with extreme care and served with a focus on <span className="highlight">sustainability</span> and 
            <span className="highlight"> excellence</span>. Come and explore how we're redefining plant-based dining!
          </p>
        </section>
      </div>
    </>
  );
};

export default Home;
