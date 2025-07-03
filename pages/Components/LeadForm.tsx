import { Check, ChevronDown } from "lucide-react";

const LeadForm = () => {
  return (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto bg-liv-purple-dark rounded-2xl shadow-2xl flex flex-col lg:flex-row overflow-hidden">
                {/* Image side */}
                <div className="w-full lg:w-1/2">
                    <img 
                        src="https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        alt="Luxurious living room interior"
                        className="w-full h-full object-cover min-h-[400px]"
                    />
                </div>
                {/* Form side */}
                <div className="w-full lg:w-1/2 p-8 md:p-12 text-blue-900">
                    <h2 className="text-3xl font-bold mb-2">Designs for Every Budget</h2>
                    <p className="mb-8">Get your dream home today. Let our experts help you</p>

                    <form action="#" method="POST" className="space-y-6">
                        <input type="text" placeholder="Name" className="w-full bg-white text-gray-800 p-3 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-liv-pink" />
                        <input type="email" placeholder="Email" className="w-full bg-white text-gray-800 p-3 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-liv-pink" />
                        
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <span>🇮🇳</span>
                                <ChevronDown size={16} className="ml-1 text-gray-500"/>
                            </div>
                            <input type="tel" placeholder="Phone Number" className="w-full bg-white text-gray-800 p-3 pl-14 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-liv-pink" />
                        </div>

                        <label htmlFor="whatsapp-updates" className="flex items-center space-x-3 cursor-pointer">
                            <div className="w-5 h-5 border-2 border-white rounded flex items-center justify-center">
                                {/* This is a fake checkmark for styling */}
                                <Check size={16} className="text-white"/>
                            </div>
                            <span className="text-sm">Send me updates on WhatsApp</span>
                        </label>
                        
                        <input type="text" placeholder="Property Name" className="w-full bg-white text-gray-800 p-3 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-liv-pink" />

                        <button type="submit" className="w-full bg-liv-pink text-white font-bold py-4 rounded-md text-lg hover:bg-opacity-90 transition-colors">
                            SPEAK TO OUR DESIGNER
                        </button>
                    </form>
                    <p className="text-xs text-gray-300 mt-4 text-center">
                        By submitting this form, you agree to the <a href="#" className="underline">privacy policy</a> & <a href="#" className="underline">terms and conditions</a>
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default LeadForm;