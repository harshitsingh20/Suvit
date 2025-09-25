import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import featuredBg from "@/assets/featured-article-bg.jpg";

const FeaturedArticle = () => {
  return (
    <div className="max-w-6xl mx-auto mb-8 sm:mb-16">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-border">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Left side - Content */}
          <div className="p-6 sm:p-8 lg:p-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              Lorem ipsum dolor sit amet consectetur. Lacinia scelerisque massa ultrices nec.
            </h2>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="secondary" className="bg-tag-bg text-tag-text hover:bg-tag-bg">
                Tag 1
              </Badge>
              <Badge variant="secondary" className="bg-tag-bg text-tag-text hover:bg-tag-bg">
                Tag 2
              </Badge>
              <Badge variant="secondary" className="bg-tag-bg text-tag-text hover:bg-tag-bg">
                Tag 3
              </Badge>
            </div>

            <p className="text-author-text leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
              The earliest evidence of this interest stems from the Ebers Papyrus, an Egyptian medical papyrus dating c. 1550 BC, which cited clinical depression. Afflictions of the mind were initially considered the result of demonic possessions or the work of evil spirits.
            </p>

            <div className="flex items-center gap-3">
              <Avatar className="w-10 h-10">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-primary text-primary-foreground">RK</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-foreground">Rohit Kadam</p>
                <p className="text-sm text-author-text">13th Jan 2020</p>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative">
            <img 
              src={featuredBg}
              alt="Financial growth concept"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticle;