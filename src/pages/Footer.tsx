import { Button } from "../components/ui/button";
import { Facebook, Linkedin, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl mx-4 sm:mx-6 lg:mx-8 mt-4 sm:mt-6 lg:mt-8 mb-16 overflow-hidden">
        <div className="px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-8 leading-tight">
                Enjoy the Benefits of Suvit's Smart Automation Firsthand
              </h1>
              <Button 
                variant="outline" 
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm px-6 py-3 text-lg"
              >
                Explore Insights
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </div>

            {/* Right Side - Single Image */}
            <div className="relative hidden lg:block">
              <img
                src="/src/assets/automation-bg.jpg"
                alt="Automation"
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Footer */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">S</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">SUVIT</h2>
                  <p className="text-author-text">Powering CA's Office</p>
                </div>
              </div>
              
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
                Welcome to the world's largest CA Platform
              </h3>
              
              <Button className="px-8 py-3 text-lg">
                Request Callback
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </div>

            {/* Right Columns - Footer Links */}
            <div className="lg:col-span-3 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Product Features */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Product feature</h4>
                <ul className="space-y-3 text-author-text">
                  <li><a href="#" className="hover:text-primary transition-colors">GST Filing & Compliance</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Client Communication & Practice Management</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Data Automation</a></li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Company</h4>
                <ul className="space-y-3 text-author-text">
                  <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
                  <li><a href="/about" className="hover:text-primary transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Resources</h4>
                <ul className="space-y-3 text-author-text">
                  <li><a href="/blog" className="hover:text-primary transition-colors">Blogs</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Webinars</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Calculator</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Case Studies</a></li>
                </ul>
              </div>

              {/* Pricing */}
              <div>
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-4">Pricing</h4>
                  <ul className="space-y-3 text-author-text">
                    <li><a href="#" className="hover:text-primary transition-colors">Use cases</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors">Customers</a></li>
                  </ul>
                </div>

                {/* Social Media */}
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center text-white hover:bg-blue-800 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;