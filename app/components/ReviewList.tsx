'use client';

import { useState, useEffect } from 'react';
import { ReviewCardSkeleton } from './SkeletonLoader';

interface Review {
  id: number;
  name: string;
  rating: number;
  message: string;
  employee: string;
  hero: string;
  screenshot: string | null;
  date: string;
}

export default function ReviewList({ refreshKey }: { refreshKey?: number }) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchReviews = async () => {
    try {
      const response = await fetch('/api/reviews');
      const data = await response.json();
      setReviews(data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [refreshKey]);

  const getInitial = (name: string) => {
    return name.charAt(0).toUpperCase();
  };

  const getStars = (rating: number) => {
    return '⭐'.repeat(rating);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  if (loading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ReviewCardSkeleton />
        <ReviewCardSkeleton />
        <ReviewCardSkeleton />
        <ReviewCardSkeleton />
        <ReviewCardSkeleton />
        <ReviewCardSkeleton />
      </div>
    );
  }

  if (reviews.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">Belum ada review. Jadilah yang pertama!</p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {reviews.map((review) => (
        <div 
          key={review.id}
          className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:scale-105 hover:border-purple-500/40 transition-all"
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {getInitial(review.name)}
              </div>
              <div className="ml-3">
                <h4 className="text-white font-semibold">{review.name}</h4>
                <div className="text-yellow-400 text-sm">
                  {getStars(review.rating)}
                </div>
              </div>
            </div>
          </div>

          {/* Message */}
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            "{review.message}"
          </p>

          {/* Screenshot */}
          {review.screenshot && (
            <div className="mb-4">
              <img 
                src={review.screenshot} 
                alt="Screenshot" 
                className="w-full h-40 object-cover rounded-xl border border-purple-500/30 cursor-pointer hover:scale-105 transition"
                onClick={() => window.open(review.screenshot!, '_blank')}
              />
            </div>
          )}

          {/* Meta Info */}
          <div className="space-y-2 pt-4 border-t border-purple-500/20">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span className="bg-purple-500/20 px-2 py-1 rounded">
                👤 {review.employee}
              </span>
              <span className="bg-blue-500/20 px-2 py-1 rounded">
                🎮 {review.hero}
              </span>
            </div>
            <div className="text-xs text-gray-600">
              📅 {formatDate(review.date)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
