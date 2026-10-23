export function ReviewCardSkeleton() {
  return (
    <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 animate-pulse">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gray-700 rounded-full"></div>
          <div className="ml-3">
            <div className="h-4 w-20 bg-gray-700 rounded mb-2"></div>
            <div className="h-3 w-16 bg-gray-700 rounded"></div>
          </div>
        </div>
      </div>
      <div className="space-y-2 mb-4">
        <div className="h-3 bg-gray-700 rounded w-full"></div>
        <div className="h-3 bg-gray-700 rounded w-5/6"></div>
        <div className="h-3 bg-gray-700 rounded w-4/6"></div>
      </div>
      <div className="h-40 bg-gray-700 rounded-xl mb-4"></div>
      <div className="flex gap-2">
        <div className="h-6 w-20 bg-gray-700 rounded"></div>
        <div className="h-6 w-20 bg-gray-700 rounded"></div>
      </div>
    </div>
  );
}

export function EmployeeCardSkeleton() {
  return (
    <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 text-center animate-pulse">
      <div className="relative mx-auto w-40 h-40 mb-6">
        <div className="w-40 h-40 bg-gray-700 rounded-full"></div>
      </div>
      <div className="h-6 w-32 bg-gray-700 rounded mx-auto mb-2"></div>
      <div className="h-4 w-24 bg-gray-700 rounded mx-auto mb-6"></div>
      <div className="space-y-3">
        <div className="bg-white/5 border border-purple-500/20 rounded-lg p-4">
          <div className="h-8 w-16 bg-gray-700 rounded mx-auto mb-2"></div>
          <div className="h-3 w-20 bg-gray-700 rounded mx-auto"></div>
        </div>
        <div className="bg-white/5 border border-purple-500/20 rounded-lg p-4">
          <div className="h-6 w-16 bg-gray-700 rounded mx-auto mb-2"></div>
          <div className="h-3 w-24 bg-gray-700 rounded mx-auto"></div>
        </div>
      </div>
    </div>
  );
}
