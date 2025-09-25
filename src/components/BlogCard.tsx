import { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { format } from "date-fns";
import { blogData } from "@/lib/blog-data";
import automationBg from "@/assets/automation-bg.jpg";
import featuredArticleBg from "@/assets/featured-article-bg.jpg";

interface BlogCardProps {
  featured?: boolean;
}

const BlogCard: FC<BlogCardProps> = ({ featured = true }) => {
  const blog = featured 
    ? blogData.featuredBlogs[0] 
    : blogData.blogs[Math.floor(Math.random() * blogData.blogs.length)];

  if (!blog) {
    return null;
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-border">
      {/* Image */}
      <div className="relative h-48">
        <img 
          src={blog.image.includes('automation-bg') ? automationBg : featuredArticleBg}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-3 leading-tight">
          {blog.title}
        </h3>
        
        <p className="text-author-text text-sm leading-relaxed mb-6">
          {blog.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="w-8 h-8">
              <AvatarImage src={blog.authorImage} alt={blog.author} />
              <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                {blog.author.split(" ").map(n => n[0]).join("")}
              </AvatarFallback>
            </Avatar>
            <span className="font-medium text-sm text-foreground">{blog.author}</span>
          </div>
          <span className="text-sm text-author-text">
            {format(new Date(blog.date), "dd MMM yyyy")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;