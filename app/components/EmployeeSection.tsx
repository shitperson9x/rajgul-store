'use client';

import { useState, useEffect } from 'react';
import { EmployeeCardSkeleton } from './SkeletonLoader';

interface Employee {
  id: string;
  name: string;
  speciality: string;
  winRate: number;
  totalGames: number;
  photo?: string;
}

export default function EmployeeSection() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/employees')
      .then(res => res.json())
      .then(data => {
        setEmployees(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading employees:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-white mb-4">
            Tim <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Pro Player</span> Kami
          </h3>
          <p className="text-gray-400 text-lg">Player berpengalaman dengan win rate tinggi siap bantu kamu!</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <EmployeeCardSkeleton />
          <EmployeeCardSkeleton />
          <EmployeeCardSkeleton />
          <EmployeeCardSkeleton />
        </div>
      </section>
    );
  }

  return (
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h3 className="text-4xl font-bold text-white mb-4">
          Tim <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Pro Player</span> Kami
        </h3>
        <p className="text-gray-400 text-lg">Player berpengalaman dengan win rate tinggi siap bantu kamu!</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {employees.map((employee, index) => (
          <div 
            key={employee.id}
            className="group bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 text-center hover:scale-105 hover:border-purple-500/50 transition-all"
          >
            {/* Avatar - BIGGER */}
            <div className="relative mx-auto w-40 h-40 mb-6 -mt-2">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full animate-pulse opacity-40 blur-xl"></div>
              
              {employee.photo ? (
                // Real Photo
                <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-purple-400/30 shadow-2xl shadow-purple-500/50 group-hover:shadow-purple-500/70 transition-all">
                  <img 
                    src={employee.photo} 
                    alt={employee.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                // Initial Letter
                <div className="relative w-40 h-40 bg-gradient-to-br from-purple-500 via-purple-600 to-blue-600 rounded-full flex items-center justify-center text-6xl font-bold text-white border-4 border-purple-400/30 shadow-2xl shadow-purple-500/50 group-hover:shadow-purple-500/70 transition-all">
                  {employee.name.charAt(0)}
                </div>
              )}
              
              {/* Online indicator */}
              <div className="absolute bottom-2 right-2 w-8 h-8 bg-green-500 border-4 border-gray-900 rounded-full animate-pulse"></div>
            </div>

            {/* Name & Speciality */}
            <h4 className="text-2xl font-bold text-white mb-2">{employee.name}</h4>
            <p className="text-purple-400 text-sm mb-6 font-medium">{employee.speciality}</p>

            {/* Stats */}
            <div className="space-y-3">
              <div className="bg-white/5 border border-purple-500/20 rounded-lg p-4 hover:bg-white/10 transition">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                  {employee.winRate}%
                </div>
                <div className="text-xs text-gray-500 font-medium mt-1">Win Rate</div>
              </div>
              <div className="bg-white/5 border border-purple-500/20 rounded-lg p-4 hover:bg-white/10 transition">
                <div className="text-xl font-bold text-white">
                  {employee.totalGames}+
                </div>
                <div className="text-xs text-gray-500 font-medium mt-1">Total Games</div>
              </div>
            </div>

            {/* Badge */}
            <div className="mt-6">
              <span className="inline-block bg-gradient-to-r from-purple-500 to-blue-600 text-white text-xs px-4 py-2 rounded-full font-bold shadow-lg">
                ⭐ Pro Player
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
