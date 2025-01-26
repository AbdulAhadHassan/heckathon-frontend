import React from 'react';

const testimonials = [
  {
    name: "John Doe",
    role: "Small Business Owner",
    content:
      "LoanEase made it incredibly simple to get the funding I needed for my business. Their quick approval process and competitive rates were exactly what I was looking for.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Jane Smith",
    role: "Homeowner",
    content:
      "I was hesitant about taking out a loan, but the team at LoanEase walked me through every step. Their transparency and excellent customer service made all the difference.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700">&quot;{testimonial.content}&quot;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}