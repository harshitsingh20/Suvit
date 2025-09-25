import { Button } from "@/components/ui/button";

interface TagFilterProps {
  activeTag?: string;
  onTagChange?: (tag: string) => void;
}

const TagFilter = ({ activeTag = "All", onTagChange }: TagFilterProps) => {
  const tags = ["All", "Tag 1", "Tag 2", "Tag 3", "Tag 4", "Tag 5"];

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {tags.map((tag) => (
        <Button
          key={tag}
          variant={activeTag === tag ? "default" : "secondary"}
          size="sm"
          onClick={() => onTagChange?.(tag)}
          className={`px-4 py-2 rounded-full text-sm ${
            activeTag === tag 
              ? "bg-primary text-primary-foreground" 
              : "bg-tag-bg text-tag-text hover:bg-primary/10"
          }`}
        >
          {tag}
        </Button>
      ))}
    </div>
  );
};

export default TagFilter;