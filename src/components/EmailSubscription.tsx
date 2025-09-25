import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const EmailSubscription = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
      <Input 
        type="email" 
        placeholder="Email Address" 
        className="flex-1 bg-white border-gray-200 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base"
      />
      <Button className="px-6 sm:px-8 py-2 sm:py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg text-sm sm:text-base">
        Subscribe
      </Button>
    </div>
  );
};

export default EmailSubscription;