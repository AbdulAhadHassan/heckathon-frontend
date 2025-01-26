import React from 'react';
import { CheckCircle } from 'lucide-react';

const features = [
  { title: "Quick Approval", description: "Get approved in as little as 24 hours" },
  { title: "Low Interest Rates", description: "Competitive rates starting from 3.99% APR" },
  { title: "Flexible Terms", description: "Choose loan terms that fit your budget" },
  { title: "No Hidden Fees", description: "Transparent pricing with no surprises" },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose LoanEase?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <CheckCircle className="text-primary mb-4 h-8 w-8" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

