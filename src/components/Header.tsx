import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-border px-4 sm:px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="text-xl sm:text-2xl font-bold text-primary flex items-center gap-2">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white text-xs sm:text-sm font-bold">S</span>
            </div>
            SUVIT
          </a>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden lg:flex items-center space-x-8">
          <a href="#" className="text-foreground hover:text-primary transition-colors">
            Modules
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">
            Pricing
          </a>
          <a href="/about" className="text-foreground hover:text-primary transition-colors">
            About
          </a>
          <a href="/blog" className="text-foreground hover:text-primary transition-colors">
            Blog
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">
            Resource
          </a>
        </nav>

        {/* Buttons */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <Button variant="outline" className="hidden sm:inline-flex text-sm px-3 py-2">
            Sign up now
          </Button>
          <Button className="text-sm px-3 py-2 sm:px-4 sm:py-2">
            Request Callback
          </Button>
          
          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;