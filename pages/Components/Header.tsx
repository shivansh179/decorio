import { ChevronDown, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4">
        {/* Top Navbar */}
        <div className="flex justify-between items-center py-3 border-b">
          <div className="flex items-center space-x-8">
            {/* <svg width="120" height="28" viewBox="0 0 120 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer"> */}
              {/* <path d="M0.857178 27.0547V0.857178H7.71432V27.0547H0.857178Z" fill="#222222"/>
              <path d="M10.2857 27.0547V0.857178H17.1428V11.233H22.7937V16.8839H17.1428V27.0547H10.2857Z" fill="#222222"/>
              <path d="M35.6319 27.0547L26.6024 0.857178H34.4259L39.0435 15.393L43.6612 0.857178H51.4847L42.4552 27.0547H35.6319Z" fill="#222222"/>
              <path d="M60.1873 27.0547C54.8517 27.0547 52.091 22.1384 52.091 13.9559C52.091 5.77341 54.8517 0.857178 60.1873 0.857178C65.5229 0.857178 68.2836 5.77341 68.2836 13.9559C68.2836 22.1384 65.5229 27.0547 60.1873 27.0547ZM60.1873 21.012C62.4862 21.012 62.9099 18.0673 62.9099 13.9559C62.9099 9.84451 62.4862 6.89984 60.1873 6.89984C57.8884 6.89984 57.4647 9.84451 57.4647 13.9559C57.4647 18.0673 57.8884 21.012 60.1873 21.012Z" fill="#EF4F5F"/>
              <path d="M84.4714 27.0547L78.1065 17.5815H74.3235V27.0547H67.4664V0.857178H78.9358C83.2758 0.857178 85.3411 3.58721 85.3411 7.64107C85.3411 11.233 82.6983 13.4347 79.7929 14.1504L86.65 27.0547H84.4714ZM74.3235 11.7247H78.0759C79.8235 11.7247 80.2472 9.87508 80.2472 7.64107C80.2472 5.40706 79.8235 3.55744 78.0759 3.55744H74.3235V11.7247Z" fill="#EF4F5F"/>
              <path d="M89.2857 27.0547V0.857178H96.1428V27.0547H89.2857Z" fill="#EF4F5F"/>
              <path d="M109.849 27.0547L103.484 17.5815H99.7011V27.0547H92.844V0.857178H104.313C108.653 0.857178 110.719 3.58721 110.719 7.64107C110.719 11.233 108.076 13.4347 105.17 14.1504L112.027 27.0547H109.849ZM99.7011 11.7247H103.454C105.201 11.7247 105.625 9.87508 105.625 7.64107C105.625 5.40706 105.201 3.55744 103.454 3.55744H99.7011V11.7247Z" fill="#EF4F5F"/>
            </svg> */}
<div className='text-blue-900 font-extrabold text-3xl gap-0'>
  <span className='text-red-500 font-extrabold text-3xl'>Be</span> Spoke
</div>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-700">
              <a href="#" className="hover:text-liv-pink">Interiors</a>
              <a href="#" className="flex items-center hover:text-liv-pink">Design ideas <ChevronDown size={16} className="ml-1" /></a>
              <a href="#" className="flex items-center hover:text-liv-pink">Magazine <ChevronDown size={16} className="ml-1" /></a>
              <a href="#" className="hover:text-liv-pink">BeSpoke TV</a>
              <a href="#" className="flex items-center hover:text-liv-pink">Cities <ChevronDown size={16} className="ml-1" /></a>
              <a href="#" className="text-liv-pink font-bold border-b-2 border-liv-pink pb-1">BeSpoke Portfolio</a>
              {/* <a href="#" className="hover:text-liv-pink">Store Locator</a> */}
              <a href="#" className="flex items-center hover:text-liv-pink">More <ChevronDown size={16} className="ml-1" /></a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <User size={24} className="text-gray-600 cursor-pointer" />
          </div>
        </div>
        {/* Bottom Navbar */}
        {/* <div className="flex justify-between items-center py-3">
            <nav className="flex items-center space-x-6 text-sm text-gray-600">
                <a href="#" className="hover:text-liv-pink">How it works</a>
                <a href="#" className="flex items-center hover:text-liv-pink">Offerings <ChevronDown size={16} className="ml-1" /></a>
                <a href="#" className="flex items-center hover:text-liv-pink">Price Calculators <ChevronDown size={16} className="ml-1" /></a>
                <a href="#" className="hover:text-liv-pink">The Modular Journey</a>
                <a href="#" className="hover:text-liv-pink">Refer a Friend</a>
                <a href="#" className="hover:text-liv-pink">Own a franchise</a>
            </nav>
            <button className="bg-liv-pink text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors">
                CONSULT ONLINE NOW
            </button>
        </div> */}
      </div>
    </header>
  );
};

export default Header;