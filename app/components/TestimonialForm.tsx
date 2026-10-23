'use client';

import { useState, useEffect } from 'react';

interface Employee {
  id: string;
  name: string;
  speciality: string;
  winRate: number;
  totalGames: number;
}

export default function TestimonialForm({ onReviewAdded }: { onReviewAdded?: () => void }) {
  const [formData, setFormData] = useState({
    name: '',
    rating: 5,
    message: '',
    employee: '',
    hero: ''
  });
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [heroes, setHeroes] = useState<string[]>([]);

  useEffect(() => {
    // Fetch employees and heroes
    fetch('/api/employees')
      .then(res => res.json())
      .then(data => setEmployees(data))
      .catch(err => console.error('Error loading employees:', err));

    fetch('/api/heroes')
      .then(res => res.json())
      .then(data => setHeroes(data))
      .catch(err => console.error('Error loading heroes:', err));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit to API
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          screenshot
        }),
      });

      if (response.ok) {
        // Show success message
        setShowSuccess(true);
        
        // Reset form
        setFormData({ name: '', rating: 5, message: '', employee: '', hero: '' });
        setScreenshot(null);
        
        // Notify parent to refresh reviews
        if (onReviewAdded) {
          onReviewAdded();
        }
        
        // Hide success message after 5 seconds
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        alert('Gagal mengirim review. Silakan coba lagi.');
      }
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('Gagal mengirim review. Silakan coba lagi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file size (max 2MB)
      if (file.size > 2 * 1024 * 1024) {
        alert('Ukuran file maksimal 2MB');
        return;
      }

      // Convert to base64
      const reader = new FileReader();
      reader.onloadend = () => {
        setScreenshot(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8">
      <div className="text-center mb-6">
        <h4 className="text-2xl font-bold text-white mb-2">Bagikan Pengalaman Kamu!</h4>
        <p className="text-gray-400">Tulis testimoni dan bantu customer lain untuk percaya pada kami 💜</p>
      </div>

      {showSuccess && (
        <div className="mb-6 bg-green-500/20 border border-green-500/50 rounded-xl p-4 text-center">
          <p className="text-green-300 font-semibold">✅ Terima kasih! Review kamu sudah ditampilkan di bawah.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-white font-semibold mb-2">
            Nama / Nickname <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Contoh: Andi"
            className="w-full bg-white/10 border border-purple-500/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition"
          />
        </div>

        {/* Employee Selection */}
        <div>
          <label htmlFor="employee" className="block text-white font-semibold mb-2">
            Player / Pegawai <span className="text-red-400">*</span>
          </label>
          <select
            id="employee"
            name="employee"
            value={formData.employee}
            onChange={handleChange}
            required
            className="w-full bg-white/10 border border-purple-500/30 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition"
          >
            <option value="" className="bg-gray-900">Pilih player...</option>
            {employees.map(emp => (
              <option key={emp.id} value={emp.name} className="bg-gray-900">
                {emp.name} - {emp.speciality} (WR: {emp.winRate}%)
              </option>
            ))}
          </select>
        </div>

        {/* Hero Selection */}
        <div>
          <label htmlFor="hero" className="block text-white font-semibold mb-2">
            Hero yang Dipakai <span className="text-red-400">*</span>
          </label>
          <select
            id="hero"
            name="hero"
            value={formData.hero}
            onChange={handleChange}
            required
            className="w-full bg-white/10 border border-purple-500/30 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition"
          >
            <option value="" className="bg-gray-900">Pilih hero...</option>
            {heroes.map(hero => (
              <option key={hero} value={hero} className="bg-gray-900">
                {hero}
              </option>
            ))}
          </select>
        </div>

        {/* Rating */}
        <div>
          <label htmlFor="rating" className="block text-white font-semibold mb-2">
            Rating <span className="text-red-400">*</span>
          </label>
          <select
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="w-full bg-white/10 border border-purple-500/30 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition"
          >
            <option value={5} className="bg-gray-900">⭐⭐⭐⭐⭐ (5 bintang)</option>
            <option value={4} className="bg-gray-900">⭐⭐⭐⭐ (4 bintang)</option>
            <option value={3} className="bg-gray-900">⭐⭐⭐ (3 bintang)</option>
            <option value={2} className="bg-gray-900">⭐⭐ (2 bintang)</option>
            <option value={1} className="bg-gray-900">⭐ (1 bintang)</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-white font-semibold mb-2">
            Testimoni <span className="text-red-400">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            placeholder="Ceritakan pengalaman kamu menggunakan jasa kami..."
            className="w-full bg-white/10 border border-purple-500/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition resize-none"
          />
        </div>

        {/* Screenshot Upload */}
        <div>
          <label htmlFor="screenshot" className="block text-white font-semibold mb-2">
            Screenshot Hasil Pertandingan (Opsional)
          </label>
          <input
            type="file"
            id="screenshot"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full bg-white/10 border border-purple-500/30 rounded-xl px-4 py-3 text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-purple-500 file:text-white hover:file:bg-purple-600 file:cursor-pointer focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition"
          />
          <p className="text-gray-500 text-xs mt-2">Max 2MB, format: JPG, PNG, WebP</p>
          
          {screenshot && (
            <div className="mt-4 relative">
              <img 
                src={screenshot} 
                alt="Preview" 
                className="w-full h-48 object-cover rounded-xl border border-purple-500/30"
              />
              <button
                type="button"
                onClick={() => setScreenshot(null)}
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition"
              >
                ✕
              </button>
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-4 rounded-xl font-bold transition shadow-lg ${
            isSubmitting 
              ? 'opacity-50 cursor-not-allowed' 
              : 'hover:scale-105 hover:shadow-purple-500/50'
          }`}
        >
          {isSubmitting ? '⏳ Mengirim...' : '📤 Kirim Review'}
        </button>
      </form>
    </div>
  );
}
