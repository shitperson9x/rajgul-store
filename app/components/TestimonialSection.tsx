'use client';

import { useState } from 'react';
import ReviewList from './ReviewList';
import TestimonialForm from './TestimonialForm';

export default function TestimonialSection() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleReviewAdded = () => {
    // Trigger refresh of review list
    setRefreshKey(prev => prev + 1);
  };

  return (
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h3 className="text-4xl font-bold text-white text-center mb-4">
        Testimoni Customer
      </h3>
      <p className="text-gray-400 text-center mb-12">Apa kata mereka yang sudah menggunakan jasa kami?</p>
      
      {/* Review List */}
      <div className="mb-12">
        <ReviewList refreshKey={refreshKey} />
      </div>

      {/* Testimonial Form */}
      <div className="max-w-2xl mx-auto">
        <TestimonialForm onReviewAdded={handleReviewAdded} />
      </div>
    </section>
  );
}
