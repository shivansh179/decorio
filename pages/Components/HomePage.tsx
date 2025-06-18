import React from 'react';
import { useState, useEffect } from 'react';
import { ChevronDown, Phone, Mail, MapPin, Star, ArrowRight, Menu, X, Calendar, Shield, Users, Award, Heart, Camera, Play, CheckCircle, Sparkles, Palette, Home, Clock, TrendingUp, Eye, Lightbulb, Zap, Gift, Coffee, Building, Sofa, ChefHat, Bed } from 'lucide-react';

interface ExperienceCenter {
  name: string;
  location: string;
  features: string[];
}

interface Service {
  title: string;
  description: string;
  image: string;
  features: string[];
}

interface Testimonial {
  name: string;
  location: string;
  rating: number;
  review: string;
  image: string;
  projectType: string;
}

const DesignCafeHomepage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('Bangalore');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const experienceCenters: ExperienceCenter[] = [
    {
      name: "MG Road, Bengaluru",
      location: "Bengaluru",
      features: ["11 Kitchen Concepts", "7 Living Rooms", "7 Wardrobe Styles", "Walk-in Wardrobes"]
    },
    {
      name: "Whitefield, Bengaluru", 
      location: "Bengaluru",
      features: ["7 Kitchen Concepts", "8 Living Rooms", "2 BHK Model Flat", "Walk-in Wardrobe"]
    },
    {
      name: "HSR Layout, Bengaluru",
      location: "Bengaluru", 
      features: ["7 Kitchen Concepts", "12 Wardrobe Styles", "1 BHK Model Flat", "4 TV Units"]
    },
    {
      name: "Andheri West, Mumbai",
      location: "Mumbai",
      features: ["6 Kitchen Concepts", "2 Living Rooms", "3 Bedrooms", "1 BHK Model Flat"]
    },
    {
      name: "Mount Road, Chennai",
      location: "Chennai",
      features: ["6 Kitchen Concepts", "3 Living + Dining Rooms", "2 Bedrooms", "1 BHK Model Flats"]
    },
    {
      name: "Gachibowli, Hyderabad",
      location: "Hyderabad",
      features: ["7 Kitchen Concepts", "7 Living Rooms", "3 Bedrooms", "3 BHK Model Flat"]
    }
  ];

  const services: Service[] = [
    {
      title: "Luxury Kitchen Design",
      description: "Modern, functional kitchens that blend aesthetics with efficiency, featuring premium materials and smart storage solutions",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
      features: ["Modular Designs", "Smart Storage", "Premium Appliances", "Custom Islands"]
    },
    {
      title: "Living Room Masterpieces", 
      description: "Elegant living spaces that become the heart of your home, designed to impress and comfort every guest",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
      features: ["Entertainment Units", "Ambient Lighting", "Custom Furniture", "Space Planning"]
    },
    {
      title: "Dream Bedroom Sanctuaries",
      description: "Restful bedrooms designed for ultimate comfort, featuring luxurious materials and personalized touches",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=400&fit=crop",
      features: ["Walk-in Closets", "Reading Nooks", "Luxury Bedding", "Smart Lighting"]
    },
    {
      title: "Smart Wardrobe Solutions",
      description: "Custom storage solutions that maximize space while maintaining elegance and accessibility",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      features: ["Organized Systems", "Mirror Integration", "Shoe Racks", "Jewelry Drawers"]
    }
  ];

  const testimonials: Testimonial[] = [
    {
      name: "Priya Sharma",
      location: "Bangalore",
      rating: 5,
      review: "DesignCafe transformed our 3BHK into a dream home. The attention to detail and quality of work exceeded our expectations. Our kitchen is now the heart of our home!",
      image: "https://images.unsplash.com/photo-1494790108755-2616c669a38b?w=80&h=80&fit=crop&crop=face",
      projectType: "Complete Home Interior"
    },
    {
      name: "Rajesh Kumar",
      location: "Mumbai", 
      rating: 5,
      review: "Professional team, on-time delivery, and exceptional design. They understood our vision perfectly and brought it to life. Highly recommend DesignCafe!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      projectType: "Kitchen & Living Room"
    },
    {
      name: "Meera Patel",
      location: "Chennai",
      rating: 5,
      review: "From consultation to completion, the entire process was smooth. The designers were creative and accommodating to our budget. Beautiful results!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      projectType: "Bedroom & Wardrobe"
    }
  ];

  const cities = ["Bangalore", "Mumbai", "Chennai", "Hyderabad", "Pune", "Kolkata"];

  const stats = [
    { number: "10,000+", label: "Happy Customers", icon: Heart },
    { number: "400+", label: "Interior Designers", icon: Users },
    { number: "15+", label: "Experience Centers", icon: Home },
    { number: "10 Years", label: "Warranty", icon: Shield }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Free Consultation",
      description: "Book a free home visit where our expert designers understand your needs, preferences, and budget",
      icon: Calendar
    },
    {
      step: "02", 
      title: "3D Design",
      description: "Get photorealistic 3D designs of your space with detailed layouts and material specifications",
      icon: Eye
    },
    {
      step: "03",
      title: "Execution",
      description: "Our skilled craftsmen bring your design to life with precision and attention to detail",
      icon: Zap
    },
    {
      step: "04",
      title: "Handover",
      description: "Your dream home is ready with 10-year warranty and lifetime support",
      icon: CheckCircle
    }
  ];

  const whyChooseUs = [
    {
      title: "Expert Design Team",
      description: "Over 400 certified interior designers with expertise in modern, contemporary, and traditional styles",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
      icon: Users,
      stats: ["400+ Designers", "10+ Years Experience", "Certified Professionals"]
    },
    {
      title: "Premium Quality Materials",
      description: "We source only the finest materials from trusted suppliers, ensuring durability and elegance in every project",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
      icon: Award,
      stats: ["ISO Certified", "Premium Brands", "Quality Assured"]
    },
    {
      title: "Technology-Driven Process",
      description: "Advanced 3D visualization, project management apps, and smart home integration for a seamless experience",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      icon: Zap,
      stats: ["3D Visualization", "Smart Home Ready", "App-Based Tracking"]
    },
    {
      title: "Comprehensive Warranty",
      description: "Industry-leading 10-year warranty on all work with lifetime support and maintenance services",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=400&fit=crop",
      icon: Shield,
      stats: ["10 Year Warranty", "Lifetime Support", "Free Maintenance"]
    }
  ];

  const portfolioItems = [
    {
      title: "Modern Minimalist Villa",
      location: "Whitefield, Bangalore",
      type: "Complete Home",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=400&fit=crop",
      description: "A sleek 4BHK villa featuring clean lines, neutral colors, and smart storage solutions that maximize space while maintaining elegance."
    },
    {
      title: "Contemporary Urban Apartment",
      location: "Bandra, Mumbai",
      type: "3BHK Apartment",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
      description: "Urban sophistication meets comfort in this stunning apartment with custom furniture and innovative space utilization."
    },
    {
      title: "Luxury Penthouse Suite",
      location: "Anna Nagar, Chennai",
      type: "Penthouse",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
      description: "Opulent penthouse design featuring premium materials, panoramic city views, and bespoke furniture pieces."
    }
  ];

  return (
    <>
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent">
                Design<span className="text-gray-800">Cafe</span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-orange-600 transition-all duration-300 font-medium relative group">
                Interior Design
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#" className="text-gray-700 hover:text-orange-600 transition-all duration-300 font-medium relative group">
                Experience Centers
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#" className="text-gray-700 hover:text-orange-600 transition-all duration-300 font-medium relative group">
                Portfolio
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#" className="text-gray-700 hover:text-orange-600 transition-all duration-300 font-medium relative group">
                Reviews
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/Contact" className="text-gray-700 hover:text-orange-600 transition-all duration-300 font-medium relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <button className="hidden sm:block bg-gradient-to-r from-orange-600 to-red-500 text-white px-6 py-3 rounded-full hover:from-orange-700 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Book Consultation
              </button>
              <button 
                className="md:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t">
            <div className="px-4 py-4 space-y-4">
              <a href="#" className="block text-gray-700 hover:text-orange-600 font-medium">Interior Design</a>
              <a href="#" className="block text-gray-700 hover:text-orange-600 font-medium">Experience Centers</a>
              <a href="#" className="block text-gray-700 hover:text-orange-600 font-medium">Portfolio</a>
              <a href="#" className="block text-gray-700 hover:text-orange-600 font-medium">Reviews</a>
              <a href="/Contact" className="block text-gray-700 hover:text-orange-600 font-medium">Contact</a>
              <button className="w-full bg-gradient-to-r from-orange-600 to-red-500 text-white px-6 py-3 rounded-full">
                Book Consultation
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-orange-100 via-white to-red-50 overflow-hidden">
        <div className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f97316" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50`}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
            <div className={`transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="flex items-center mb-6">
                <Sparkles className="h-6 w-6 text-orange-600 mr-2" />
                <span className="text-orange-600 font-semibold">India's #1 Interior Design Company</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Complete Home
                <span className="bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent block">
                  Interiors
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your space into a masterpiece with India's best home interior design company. 
                <span className="text-orange-600 font-semibold"> 10,000+ happy customers</span>, 
                <span className="text-orange-600 font-semibold"> 400+ expert designers</span>, and 
                <span className="text-orange-600 font-semibold"> 10 years warranty</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-gradient-to-r from-orange-600 to-red-500 text-white px-8 py-4 rounded-full hover:from-orange-700 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center group">
                  <Calendar className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Book Free Consultation
                </button>
                <button className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-full hover:bg-orange-600 hover:text-white transition-all duration-300 transform hover:scale-105">
                  View Portfolio
                </button>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map((i) => (
                    <img key={i} className="w-10 h-10 rounded-full border-2 border-white object-cover" src={`https://randomuser.me/api/portraits/women/${i + 10}.jpg`} alt="customer"/>
                  ))}
                </div>
                <div>
                  <div className="flex items-center text-yellow-400 mb-1">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">Trusted by 10,000+ families</p>
                </div>
              </div>
            </div>
            
            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=700&h=500&fit=crop" 
                  alt="Modern interior design"
                  className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
                
                {/* Floating elements */}
                <div className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl animate-bounce">
                  <div className="flex items-center">
                    <Star className="text-yellow-400 h-6 w-6 fill-current" />
                    <div className="ml-2">
                      <div className="font-bold text-lg text-red-400">4.8/5</div>
                      <div className="text-sm text-gray-600">Rating</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-orange-600 to-red-500 text-white p-4 rounded-2xl shadow-xl">
                  <div className="text-2xl font-bold">10K+</div>
                  <div className="text-sm opacity-90">Happy Homes</div>
                </div>
                
                <div className="absolute top-1/2 -right-4 bg-white p-3 rounded-full shadow-lg">
                  <Play className="h-6 w-6 text-orange-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group hover:transform hover:scale-110 transition-all duration-300">
                  <div className="bg-gradient-to-r from-orange-600 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl transition-all">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section with Alternating Layout */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-4">
              <Palette className="h-8 w-8 text-orange-600 mr-3" />
              <span className="text-orange-600 font-semibold text-lg">Our Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Premium Interior Design Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to completion, we create beautiful, functional spaces that truly feel like home
            </p>
          </div>
          
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative group">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-96 object-cover rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <ArrowRight className="h-8 w-8" />
                    </div>
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{service.title}</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">{service.description}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <button className="bg-gradient-to-r from-orange-600 to-red-500 text-white px-8 py-3 rounded-full hover:from-orange-700 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                      Explore Designs
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-4">
              <Award className="h-8 w-8 text-orange-600 mr-3" />
              <span className="text-orange-600 font-semibold text-lg">Why Choose DesignCafe</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              India's Most Trusted Interior Brand
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine expertise, quality, and innovation to deliver exceptional home interiors that exceed expectations
            </p>
          </div>

          <div className="space-y-24">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="relative group">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-[450px] object-cover rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-red-500/20 rounded-3xl"></div>
                      <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm p-3 rounded-2xl">
                        <IconComponent className="h-8 w-8 text-orange-600" />
                      </div>
                    </div>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-4xl font-bold text-gray-900 mb-6">{item.title}</h3>
                        <p className="text-xl text-gray-600 leading-relaxed mb-8">{item.description}</p>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {item.stats.map((stat, idx) => (
                          <div key={idx} className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl text-center border border-orange-100">
                            <div className="font-bold text-lg text-gray-900 mb-1">{stat}</div>
                          </div>
                        ))}
                      </div>
                      
                      <button className="bg-gradient-to-r from-orange-600 to-red-500 text-white px-8 py-4 rounded-full hover:from-orange-700 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center">
                        Learn More
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="bg-gradient-to-br from-gray-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-4">
              <Camera className="h-8 w-8 text-orange-600 mr-3" />
              <span className="text-orange-600 font-semibold text-lg">Our Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Stunning Home Transformations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our recent projects and see how we've transformed ordinary spaces into extraordinary homes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl">
                <div className="relative">
                  <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full">{item.type}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <div className="flex items-center text-gray-500 mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{item.location}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{item.description}</p>
                  <a href="#" className="font-semibold text-orange-600 hover:text-red-500 transition-colors flex items-center group-hover:text-red-500">
                    View Project
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-4">
              <Zap className="h-8 w-8 text-orange-600 mr-3" />
              <span className="text-orange-600 font-semibold text-lg">Our Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">A Simple Path to Your Dream Home</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Follow our streamlined, transparent process designed for your convenience and peace of mind.</p>
          </div>
          
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-0 w-full h-0.5 bg-orange-200"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={index} className="text-center bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl hover:border-orange-200 transition-all duration-300 transform hover:-translate-y-2">
                    <div className="relative mb-6">
                      <div className="bg-gradient-to-r from-orange-600 to-red-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg">
                        <IconComponent className="h-10 w-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 bg-white text-orange-600 w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg border-2 border-orange-500">{step.step}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Centers Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
             <div className="flex items-center justify-center mb-4">
              <Building className="h-8 w-8 text-orange-600 mr-3" />
              <span className="text-orange-600 font-semibold text-lg">Our Showrooms</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Visit Our Experience Centers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Touch, feel, and experience our designs and materials firsthand at a showroom near you.</p>
          </div>

          <div className="flex justify-center flex-wrap gap-2 mb-12">
            {cities.map(city => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCity === city
                    ? 'bg-gradient-to-r from-orange-600 to-red-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-orange-100'
                }`}
              >
                {city}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experienceCenters.filter(center => center.location === selectedCity.split(',')[0]).map((center, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-orange-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">{center.name}</h3>
                </div>
                <div className="space-y-3 mb-6">
                  {center.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full text-center bg-transparent border-2 border-orange-600 text-orange-600 px-6 py-3 rounded-full hover:bg-orange-600 hover:text-white transition-all duration-300">
                  Get Directions
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="bg-white py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-orange-100 rounded-full opacity-50 -translate-x-1/4"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-red-100 rounded-full opacity-50 translate-x-1/4"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Heart className="h-8 w-8 text-orange-600 mr-3" />
              <span className="text-orange-600 font-semibold text-lg">Customer Stories</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
          </div>
          
          <div className="relative h-80">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentTestimonial ? 'opacity-100' : 'opacity-0'}`}>
                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 md:p-12 rounded-3xl shadow-xl border border-orange-100 h-full flex flex-col justify-center">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-shrink-0 text-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-24 h-24 rounded-full mx-auto mb-4 shadow-lg border-4 border-white"
                      />
                      <h4 className="text-xl font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-500">{testimonial.location}</p>
                    </div>
                    <div className="relative text-center md:text-left">
                      <div className="absolute -top-6 -left-4 text-orange-200">
                         <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 32 32"><path d="M9.333 22.667h5.333l2-5.333v-8h-7.333v8h4l-2 5.333zM20 22.667h5.333l2-5.333v-8h-7.333v8h4l-2 5.333z"></path></svg>
                      </div>
                      <p className="text-lg text-gray-700 italic leading-relaxed mb-4">"{testimonial.review}"</p>
                      <div className="flex items-center justify-center md:justify-start">
                        <div className="flex text-yellow-400 mr-2">
                          {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                        </div>
                        <span className="font-semibold text-gray-800">{testimonial.projectType}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-orange-600 scale-125' : 'bg-gray-300'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-orange-600 to-red-500 py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M11%2018.5c-1.1%200-2%20.9-2%202s.9%202%202%202%202-.9%202-2-.9-2-2-2zm28%200c-1.1%200-2%20.9-2%202s.9%202%202%202%202-.9%202-2-.9-2-2-2zm28%200c-1.1%200-2%20.9-2%202s.9%202%202%202%202-.9%202-2-.9-2-2-2zM11%2048.5c-1.1%200-2%20.9-2%202s.9%202%202%202%202-.9%202-2-.9-2-2-2zm28%200c-1.1%200-2%20.9-2%202s.9%202%202%202%202-.9%202-2-.9-2-2-2zm28%200c-1.1%200-2%20.9-2%202s.9%202%202%202%202-.9%202-2-.9-2-2-2zm-42%2028c-1.1%200-2%20.9-2%202s.9%202%202%202%202-.9%202-2-.9-2-2-2zm28%200c-1.1%200-2%20.9-2%202s.9%202%202%202%202-.9%202-2-.9-2-2-2zm28%200c-1.1%200-2%20.9-2%202s.9%202%202%202%202-.9%202-2-.9-2-2-2z%22%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E')] opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Create Your Dream Home?</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10">
            Let our expert designers bring your vision to life. Book a free, no-obligation consultation today and take the first step towards a beautiful home interior.
          </p>
          <button className="bg-white text-orange-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-orange-100 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center mx-auto group">
            <Calendar className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
            Book Your Free Consultation Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* About */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-400 bg-clip-text text-transparent">Design<span className="text-white">Cafe</span></h3>
              <p className="text-gray-400">India's most trusted home interior design and renovation service. We bring your dream home to life with expert designers, quality materials, and a 10-year warranty.</p>
              <div className="flex space-x-4">
                {/* Social icons would go here */}
              </div>
            </div>
            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Portfolio</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Our Process</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Experience Centers</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Customer Reviews</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Blog</a></li>
              </ul>
            </div>
            {/* Services */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Our Services</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Kitchen Design</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Living Room Design</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Bedroom Design</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Wardrobe Solutions</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Complete Home Interiors</a></li>
              </ul>
            </div>
            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start"><MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0 text-orange-500" /><span>St. Marks Road, Bengaluru, Karnataka 560001</span></li>
                <li className="flex items-center"><Mail className="h-5 w-5 mr-3 text-orange-500" /><span>hello@designcafe.com</span></li>
                <li className="flex items-center"><Phone className="h-5 w-5 mr-3 text-orange-500" /><span>+91 91082 84705</span></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} DesignCafe. All Rights Reserved. | <a href="#" className="hover:text-orange-500">Privacy Policy</a> | <a href="#" className="hover:text-orange-500">Terms of Service</a></p>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
};

export default DesignCafeHomepage;