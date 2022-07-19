import { useState } from 'react';
import React from 'react';
import Email from '../src/assets/envelope-solid.svg';
import Link from '../src/assets/linkedin-white.svg';

export default function Main() {
  return (
    <main className='main'>
      <div className='main__btn-section'>
        <a href='#' className='btn-email'>
          <img src={Email} alt='Email' className='main__image-email main__image' />
          Email
        </a>
        <a href='#' className='btn-link'>
          <img src={Link} alt='Link' className='main__image-link main__image' />
          LinkedIn
        </a>
      </div>

      <div className='main__desc-section'>
        <div className='main__about'>
          <h1 className='main__title'>About</h1>
          <p className='main__para'>
            I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
          </p>
        </div>

        <div className='main__inter'>
          <h1 className='main__title'>Interest</h1>
          <p className='main__para'>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </div>
      </div>
    </main>
  );
}
