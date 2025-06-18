import React, { useState } from 'react';


interface IconProps {
    path: string;
    className?: string; // The '?' makes it optional
  }
  
  const Icon = ({ path, className = "w-6 h-6" }: IconProps) =>  (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d={path} />
    </svg>
);

const LivspaceLandingPage = () => {
    const [openFaq, setOpenFaq] = useState(0);

    const handleFaqToggle = (index: number) => {
        setOpenFaq(openFaq === index ? 0 : index);
    };

    const stats = [
        { value: "15765+", label: "#DeliveredHomes" },
        { value: "150+", label: "Expert Interior Designers" },
        { value: "5", label: "Experience Centres" },
        { value: "4.6+", label: "CSAT" },
    ];

    const budgetHomes = [
        { type: "2BHK", price: "3.57L*", image: "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1854&q=80" },
        { type: "3BHK", price: "4.23L*", image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80" },
        { type: "4BHK", price: "4.81L*", image: "https://plus.unsplash.com/premium_photo-1661902745118-a736d6956c03?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bHV4dXJ5JTIwZmxhdHN8ZW58MHx8MHx8fDA%3D" },
    ];

    const services = [ "Modular kitchens", "Modular wardrobes", "Lighting", "Flooring", "Electrical work", "Civil work", "False ceiling", "Wall design & painting" ];
    const priceBenefits = [ "Flexible payment options - EMI solutions and payment schemes from leading financial partners.", "No hidden costs - Transparent costing without last-minute additions." ];
    const warrantyInfo = [ "Flat 10-year warranty* - Stay worry-free with our warranty policy on modular products.", "Up to 1-year on-site service warranty* - Warranty on on-site services such as painting, electrical, plumbing and more." ];

    const partners = [
        { name: "Jaquar", logo: <span className="font-bold text-lg text-gray-700">Jaquar</span> },
        { name: "Saint-Gobain", logo: <span className="font-bold text-lg text-blue-700">SAINT-GOBAIN</span> },
        { name: "CenturyPly", logo: <span className="font-bold text-lg text-red-600">CenturyPLY</span> },
        { name: "Bosch", logo: <span className="font-bold text-lg text-red-700">BOSCH</span> },
        { name: "Siemens", logo: <span className="font-bold text-lg text-cyan-600">SIEMENS</span> },
        { name: "Hettich", logo: <span className="font-bold text-lg text-yellow-500">Hettich</span> },
        { name: "Greenlam", logo: <span className="font-bold text-lg text-green-600">Greenlam</span> },
        { name: "Samsung", logo: <span className="font-bold text-lg text-blue-800">SAMSUNG</span> },
    ];
    
    const estimateItems = [
        { title: "Full Home", description: "Get an approximate costing for your full home interiors.", icon: "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6M9 12h6m-6 5.25h6M5.25 3a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V5.25A2.25 2.25 0 0018.75 3H5.25z" },
        { title: "Kitchen", description: "Get an approximate costing for your kitchen interior.", icon: "M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" },
        { title: "Wardrobe", description: "Get an approximate costing for your wardrobe.", icon: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" },
    ];

    const howItWorksSteps = [
        { label: "Meet a designer", payment: null, icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" },
        { label: "Book Livspace", payment: "(5% payment*)", icon: "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" },
        { label: "Execution begins", payment: "(60% payment)", icon: "M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" },
        { label: "Final installations", payment: "(100% payment)", icon: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" },
        { label: "Move in and enjoy!", payment: null, icon: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-1.875a3.375 3.375 0 013.375-3.375h9.75a3.375 3.375 0 013.375 3.375v1.875" },
    ];

    const faqs = [
        { q: "How much does interior design cost in Bangalore?", a: "The cost varies greatly depending on the scope, materials, and size of your home. A 2BHK modular interior can start from around ₹3.5L, but a full-scope project with civil work will be higher. We provide a detailed quote after understanding your requirements." },
        { q: "How to find an interior designer in Bangalore?", a: "You can find designers through online platforms like Livspace, referrals, or local directories. Livspace offers a curated experience by matching you with a designer who fits your style and budget, ensuring quality and timely delivery." },
        { q: "How much does a 2BHK interior cost in Bangalore?", a: "Our modular interior packages for a new 2BHK home start at approximately ₹3.57L. This typically includes essentials like modular kitchen and wardrobes. The final price depends on your specific choices of materials, finishes, and scope of work." },
        { q: "What will be the timelines for my project completion?", a: "We are proud of our 45-day move-in guarantee for projects with a specific scope of modular products. For projects involving civil work or more complex designs, the timeline will be discussed and agreed upon with your designer." },
        { q: "What services are included under home interior design?", a: "Our services cover everything from design consultation to execution. This includes modular furniture (kitchens, wardrobes), lighting, flooring, false ceilings, civil work, painting, and decor. We are a one-stop solution for all your interior needs." },
    ];

    return (
        <div className="bg-gray-50 text-gray-800 font-sans">
            {/* Header */}
            <header className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex-shrink-0">
                            <h1 className="text-2xl font-bold tracking-tight text-gray-900">LIVSPACE</h1>
                        </div>
                        <button className="bg-teal-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-teal-600 transition duration-300">
                            GET FREE QUOTE
                        </button>
                    </div>
                </div>
            </header>

            <main>
                {/* Hero Section */}
                <section className="relative bg-cover bg-center text-white" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}>
                    <div className="absolute inset-0 bg-opacity-60"></div>
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                                    Interior Designers in 
                                    <span className="block text-teal-400">Bangalore</span>
                                </h2>
                                <p className="mt-6 text-lg sm:text-xl max-w-xl">
                                    Hassle-free home interiors guaranteed with our best interior designers in Bangalore.
                                </p>
                            </div>
                            <div className="bg-white rounded-2xl p-8 shadow-2xl text-gray-800">
                                <h3 className="text-2xl font-bold mb-6">Designs for Every Budget</h3>
                                <form action="#" method="POST" className="space-y-6">
                                    <input type="text" placeholder="Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500 transition" />
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">🇮🇳 +91</div>
                                        <input type="tel" placeholder="Phone number" className="w-full pl-14 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500 transition" />
                                    </div>
                                    <label className="flex items-center space-x-3 text-sm">
                                        <input type="checkbox" className="h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500" defaultChecked/>
                                        <span>Send me updates on WhatsApp</span>
                                    </label>
                                    <button type="submit" className="w-full bg-teal-500 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-teal-600 transition duration-300">
                                        NEXT
                                    </button>
                                    <p className="text-xs text-gray-500 text-center">By submitting this form, you agree to the privacy policy & terms and conditions</p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Guarantees Section */}
                <section className="bg-white">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                            <div className="flex flex-col items-center space-y-2">
                                <Icon path="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18M12 12.75h.008v.008H12v-.008z" className="w-10 h-10 text-teal-500"/>
                                <p className="font-semibold">45 days move-in guarantee²</p>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <Icon path="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" className="w-10 h-10 text-teal-500"/>
                                <p className="font-semibold">Flat 10-year warranty¹</p>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <Icon path="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.75A.75.75 0 013 4.5h.75m0 0h.75A.75.75 0 015.25 6v.75m0 0H6A.75.75 0 016.75 6v-.75m0 0h.75a.75.75 0 01.75.75v.75m0 0H9A.75.75 0 019.75 6v-.75m0 0h.75a.75.75 0 01.75.75v.75M12 6.75v-1.5A.75.75 0 0112.75 4.5h.75a.75.75 0 01.75.75v1.5m0 0v.75A.75.75 0 0113.5 8.25h-.75a.75.75 0 01-.75-.75v-.75m3 3.75v-1.5A.75.75 0 0115.75 9h.75a.75.75 0 01.75.75v1.5m0 0v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75m3 3.75v-1.5A.75.75 0 0118.75 12h.75a.75.75 0 01.75.75v1.5m0 0v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75M4.5 19.5v-2.25a.75.75 0 01.75-.75h13.5a.75.75 0 01.75.75v2.25" className="w-10 h-10 text-teal-500"/>
                                <p className="font-semibold">No Hidden Cost</p>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* Why Choose Us */}
                <section className="bg-teal-500 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Why Choose Livspace in Bangalore?</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <p className="text-4xl sm:text-5xl font-bold">{stat.value}</p>
                                    <p className="mt-2 text-sm sm:text-base text-teal-100">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Homes for every budget */}
                <section className="py-16 sm:py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-bold">Homes for every budget</h2>
                            <p className="mt-4 text-lg text-gray-600">Our interior designers work with you keeping in mind your requirements and budget</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {budgetHomes.map((home, index) => (
                                <div key={index} className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                    <div className="relative">
                                        <img src={home.image} alt={home.type} className="w-full h-64 object-cover" />
                                        <div className="absolute top-4 left-4 bg-gray-900 bg-opacity-70 text-white text-sm font-semibold py-1.5 px-4 rounded-full">
                                            Starting at {home.price}
                                        </div>
                                    </div>
                                    <div className="p-6 bg-white">
                                        <h3 className="text-xl font-bold">{home.type}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                         <p className="text-center text-sm text-gray-500 mt-8">*The prices include only modular interiors for new homes.</p>
                    </div>
                </section>

                {/* What we offer */}
                <section className="bg-gray-100 py-16 sm:py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                         <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">What we offer</h2>
                         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-2xl shadow-md">
                                <h3 className="text-xl font-bold mb-4">Our services</h3>
                                <ul className="space-y-3 list-disc list-inside text-gray-600">
                                    {services.map(s => <li key={s}>{s}</li>)}
                                </ul>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-md">
                                <h3 className="text-xl font-bold mb-4">Price benefits</h3>
                                <ul className="space-y-3 list-disc list-inside text-gray-600">
                                    {priceBenefits.map(b => <li key={b}>{b}</li>)}
                                </ul>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-md">
                                <h3 className="text-xl font-bold mb-4">Warranty</h3>
                                <ul className="space-y-3 list-disc list-inside text-gray-600">
                                    {warrantyInfo.map(w => <li key={w}>{w}</li>)}
                                </ul>
                            </div>
                         </div>
                    </div>
                </section>
                
                {/* Trusted Partners */}
                <section className="py-16 sm:py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-bold">Our trusted partners</h2>
                            <p className="mt-4 text-lg text-gray-600">Winning collaborations that produce winning designs.</p>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-8 items-center">
                            {partners.map((partner) => (
                                <div key={partner.name} className="flex justify-center items-center p-4 bg-white rounded-lg shadow-sm border border-gray-200 h-24">
                                    {partner.logo}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Get an estimate */}
                <section className="bg-gray-100 py-16 sm:py-20">
                     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-bold">Get an estimate for your Bangalore home</h2>
                            <p className="mt-4 text-lg text-gray-600">Calculate the approximate cost of doing up your interiors</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {estimateItems.map((item) => (
                                <div key={item.title} className="bg-white p-8 rounded-2xl shadow-md text-center flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
                                    <div className="bg-teal-100 text-teal-600 rounded-full p-4 mb-4">
                                        <Icon path={item.icon} className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-gray-600 mb-6 flex-grow">{item.description}</p>
                                    <button className="w-full mt-auto bg-teal-500 ...">
    CALCULATE {'>'}
</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How it works */}
                <section className="py-16 sm:py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">How it works</h2>
                        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-4">
                            {howItWorksSteps.map((step, index) => (
                                <React.Fragment key={index}>
                                    <div className="flex flex-col items-center text-center w-48">
                                        <div className="relative bg-white border-2 border-gray-300 rounded-full w-24 h-24 flex items-center justify-center">
                                            <Icon path={step.icon} className="w-10 h-10 text-teal-500" />
                                            {step.payment && <span className="absolute -bottom-3 bg-teal-500 text-white text-xs font-semibold py-0.5 px-2 rounded-full">{step.payment}</span>}
                                        </div>
                                        <p className="font-semibold mt-8">{step.label}</p>
                                    </div>
                                    {index < howItWorksSteps.length - 1 && (
                                        <div className="hidden md:block flex-1 h-0.5 bg-gray-300"></div>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                        <div className="text-center mt-16">
                            <button className="bg-teal-500 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-teal-600 transition duration-300">
                                BOOK A CONSULTATION
                            </button>
                        </div>
                    </div>
                </section>

                {/* Download Guide */}
                <section className="bg-amber-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div className="md:pr-12">
                                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Download home interior guide</h2>
                                <p className="mt-4 text-lg text-gray-600">Don't forget to consider these fundamental design guidelines to know before you start interior designing!</p>
                                <button className="mt-8 bg-teal-500 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-teal-600 transition duration-300 flex items-center space-x-2">
                                    <Icon path="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" className="w-5 h-5"/>
                                    <span>DOWNLOAD NOW</span>
                                </button>
                            </div>
                            <div>
                                <img className="rounded-2xl shadow-xl w-full h-auto object-cover" src="https://images.unsplash.com/photo-1588854337236-6889d631f3e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="Modern kitchen interior"/>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Connect with us */}
                <section className="py-16 sm:py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold">Connect with us</h2>
                        <p className="mt-4 text-lg text-gray-600">Reach out on WhatsApp or give us a call for the best home design experience.</p>
                        <div className="mt-8 flex justify-center space-x-4">
                            <button className="bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-gray-900 transition duration-300">CALL NOW</button>
                            <button className="bg-green-500 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-green-600 transition duration-300">WHATSAPP</button>
                        </div>
                    </div>
                </section>

                {/* FAQs Section */}
                <section className="bg-gray-100 py-16 sm:py-20">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">FAQs</h2>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                                    <button onClick={() => handleFaqToggle(index)} className="w-full flex justify-between items-center text-left p-6 font-semibold text-lg hover:bg-gray-50 focus:outline-none">
                                        <span>{faq.q}</span>
                                        <span className={`transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : 'rotate-0'}`}>
                                            <Icon path="M19.5 8.25l-7.5 7.5-7.5-7.5" className="w-5 h-5"/>
                                        </span>
                                    </button>
                                    <div className={`transition-all duration-500 ease-in-out ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <div className="p-6 pt-0 text-gray-600">
                                            {faq.a}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-gray-400">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                     <p className="text-center text-sm">© {new Date().getFullYear()} Livspace.com. All Rights Reserved.</p>
                     <p className="text-center text-xs mt-4 max-w-4xl mx-auto">
                        ¹For full scope, please visit www.livspace.com/in/service | ²For kitchen, wardrobes and storage | ³In comparison with a branded player and for exact scope | ⁴Booking amount is 5% of the final quote or Rs. 25000, whichever is higher.
                     </p>
                </div>
            </footer>

             {/* Floating Action Buttons */}
            <div className="fixed bottom-6 right-6 space-y-4 z-40">
                <button className="bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition">
                    <Icon path="M1.5 8.67v8.58a3 3 0 003 3h8.58a3 3 0 003-3V8.67l-3.22-3.22a1.5 1.5 0 00-2.12 0L1.5 8.67zM19.5 3.53l-6.57-6.57a1.5 1.5 0 00-2.12 0L1.5 6.27v4.44l3.22-3.22a1.5 1.5 0 012.12 0l4.44 4.44a1.5 1.5 0 002.12 0l3.22-3.22-3.22-3.22a1.5 1.5 0 010-2.12l3.22 3.22a1.5 1.5 0 002.12 0l3.22-3.22z" className="w-7 h-7" />
                </button>
                <button className="bg-red-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 transition">
                     <Icon path="M2.25 12.76v-2.52a6.012 6.012 0 011.556-4.027l1.32-1.32a6 6 0 014.243-1.757h2.262a6 6 0 014.243 1.757l1.32 1.32c.977 1.033 1.556 2.45 1.556 4.027v2.52c0 .942-.196 1.84-.556 2.654l-.824 1.898a.75.75 0 01-1.316.326l-3.273-3.274a.75.75 0 00-1.06 0l-3.274 3.273a.75.75 0 01-1.316-.326l-.824-1.898A6.012 6.012 0 012.25 12.76z" className="w-7 h-7" />
                </button>
            </div>
        </div>
    );
};

export default LivspaceLandingPage;