import React from 'react';
import { Button } from '@mui/material/button';

export default function Hero() {
  return (
    <section className="bg-primary text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Get the Loan You Need, Fast and Easy</h1>
        <p className="text-xl mb-8">Low rates, quick approval, and flexible terms tailored to your needs</p>
        <Button variant="secondary" size="lg">
          Start Your Application
        </Button>
      </div>
    </section>
  );
}