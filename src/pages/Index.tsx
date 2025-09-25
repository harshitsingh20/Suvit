import { useState } from "react";
import Header from "@/components/Header";
import TagFilter from "@/components/TagFilter";
import FeaturedArticle from "@/components/FeaturedArticle";
import BlogCard from "@/components/BlogCard";
import EmailSubscription from "@/components/EmailSubscription";

const Index = () => {
  const [activeTag, setActiveTag] = useState("All");

  return (
    <div className="min-h-screen bg-gradient-to-br from-hero-bg to-blue-200">
      <Header />
      
      {/* Hero Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            Stay Updated with Suvit's Expert Insights
          </h1>
          <p className="text-lg sm:text-xl text-foreground/80 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Learn about the latest trends in GST, accounting automation, and CA best practices.
          </p>
          
          <EmailSubscription />
        </div>
      </section>

      {/* Filters */}
      <section className="px-4 sm:px-6 mb-12 sm:mb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-center text-foreground mb-6 sm:mb-8">
            Filters based on tags
          </h2>
          <TagFilter activeTag={activeTag} onTagChange={setActiveTag} />
        </div>
      </section>

      {/* Featured Article */}
      <section className="px-4 sm:px-6 mb-12 sm:mb-16">
        <FeaturedArticle />
      </section>

      {/* Blog Grid */}
      <section className="px-4 sm:px-6 pb-12 sm:pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
