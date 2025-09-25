import { FC } from "react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ArticleCardProps {
  title: string;
  description: string;
  image: string;
  author: string;
  authorImage: string;
  date: string;
  tags: string[];
}

const ArticleCard: FC<ArticleCardProps> = ({
  title,
  description,
  image,
  author,
  authorImage,
  date,
  tags,
}) => {
  return (
    <div className="bg-white rounded-lg border-2 border-primary/20 hover:border-primary/40 transition-colors p-6 shadow-sm">
      <h3 className="text-xl font-bold text-foreground mb-4 leading-tight">
        {title}
      </h3>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <Badge
            key={index}
            variant="secondary"
            className="bg-tag-bg text-tag-text hover:bg-tag-bg text-xs"
          >
            {tag}
          </Badge>
        ))}
      </div>

      <p className="text-author-text text-sm leading-relaxed mb-6">
        {description}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar className="w-8 h-8">
            <AvatarImage src={authorImage} />
            <AvatarFallback>{author[0].toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-semibold">{author}</p>
            <p className="text-xs text-muted-foreground">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;