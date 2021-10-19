import React from 'react';

const Hero = () => (
  <section className="hero">
    <nav>
      <ul id="apple-nav">
        <li>
          <a href=""><i className="fab fa-apple" /></a>
        </li>
        <li>
          <a href="">Store</a>
        </li>
        <li>
          <a href="">Mac</a>
        </li>
        <li>
          <a href="">iPod</a>
        </li>
        <li>
          <a href="">iPhone</a>
        </li>
        <li>
          <a href="">iPad</a>
        </li>
        <li>
          <a href="">iTunes</a>
        </li>
        <li>
          <a href="">Support</a>
        </li>
        <li>
          <form>
            <input type="text" />
            <i className="fas fa-search" />
          </form>
        </li>
      </ul>
    </nav>

    <div className="hero-text">
      <h1>What will your verse be?</h1>
      <h2>Everyone has something to share. See how people are using iPad in their unique ways to add to the world's story.</h2>
      <p><a href="">Watch the "Your Verse" film and explore the stories</a><i className="far fa-play-circle" /></p>
    </div>
  </section>
);

export default Hero;
