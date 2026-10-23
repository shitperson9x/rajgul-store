'use client';

export default function HeroImage() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
      <div className="relative bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-8 overflow-hidden">
        {/* Gusion Image */}
        <div className="aspect-square relative">
          <img 
            src="https://i.ibb.co.com/1tXM9Xn3/Gemini-Generated-Image-2ft82j2ft82j2ft8-1.jpg" 
            alt="Mobile Legends"
            className="w-full h-full object-cover rounded-2xl"
            onError={(e) => {
              e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"%3E%3Crect fill="%23667eea" width="400" height="400"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-size="50" fill="white"%3EOBSIDIA%3C/text%3E%3C/svg%3E';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-2xl font-bold text-white">RAJGUL</h3>
            <p className="text-purple-300">The Kindaw man</p>
          </div>
        </div>
        {/* Floating Elements */}
        <div className="absolute top-4 right-4 bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full px-4 py-2 text-purple-300 text-sm font-semibold">
          ⚡ Pro Player
        </div>
      </div>
    </div>
  );
}
