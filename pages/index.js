'use client';

import { useState } from 'react';
import Navbar from '../app/components/Navbar';
import Hero from '../app/components/Hero';
import Services from '../app/components/Services';
import About from '../app/components/About';
import Testimonials from '../app/components/Testimonials';
import SuccessStories from '../app/components/SuccessStories';
import Appointment from '../app/components/Appointment';
import Footer from '../app/components/Footer';
import FloatingActionButton from '../app/components/FloatingActionButton';

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
      <Footer />
      <FloatingActionButton onClick={() => setIsFormOpen(true)} />
    </main>
  );
} 