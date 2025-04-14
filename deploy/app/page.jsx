'use client';

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import SuccessStories from './components/SuccessStories';
import Appointment from './components/Appointment';
import FloatingActionButton from './components/FloatingActionButton';

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <SuccessStories />
      <Appointment isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
      <FloatingActionButton onClick={() => setIsFormOpen(true)} />
    </main>
  );
}
