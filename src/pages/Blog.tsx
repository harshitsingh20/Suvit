import { FC } from "react";
import Header from "@/components/Header";
import EmailSubscription from "@/components/EmailSubscription";
import ArticleCard from "@/components/ArticleCard";
import { blogData } from "@/lib/blog-data";

const Blog: FC = () => {
  const blogs = blogData.blogs;

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
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
        </div>
      </div>
    </div>
  );
};

export default Blog;