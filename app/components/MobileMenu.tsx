'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Burger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden relative w-10 h-10 text-gray-300 focus:outline-none z-50"
        aria-label="Toggle menu"
      >
        <div className="absolute w-6 h-0.5 bg-current transition-all duration-300" style={{
          top: isOpen ? '50%' : '35%',
          transform: isOpen ? 'translateY(-50%) rotate(45deg)' : 'none'
        }}></div>
        <div className="absolute w-6 h-0.5 bg-current top-1/2 -translate-y-1/2 transition-all duration-300" style={{
          opacity: isOpen ? 0 : 1
        }}></div>
        <div className="absolute w-6 h-0.5 bg-current transition-all duration-300" style={{
          bottom: isOpen ? '50%' : '35%',
          transform: isOpen ? 'translateY(50%) rotate(-45deg)' : 'none'
        }}></div>
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu Panel */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-gradient-to-br from-purple-900 to-black border-l border-purple-500/30 z-40 transform transition-transform duration-300 md:hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col p-8 pt-20 space-y-6">
          <Link 
            href="#paket" 
            onClick={closeMenu}
            className="text-white hover:text-purple-400 transition font-medium text-lg"
          >
            Paket
          </Link>
          <Link 
            href="#cara-order" 
            onClick={closeMenu}
            className="text-white hover:text-purple-400 transition font-medium text-lg"
          >
            Cara Order
          </Link>
          <Link 
            href="#kontak" 
            onClick={closeMenu}
            className="text-white hover:text-purple-400 transition font-medium text-lg"
          >
            Kontak
          </Link>
          
          <div className="pt-6 border-t border-purple-500/30">
            <a
              href="https://wa.me/6281235014075?text=Halo epos*rajgul store, saya mau tanya tentang jasa boosting ML"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-500 hover:bg-green-600 text-white text-center py-3 rounded-lg font-semibold transition"
            >
              💬 Chat WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
