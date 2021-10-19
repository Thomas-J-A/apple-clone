import React from 'react';
import promo1 from '../../images/promo1.jpg';
import promo2 from '../../images/promo2.jpg';
import promo3 from '../../images/promo3.jpg';
import promo4 from '../../images/promo4.jpg';

const Promos = () => (
  <section class="promos">
    <img className="promo" id="promo1" src={promo1} />
    <img className="promo" id="promo2" src={promo2} />
    <img className="promo" id="promo3" src={promo3} />
    <img className="promo" id="promo4" src={promo4} />
  </section>
);

export default Promos;
