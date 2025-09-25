const BlogSkeleton = () => {
  return (
    <div className="bg-white rounded-lg border-2 border-primary/20 hover:border-primary/40 transition-colors p-6 shadow-sm animate-pulse">
      {/* Title Skeleton */}
      <div className="h-7 bg-gray-200 rounded-md w-3/4 mb-4"></div>
      
      {/* Tags Skeleton */}
      <div className="flex flex-wrap gap-2 mb-4">
        <div className="h-6 bg-gray-200 rounded-full w-16"></div>
        <div className="h-6 bg-gray-200 rounded-full w-20"></div>
        <div className="h-6 bg-gray-200 rounded-full w-24"></div>
      </div>

      {/* Description Skeleton */}
      <div className="space-y-2 mb-6">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      </div>

      {/* Author Info Skeleton */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          <div className="h-4 bg-gray-200 rounded w-24"></div>
        </div>
        <div className="h-4 bg-gray-200 rounded w-20"></div>
      </div>
    </div>
  );
};

export default BlogSkeleton;
