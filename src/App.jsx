import { useState } from 'react';
import React from 'react';
import './App.css';
import Hero from '../components/Hero';
import Main from '../components/Main';
import Footer from '../components/Footer';

export default function App() {
  return (
    <div className='container'>
      <Hero />
      <Main />
      <Footer />
    </div>
  );
}
