const Hero = () => {
    return (
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-sm text-gray-500 mb-4">Home / BeSpoke Portfolio</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            BeSpoke Interior Design Portfolio
          </h1> 
          <p className="text-lg text-gray-600 max-w-4xl mb-12">
            Proposed and completed residential projects by BeSpoke, featuring innovative designs, latest trends, and personalized aesthetics to match your lifestyle.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Delivered Projects Card */}
            <div className="bg-white rounded-lg overflow-hidden cursor-pointer group">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Orange modular kitchen"
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute top-4 right-4 bg-liv-green text-white text-xs font-bold px-3 py-1 rounded-full">
                  COMPLETED
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Delivered Projects</h3>
                <p className="text-gray-600">
                  A collection of completed projects by BeSpoke highlighting style and precision.
                </p>
              </div>
            </div>
  
            {/* Upcoming Projects Card */}
            <div className="bg-white rounded-lg overflow-hidden cursor-pointer group">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=3027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Modern living room with a teal sofa"
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute top-4 right-4 bg-liv-orange text-white text-xs font-bold px-3 py-1 rounded-full">
                  UPCOMING
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Upcoming Properties</h3>
                <p className="text-gray-600">
                  Proposed projects by BeSpoke featuring innovative designs and detailed plans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;