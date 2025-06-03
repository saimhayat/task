import React from 'react';
import banner from '../assets/Banner.jpg';

export default function Banner() {
  return (
    <div className="banner-wrapper">
      <img src={banner} alt="Banner" />
      <div className="banner-content">
        <h1 className="banner-title">Discover Our Games</h1>
      </div>
    </div>
  );
}
