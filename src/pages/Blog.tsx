import { FC } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/Header";
import EmailSubscription from "@/components/EmailSubscription";
import ArticleCard from "@/components/ArticleCard";
import BlogSkeleton from "@/components/BlogSkeleton";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  content: string;
  image: string;
  author: string;
  authorImage: string;
  date: string;
  tags: string[];
}

const Blog: FC = () => {
  const { data: blogs, isLoading, error, refetch } = useQuery<BlogPost[]>({
    queryKey: ["blogs"],
    queryFn: async () => {
      try {
        const response = await axios.get("http://localhost:3001/blogs");
        return response.data;
      } catch (err) {
        console.error("Error fetching blogs:", err);
        throw err;
      }
    },
    retry: 3,
    retryDelay: 1000,
    staleTime: 30000,
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Header /> */}
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-400 to-blue-500 px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
              Stay Up-to-date!
            </h1>
            <p className="text-base sm:text-lg text-white/90 max-w-md">
              The industry insights you need delivered to your inbox monthly.
            </p>
          </div>
          
          <div className="w-full max-w-md">
            <EmailSubscription />
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <div className="px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                <BlogSkeleton key={index} />
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-8">
              <div className="text-red-500 mb-4">Failed to load blog posts</div>
              <button 
                onClick={() => refetch()} 
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Try Again
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs?.map((blog) => (
                <ArticleCard
                  key={blog.id}
                  title={blog.title}
                  description={blog.description}
                  image={blog.image}
                  author={blog.author}
                  authorImage={blog.authorImage}
                  date={blog.date}
                  tags={blog.tags}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;