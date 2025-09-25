import { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { format } from "date-fns";

interface FeaturedBlog {
  id: number;
  title: string;
  description: string;
  image: string;
  author: string;
  authorImage: string;
  date: string;
  tags: string[];
}

interface BlogCardProps {
  featured?: boolean;
}

const BlogCard: FC<BlogCardProps> = ({ featured = true }) => {
  const { data: blogs, isLoading } = useQuery<FeaturedBlog[]>({
    queryKey: ["featuredBlogs"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:3001/featuredBlogs");
      return response.data;
    },
  });

  if (isLoading) {
    return (
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-border animate-pulse">
        <div className="h-48 bg-gray-200" />
        <div className="p-6 space-y-4">
          <div className="h-6 bg-gray-200 rounded w-3/4" />
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="flex items-center justify-between pt-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-200" />
              <div className="h-4 bg-gray-200 rounded w-24" />
            </div>
            <div className="h-4 bg-gray-200 rounded w-20" />
          </div>
        </div>
      </div>
    );
  }

  const blog = blogs?.[0];

  if (!blog) {
    return null;
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-border">
      {/* Image */}
      <div className="relative h-48">
        <img 
          src={blog.image}
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