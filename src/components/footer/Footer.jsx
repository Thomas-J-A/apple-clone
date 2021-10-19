import React from 'react';
import usaIcon from '../../images/usa.png';

const Footer = () => (
  <footer>
    <div className="footer-left">
      <p>
        Shop the <a href="">Apple Online Store</a> (1-800-MY-APPLE), visit an <a href="">Apple Retail Store</a>, or find a <a href="">reseller</a>.
      </p>
      <p>
        Copyright © 2014 Apple Inc. All rights reserved. <a href="">Terms of Use</a> | <a href="">Privacy Policy</a>
      </p>
    </div>

    <div className="footer-right">
      <ul>
        <li>
          <a href="">Site Map</a>
        </li>
        <li>
          <a href="">Hot News</a>
        </li>
        <li>
          <a href="">RSS Feeds</a>
        </li>
        <li>
          <a href="">Media Info</a>
        </li>
        <li>
          <a href="">Environment</a>
        </li>
        <li>
          <a href="">Job Opportunities</a>
        </li>
        <li>
          <a href="">Contact Us</a>
        </li>
        <li>
          <a href=""><img src={usaIcon} /></a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
