import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Clock, ChevronRight, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const App = () => {
    const [activeTab, setActiveTab] = useState('home');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const bikeModels = [
        {
            name: 'Honda Activa',
            price: '₹74,536',
            image: '/asset/honda-scooter-003-activa.png',
            features: ['110cc Engine', 'LED Headlamp', '18L Storage']
        },
        {
            name: 'Honda Dio',
            price: '₹72,664',
            image: '/asset/honda-scooter-001-dio125.png',
            features: ['110cc Engine', 'Sporty Design', 'LED DRL']
        },
        {
            name: 'Honda SP 125',
            price: '₹86,017',
            image: '/asset/honda-bike-005-SP-125.png',
            features: ['125cc Engine', 'Disc Brake', 'Digital Console']
        },
        {
            name: 'Honda Shine',
            price: '₹79,800',
            image: '/asset/honda-bike-006-Shine125.png',
            features: ['125cc Engine', 'Comfort Riding', 'Stylish Look']
        },
        {
            name: 'Honda Unicorn',
            price: '₹1,03,500',
            image: '/asset/honda-bike-004-unicorn.png',
            features: ['160cc Engine', 'Premium Bike', 'Advanced Features']
        },
        {
            name: 'Honda Hornet',
            price: '₹1,40,000',
            image: '/asset/honda-bike-002-Hornet2-0.png',
            features: ['184cc Engine', 'Sporty Design', 'LED Lights']
        },
        {
            name: 'Honda SP160',
            price: '₹1,40,000',
            image: '/asset/honda-bike-003-SP-160.png',
            features: ['184cc Engine', 'Sporty Design', 'LED Lights']
        },
        {
            name: 'Honda NX200',
            price: '₹1,40,000',
            image: '/asset/Pearl_Nightstar_Black.png',
            features: ['184cc Engine', 'Sporty Design', 'LED Lights']
        },
        {
            name: 'Honda CB200X',
            price: '₹1,40,000',
            image: '/asset/honda-bike-001-CB200X.png',
            features: ['184cc Engine', 'Sporty Design', 'LED Lights']
        }
    ];

    const services = [
        {
            title: 'Two Wheeler Sales',
            description: 'Wide range of Honda scooters and motorcycles with best offers and financing options',
            icon: '🏍️'
        },
        {
            title: 'Spare Parts',
            description: 'Genuine Honda spare parts and accessories for all models',
            icon: '🔧'
        },
        {
            title: 'Service & Repair',
            description: 'Expert maintenance and repair services by trained technicians',
            icon: '⚙️'
        },
        {
            title: 'Insurance',
            description: 'Comprehensive insurance solutions for your Honda vehicle',
            icon: '🛡️'
        },
        {
            title: 'Finance Options',
            description: 'Easy EMI and financing options with leading banks',
            icon: '💳'
        },
        {
            title: 'Exchange Offers',
            description: 'Best exchange value for your old vehicle',
            icon: '🔄'
        }
    ];

    // Replace your NavBar component in App.jsx with this:

    const NavBar = () => (
        <nav className="bg-red-600 text-white sticky top-0 z-50 shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-20">
                    {/* Logo - Left Aligned */}
                    <div className="text-2xl font-bold">
                        <span className="text-white">Balaji</span>
                        <span className="text-yellow-300"> Honda</span>
                    </div>

                    {/* Desktop Menu - Right Side */}
                    <div className="hidden md:flex space-x-8">
                        <button
                            onClick={() => setActiveTab('home')}
                            className={`hover:text-yellow-300 transition ${activeTab === 'home' ? 'text-yellow-300 font-semibold' : ''}`}
                        >
                            HOME
                        </button>
                        <button
                            onClick={() => setActiveTab('about')}
                            className={`hover:text-yellow-300 transition ${activeTab === 'about' ? 'text-yellow-300 font-semibold' : ''}`}
                        >
                            ABOUT US
                        </button>
                        <button
                            onClick={() => setActiveTab('services')}
                            className={`hover:text-yellow-300 transition ${activeTab === 'services' ? 'text-yellow-300 font-semibold' : ''}`}
                        >
                            SERVICES
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden pb-4">
                        <button
                            onClick={() => { setActiveTab('home'); setMobileMenuOpen(false); }}
                            className={`block w-full text-left py-2 hover:text-yellow-300 ${activeTab === 'home' ? 'text-yellow-300' : ''}`}
                        >
                            HOME
                        </button>
                        <button
                            onClick={() => { setActiveTab('about'); setMobileMenuOpen(false); }}
                            className={`block w-full text-left py-2 hover:text-yellow-300 ${activeTab === 'about' ? 'text-yellow-300' : ''}`}
                        >
                            ABOUT US
                        </button>
                        <button
                            onClick={() => { setActiveTab('services'); setMobileMenuOpen(false); }}
                            className={`block w-full text-left py-2 hover:text-yellow-300 ${activeTab === 'services' ? 'text-yellow-300' : ''}`}
                        >
                            SERVICES
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );

    const HomePage = () => (
        <div>
            <div className="relative bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h1 className="text-5xl font-bold mb-4">Welcome to Balaji Honda</h1>
                            <p className="text-xl mb-6">Your Trusted Honda Dealership</p>
                            <p className="text-lg mb-8">Experience the best in class Honda two-wheelers with exceptional service and unbeatable offers</p>
                            <div className="flex gap-4">
                                <button className="bg-yellow-400 text-red-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
                                    Explore Models
                                </button>
                                <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition">
                                    Contact Us
                                </button>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <img
                                src="/asset/honda-scooter-002-activa125-BS-VI.png"
                                alt="Honda Bike"
                                className="rounded-lg shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-900 text-white py-6">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                        <div className="flex items-center justify-center gap-3">
                            <Clock className="text-yellow-400" size={32} />
                            <div className="text-left">
                                <div className="font-semibold">Working Hours</div>
                                <div className="text-sm">Mon-Sat: 09:00 AM - 08:00 PM</div>
                                <div className="text-sm">Sun: 09:30 AM - 03:00 PM</div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-3">
                            <Phone className="text-yellow-400" size={32} />
                            <div className="text-left">
                                <div className="font-semibold">Call Us</div>
                                <div className="text-sm">+91 9655756789</div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-3">
                            <MapPin className="text-yellow-400" size={32} />
                            <div className="text-left">
                                <div className="font-semibold">
                                <a
                                  href="https://maps.app.goo.gl/m7nWHkDAjreJjtVJA"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-600 hover:underline"
                                >
                                  Visit Us
                                </a>
                                </div>
                                <div className="text-sm">Chennai, Tamil Nadu</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-4">Our Featured Models</h2>
                    <p className="text-center text-gray-600 mb-12">Discover the latest Honda two-wheelers</p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {bikeModels.map((bike, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                                <img src={bike.image} alt={bike.name} className="w-full h-48 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2">{bike.name}</h3>
                                    <p className="text-2xl font-bold text-red-600 mb-4">{bike.price}</p>
                                    <ul className="space-y-2 mb-4">
                                        {bike.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                                <ChevronRight size={16} className="text-red-600" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">Why Choose Balaji Honda?</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-5xl mb-4">🏆</div>
                            <h3 className="font-bold mb-2">Authorized Dealer</h3>
                            <p className="text-gray-600">Official Honda dealership with genuine products</p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl mb-4">💯</div>
                            <h3 className="font-bold mb-2">Best Prices</h3>
                            <p className="text-gray-600">Competitive pricing with exclusive offers</p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl mb-4">🔧</div>
                            <h3 className="font-bold mb-2">Expert Service</h3>
                            <p className="text-gray-600">Trained technicians and quality service</p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl mb-4">⭐</div>
                            <h3 className="font-bold mb-2">Customer Trust</h3>
                            <p className="text-gray-600">Thousands of satisfied customers</p>
                        </div>
                    </div>
                </div>
            </div>

      // Replace the video section in your HomePage component with this:

            <div className="py-16 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-4">Experience Honda</h2>
                    <p className="text-center mb-12">Watch our latest collection</p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Video 1 */}
                        <div className="bg-gray-800 rounded-lg overflow-hidden">
                            <iframe
                                width="100%"
                                height="300"
                                src="https://www.youtube.com/embed/L55-bVYeQVQ"
                                title="Honda Video 1"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full"
                            ></iframe>
                        </div>

                        {/* Video 2 */}
                        <div className="bg-gray-800 rounded-lg overflow-hidden">
                            <iframe
                                width="100%"
                                height="300"
                                src="https://www.youtube.com/embed/7uBT--TmSbM"
                                title="Honda Video 2"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full"
                            ></iframe>
                        </div>

                        {/* Video 3 */}
                        <div className="bg-gray-800 rounded-lg overflow-hidden">
                            <iframe
                                width="100%"
                                height="300"
                                src="https://www.youtube.com/embed/ylRh5X3eI0A"
                                title="Honda Video 3"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );

    const AboutPage = () => (
        <div>
            <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <h1 className="text-5xl font-bold mb-4">About Balaji Honda</h1>
                    <p className="text-xl">Your Trusted Honda Partner Since Years</p>
                </div>
            </div>

            <div className="py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Welcome to Balaji Honda</h2>
                            <p className="text-gray-700 mb-4">
                                Balaji Honda is a premier authorized Honda dealership committed to providing the best two-wheeler buying and ownership experience. With years of expertise in the automotive industry, we have established ourselves as a trusted name for Honda enthusiasts.
                            </p>
                            <p className="text-gray-700 mb-4">
                                Our state-of-the-art showroom features the complete range of Honda scooters and motorcycles, backed by exceptional customer service and after-sales support. We believe in building long-term relationships with our customers by offering transparent dealings, competitive pricing, and reliable service.
                            </p>
                            <p className="text-gray-700">
                                At Balaji Honda, we don't just sell vehicles; we deliver dreams, quality, and Honda's legendary reliability to every customer who walks through our doors.
                            </p>
                        </div>
                        <div>
                            <img
                                src="/asset/Home.png?w=600&h=400&fit=crop"
                                alt="Showroom"
                                className="rounded-lg shadow-xl"
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-red-50 p-8 rounded-lg">
                            <h3 className="text-2xl font-bold mb-4 text-red-600">Our Mission</h3>
                            <p className="text-gray-700">
                                To provide world-class Honda two-wheelers and services to our customers, ensuring their complete satisfaction through quality products, transparent dealings, and exceptional after-sales support.
                            </p>
                        </div>
                        <div className="bg-red-50 p-8 rounded-lg">
                            <h3 className="text-2xl font-bold mb-4 text-red-600">Our Vision</h3>
                            <p className="text-gray-700">
                                To be the most trusted and preferred Honda dealership, recognized for our commitment to customer satisfaction, service excellence, and contribution to the growth of Honda's legacy.
                            </p>
                        </div>
                    </div>

                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-12">Our Core Values</h2>
                        <div className="grid md:grid-cols-4 gap-6">
                            <div className="p-6">
                                <div className="text-4xl mb-4">🤝</div>
                                <h4 className="font-bold mb-2">Integrity</h4>
                                <p className="text-gray-600 text-sm">Honest and transparent dealings with every customer</p>
                            </div>
                            <div className="p-6">
                                <div className="text-4xl mb-4">🎯</div>
                                <h4 className="font-bold mb-2">Excellence</h4>
                                <p className="text-gray-600 text-sm">Striving for the highest quality in products and services</p>
                            </div>
                            <div className="p-6">
                                <div className="text-4xl mb-4">❤️</div>
                                <h4 className="font-bold mb-2">Customer First</h4>
                                <p className="text-gray-600 text-sm">Putting customer satisfaction at the heart of everything</p>
                            </div>
                            <div className="p-6">
                                <div className="text-4xl mb-4">🚀</div>
                                <h4 className="font-bold mb-2">Innovation</h4>
                                <p className="text-gray-600 text-sm">Embracing new technologies and improving continuously</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-lg">
                        <h2 className="text-3xl font-bold mb-6 text-center">Our Team</h2>
                        <p className="text-center text-gray-700 mb-8">
                            Our dedicated team of professionals is committed to providing you with the best Honda experience. From sales consultants to service technicians, every team member is trained to deliver exceptional service and ensure your complete satisfaction.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-lg text-center">
                                <div className="w-20 h-20 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                                    BH
                                </div>
                                <h4 className="font-bold mb-1">Experienced Sales Team</h4>
                                <p className="text-sm text-gray-600">Helping you find your perfect Honda</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg text-center">
                                <div className="w-20 h-20 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                                    BH
                                </div>
                                <h4 className="font-bold mb-1">Certified Technicians</h4>
                                <p className="text-sm text-gray-600">Expert service and maintenance</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg text-center">
                                <div className="w-20 h-20 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                                    BH
                                </div>
                                <h4 className="font-bold mb-1">Support Staff</h4>
                                <p className="text-sm text-gray-600">Always here to assist you</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const ServicesPage = () => (
        <div>
            <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <h1 className="text-5xl font-bold mb-4">Our Services</h1>
                    <p className="text-xl">Complete Solutions for All Your Honda Needs</p>
                </div>
            </div>

            <div className="py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
                                <div className="text-5xl mb-4">{service.icon}</div>
                                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                                <p className="text-gray-600 mb-6">{service.description}</p>

                            </div>
                        ))}
                    </div>

                    <div className="bg-gray-50 p-8 rounded-lg mb-16">
                        <h2 className="text-3xl font-bold mb-8 text-center">Service Center Excellence</h2>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-2xl font-bold mb-4">State-of-the-Art Facilities</h3>
                                <p className="text-gray-700 mb-4">
                                    Our service center is equipped with the latest diagnostic tools and genuine Honda spare parts to ensure your vehicle receives the best care possible.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <ChevronRight className="text-red-600 mt-1" size={20} />
                                        <span>Trained and certified Honda technicians</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <ChevronRight className="text-red-600 mt-1" size={20} />
                                        <span>Genuine Honda spare parts and accessories</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <ChevronRight className="text-red-600 mt-1" size={20} />
                                        <span>Advanced diagnostic equipment</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <ChevronRight className="text-red-600 mt-1" size={20} />
                                        <span>Quick service and express maintenance</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <ChevronRight className="text-red-600 mt-1" size={20} />
                                        <span>Transparent pricing and service packages</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <img
                                    src="/asset/Service.png?w=600&h=400&fit=crop"
                                    alt="Service Center"
                                    className="rounded-lg shadow-xl"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="bg-red-50 p-8 rounded-lg mb-16">
                        <h2 className="text-3xl font-bold mb-8 text-center">Easy Finance Options</h2>
                        <p className="text-center text-gray-700 mb-8">
                            We partner with leading banks and financial institutions to offer you the best financing solutions
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-lg text-center">
                                <div className="text-3xl font-bold text-red-600 mb-2">Low Interest</div>
                                <p className="text-gray-600">Competitive interest rates starting from 8.5%</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg text-center">
                                <div className="text-3xl font-bold text-red-600 mb-2">Flexible Tenure</div>
                                <p className="text-gray-600">Loan tenure up to 36 months</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg text-center">
                                <div className="text-3xl font-bold text-red-600 mb-2">Quick Approval</div>
                                <p className="text-gray-600">Get approved within 24 hours</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop"
                                alt="Insurance"
                                className="rounded-lg shadow-xl"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Comprehensive Insurance</h2>
                            <p className="text-gray-700 mb-6">
                                Protect your investment with our comprehensive insurance solutions. We offer various insurance packages from leading providers to suit your needs and budget.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <ChevronRight className="text-red-600 mt-1" size={20} />
                                    <span>Third-party and comprehensive coverage</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <ChevronRight className="text-red-600 mt-1" size={20} />
                                    <span>Zero depreciation cover available</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <ChevronRight className="text-red-600 mt-1" size={20} />
                                    <span>Easy claim process and support</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <ChevronRight className="text-red-600 mt-1" size={20} />
                                    <span>Renewal reminders and assistance</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const Footer = () => (
        <footer className="bg-gray-900 text-white pt-12 pb-6">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">
                            <span className="text-white">Balaji</span>
                            <span className="text-yellow-400"> Honda</span>
                        </h3>
                        <p className="text-gray-400 mb-4">
                            Your trusted Honda dealership for quality two-wheelers and exceptional service.
                        </p>
                        <div className="flex gap-4">
                            <Facebook className="cursor-pointer hover:text-yellow-400 transition" />
                            <Instagram className="cursor-pointer hover:text-yellow-400 transition" />
                            <Twitter className="cursor-pointer hover:text-yellow-400 transition" />
                            <Youtube className="cursor-pointer hover:text-yellow-400 transition" />
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li className="hover:text-yellow-400 cursor-pointer transition">Home</li>
                            <li className="hover:text-yellow-400 cursor-pointer transition">About Us</li>
                            <li className="hover:text-yellow-400 cursor-pointer transition">Services</li>
                            <li className="hover:text-yellow-400 cursor-pointer transition">Test Ride</li>
                            <li className="hover:text-yellow-400 cursor-pointer transition">Contact</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Our Services</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li className="hover:text-yellow-400 cursor-pointer transition">Two Wheeler Sales</li>
                            <li className="hover:text-yellow-400 cursor-pointer transition">Spare Parts</li>
                            <li className="hover:text-yellow-400 cursor-pointer transition">Service & Repair</li>
                            <li className="hover:text-yellow-400 cursor-pointer transition">Insurance</li>
                            <li className="hover:text-yellow-400 cursor-pointer transition">Finance</li>
                        </ul>
                    </div>

                    <div>
  <h4 className="font-bold mb-4">Contact Info</h4>
  <ul className="space-y-3 text-gray-400">
    <li className="flex items-start gap-2">
      <MapPin size={20} className="mt-1 text-yellow-400" />
      <div>
        <p className="font-semibold text-white">M/S BALAJI AUTOMOTIVE</p>
        <p>570, Thiruvottiyur High Rd, opp Vaigai Mahal, Korukkupet, Old Washermanpet, Chennai, Tamil Nadu 600021</p>
      </div>
    </li>

    <li className="flex items-center gap-2">
      <Phone size={20} className="text-yellow-400" />
      <a href="tel:+919655756789" className="hover:text-yellow-300">
        +91 96557 56789
      </a>
    </li>

    <li className="flex items-center gap-2">
      <Mail size={20} className="text-yellow-400" />
      <a href="mailto:info@balajihonda.com" className="hover:text-yellow-300">
        info@balajihonda.com
      </a>
    </li>
                            <li className="flex items-center gap-2">
                                <Clock size={20} className="text-yellow-400" />
                                <div>
                                <p>Mon-Sat: 09:00 AM - 08:00 PM</p>
                                <p>Sun : 09:30 AM - 03:00 PM</p>
                                 </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
                    <p>&copy; 2025 Balaji Honda. All rights reserved. | Authorized Honda Dealership</p>
                </div>
            </div>
        </footer>
    );

    return (
        <div className="min-h-screen bg-white">
            <NavBar />

            {activeTab === 'home' && <HomePage />}
            {activeTab === 'about' && <AboutPage />}
            {activeTab === 'services' && <ServicesPage />}

            <Footer />
        </div>
    );
};

export default App;
