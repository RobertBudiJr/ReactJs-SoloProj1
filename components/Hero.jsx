import { useState } from 'react';
import React from 'react';
import HeroPic from '../src/assets/Bear1.jpeg';

export default function Hero() {
  return (
    <section className='hero'>
      <div className='hero__pic'>
        <img className='hero__img' src={HeroPic} alt='' />
      </div>
      <div className='hero__text'>
        <h2 className='hero__name'>Da Bear</h2>
        <h4 className='hero__job'>Frontend Developer</h4>
        <h5 className='hero__web'>dabear.website</h5>
      </div>
    </section>
  );
}
