import React from 'react';
import '../styles/Approach.css';

const Approach = () => {
  return (
    <div className="approach-container">
      <section className="approach-section">
        <h2 className="approach-title">Farm-to-Table Philosophy</h2>
        <p className="approach-text">
          We source our ingredients from <span className="highlight">local farms</span>, ensuring the freshest and most seasonal produce for our dishes. This not only supports our community but also guarantees <span className="highlight">quality</span> and <span className="highlight">freshness</span> in every bite.
        </p>
        <div className="image-row">
          <div>
            <img src="./src/assets/plant-heart.jpg" alt="Farmer carefully nurturing a small vegetable plant" className="farm-image" />
          </div>
          <div>
            <img src="./src/assets/apple-orchard.jpg" alt="Apple orchard" className="farm-image" />
          </div>
          <div>
            <img src="./src/assets/autumn-vegetables.jpg" alt="Pumpkins and other autumn vegetables" className="farm-image" />
          </div>
        </div>
      </section>

      <section className="approach-section">
        <h2 className="approach-title">Our Preparation Process</h2>
        <p className="approach-text">
          From <span className="highlight">farm</span> to <span className="highlight">kitchen</span> to your table, every step is taken with care and precision. We use expert culinary techniques to craft meals that are as delicious as they are wholesome.
        </p>
        <div className="image-row">
          <div>
            <img src="./src/assets/fresh-ingredients.jpg" alt="Fresh Ingredients" className="prep-image" />
            <p className="image-caption">Fresh Ingredients</p>
          </div>
          <div>
            <img src="./src/assets/chef-cooking.jpg" alt="Chef Preparing" className="prep-image" />
            <p className="image-caption">Expert Preparation</p>
          </div>
          <div>
            <img src="./src/assets/waiter-serving.jpg" alt="Table Serving" className="prep-image" />
            <p className="image-caption">Served with Care</p>
          </div>
        </div>
      </section>

      <section className="approach-section">
        <h2 className="approach-title">Sustainability Practices</h2>
        <p className="approach-text">
          Our restaurant is committed to reducing its environmental impact by embracing <span className="highlight">sustainable practices</span>. These include composting food waste, using <span className="highlight">eco-friendly packaging</span>, and sourcing from farms that prioritize <span className="highlight">sustainability</span>.
        </p>
        <div className="image-row">
          <div>
            <img src="./src/assets/box-and-cup.jpg" alt="Eco Packaging" className="sustainability-image" />
            <p className="image-caption">Eco-Friendly Packaging</p>
          </div>
          <div>
            <img src="./src/assets/compost.jpg" alt="Composting" className="sustainability-image" />
            <p className="image-caption">Recycling and Composting</p>
          </div>
          <div>
            <img src="./src/assets/windmill.jpg" alt="Green Energy" className="sustainability-image" />
            <p className="image-caption">Green Energy Use</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Approach;
