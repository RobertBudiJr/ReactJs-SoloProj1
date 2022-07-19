import { useState } from 'react';
import React from 'react';
import Twt from '../src/assets/twitter-sign.png';
import Fb from '../src/assets/facebook.png';
import Ig from '../src/assets/instagram.png';
import Git from '../src/assets/github.png';

export default function Footer() {
  return (
    <footer className='footer'>
      <img src={Twt} alt='Twitter' className='image__twt footer__img' />
      <img src={Fb} alt='Facebook' className='image__fb footer__img' />
      <img src={Ig} alt='Instagram' className='image__ig footer__img' />
      <img src={Git} alt='GitHub' className='image__git footer__img' />
    </footer>
  );
}
