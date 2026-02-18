import React from 'react';
import {
    Smartphone,
    MapPin,
    Clock,
    CreditCard,
    ShieldCheck,
    History,
    Layout,
    ChevronRight, // Used in How It Works steps
    Apple,
    Play,
    Plane,
    Briefcase, // Used in Airport Ride
    Users,
    Trophy,
    Zap,
    Globe
} from 'lucide-react';
import PhoneMockup from '../components/PhoneMockup';

const Home: React.FC = () => {
    const features = [
        { title: "Real-time GPS tracking", icon: <MapPin className="w-6 h-6" />, description: "Track your driver's precise location in real-time on our interactive map." },
        { title: "Instant ride booking", icon: <Clock className="w-6 h-6" />, description: "Get a ride in seconds with our optimized matching algorithm." },
        { title: "Secure digital payments", icon: <CreditCard className="w-6 h-6" />, description: "Pay seamlessly with credit cards, wallets, or UPI through our secure gateway." },
        { title: "Ride history & wallet", icon: <History className="w-6 h-6" />, description: "Review your past trips and manage your balance easily within the app." },
        { title: "Trusted drivers", icon: <ShieldCheck className="w-6 h-6" />, description: "All our drivers undergo rigorous background checks for your safety." },
        { title: "Clean & simple app UI", icon: <Layout className="w-6 h-6" />, description: "Designed for effortless navigation and a premium booking experience." }
    ];

    const steps = [
        { number: "01", title: "Choose destination", description: "Open the app and enter where you'd like to go." },
        { number: "02", title: "Book your ride", description: "Select your ride type and confirm your booking." },
        { number: "03", title: "Reach safely", description: "Enjoy a comfortable trip with our professional drivers." }
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-16 lg:pb-32 overflow-hidden">
                <div className="hero-glow top-0 right-0"></div>
                <div className="hero-glow bottom-0 left-0"></div>

                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-[#ffd700]">
                                Next-Gen Ride Hailing
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
                                Book Your Ride Anytime, <span className="gradient-text">Anywhere</span> with Qubi Ride
                            </h1>
                            <p className="text-xl text-white/60 max-w-xl mx-auto lg:mx-0">
                                Fast, safe and affordable rides at your fingertips. Join the future of urban mobility today.
                            </p>

                            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                                <button className="flex items-center space-x-3 bg-white text-black px-8 py-4 rounded-2xl font-bold hover:bg-neutral-200 transition-colors">
                                    <Play className="fill-current w-6 h-6" />
                                    <div className="text-left">
                                        <div className="text-[10px] uppercase font-bold opacity-70">Get it on</div>
                                        <div className="text-lg leading-tight">Google Play</div>
                                    </div>
                                </button>
                                <button className="flex items-center space-x-3 bg-neutral-900 border border-white/10 px-8 py-4 rounded-2xl font-bold hover:bg-neutral-800 transition-colors">
                                    <Apple className="fill-current w-6 h-6" />
                                    <div className="text-left">
                                        <div className="text-[10px] uppercase font-bold opacity-70">Download on the</div>
                                        <div className="text-lg leading-tight">App Store</div>
                                    </div>
                                </button>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 relative">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#ffd700]/10 blur-[100px] rounded-full"></div>
                            <div className="relative flex justify-center lg:justify-end">
                                <PhoneMockup
                                    imageSrc="/intro.jpeg"
                                    tilt="right"
                                    className="z-10 -mr-12"
                                />
                                <PhoneMockup
                                    imageSrc="/plan-ride.png"
                                    className="mt-12 hidden sm:block"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-24 relative overflow-hidden bg-black">
                {/* Decorative elements */}
                <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#ffd700]/5 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-[#ffd700]/5 blur-[100px] rounded-full"></div>

                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                        {/* Image side with floating stats */}
                        <div className="w-full lg:w-1/2 relative">
                            <div className="relative z-10 rounded-[3rem] overflow-hidden border border-white/5 aspect-square lg:aspect-[4/4] shadow-2xl">
                                {/* Image Container with Overlay */}
                                <div className="relative w-full h-full">
                                    <img
                                        src="/car.jpg"
                                        alt="Modern transportation"
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Brightness Reduction Overlay */}
                                    <div className="absolute inset-0 bg-black/40"></div>
                                    {/* Original Gradient Overlay - Keep for depth */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                </div>
                            </div>

                            {/* Floating Stat Card 1 */}
                            <div className="absolute -top-6 -right-6 lg:right-0 glass-card p-6 rounded-3xl z-20 backdrop-blur-xl border-white/10 animate-bounce-slow">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 gradient-bg rounded-2xl flex items-center justify-center text-white">
                                        <Users className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className=" text-2xl font-bold ">50k+</div>
                                        <div className="text-xs text-white/40 uppercase tracking-wider font-bold">Happy Riders</div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Stat Card 2 */}
                            <div className="absolute -bottom-6 -left-6 lg:left-0 glass-card p-6 rounded-3xl z-20 backdrop-blur-xl border-white/10">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-[#ffd700]">
                                        <Trophy className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold">#1 Choice</div>
                                        <div className="text-xs text-white/40 uppercase tracking-wider font-bold">Urban Transport</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content side */}
                        <div className="w-full lg:w-1/2 space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#ffd700] text-sm font-bold">
                                <Zap className="w-4 h-4 fill-current" />
                                <span>Modern Mobility</span>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-4xl lg:text-6xl font-black leading-tight">
                                    Driving the <span className="gradient-text">Future</span> of Urban Travel
                                </h2>
                                <p className="text-xl text-white/50 leading-relaxed font-light">
                                    Qubi Ride isn't just a booking app; it's your partner in navigating the modern world. We've built an ecosystem where <span className="text-white font-medium">efficiency meets elegance</span>, ensuring every journey is more than just a commute.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                                <div className="space-y-3">
                                    <div className="w-10 h-10 rounded-xl bg-[#ffd700]/10 flex items-center justify-center text-[#ffd700]">
                                        <Globe className="w-5 h-5" />
                                    </div>
                                    <h4 className="text-lg font-bold">Global Vision</h4>
                                    <p className="text-white/40 text-sm leading-relaxed">
                                        Expanding connectivity across borders, bringing world-class ride-hailing to every corner.
                                    </p>
                                </div>
                                <div className="space-y-3">
                                    <div className="w-10 h-10 rounded-xl bg-[#ffd700]/10 flex items-center justify-center text-[#ffd700]">
                                        <ShieldCheck className="w-5 h-5" />
                                    </div>
                                    <h4 className="text-lg font-bold">Safety First</h4>
                                    <p className="text-white/40 text-sm leading-relaxed">
                                        Uncompromising security protocols and vetted professionals for your absolute peace of mind.
                                    </p>
                                </div>
                            </div>

                            <div className="pt-8">
                                <a href="#download" className="inline-flex items-center gap-3 text-white font-bold group">
                                    <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#ffd700] group-hover:bg-[#ffd700] group-hover:text-black transition-all">
                                        <ChevronRight className="w-5 h-5" />
                                    </span>
                                    <span className="text-lg group-hover:text-[#ffd700] transition-colors">Start your journey today</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Key Features</h2>
                        <p className="text-white/40">Everything you need for a smooth journey</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, idx) => (
                            <div key={idx} className="glass-card p-8 rounded-[2rem] hover:bg-white/[0.05] transition-all group cursor-default">
                                <div className="w-14 h-14 gradient-bg rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-white/50 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Airport Ride Section */}
            <section id="airport-ride" className="py-24 relative overflow-hidden bg-black/40">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="w-full lg:w-1/2 relative">
                            <div className="relative rounded-[3rem] overflow-hidden border border-white/10 aspect-[4/5] lg:aspect-square">
                                <img
                                    src="/airport.jpg"
                                    alt="Premium Airport Service"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-10 left-10 right-10 p-6 glass-card rounded-2xl backdrop-blur-md">
                                    <div className="flex items-center gap-4 mb-2">
                                        <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
                                            <Plane className="w-5 h-5 text-white" />
                                        </div>
                                        <span className="font-bold text-lg">Airport Elite</span>
                                    </div>
                                    <p className="text-white/60 text-sm">Professional chauffeurs ready to take you to the airport.</p>
                                </div>
                            </div>
                            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#ffd700]/20 blur-[100px] rounded-full -z-10"></div>
                        </div>

                        <div className="w-full lg:w-1/2 space-y-8">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-[#ffd700]/10 border border-[#ffd700]/20 text-xs font-semibold uppercase tracking-widest text-[#ffd700]">
                                Premium Transfers
                            </div>
                            <h2 className="text-4xl lg:text-6xl font-black leading-tight">
                                Stress-Free <span className="gradient-text">Airport Rides</span>
                            </h2>
                            <p className="text-xl text-white/50 leading-relaxed">
                                Experience seamless travel with our dedicated airport transfer service. We ensure timely pickup and smooth journeys, getting you to the airport with time to spare.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                                        <Clock className="w-6 h-6 text-[#ffd700]" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1">Timely Pickup</h4>
                                        <p className="text-sm text-white/40">We arrive on schedule to ensure you never miss your flight.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                                        <Briefcase className="w-6 h-6 text-[#ffd700]" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1">Luggage Assistance</h4>
                                        <p className="text-sm text-white/40">Professional help loading your bags into the vehicle.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                                        <History className="w-6 h-6 text-[#ffd700]" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1">Flight Schedule Coordination</h4>
                                        <p className="text-sm text-white/40">We calculate optimal departure time based on your flight.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                                        <MapPin className="w-6 h-6 text-[#ffd700]" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1">Door-to-Door Service</h4>
                                        <p className="text-sm text-white/40">Pickup from your location with direct transfer to your terminal.</p>
                                    </div>
                                </div>
                            </div>

                            <button className="gradient-bg px-8 py-4 rounded-2xl font-bold hover:shadow-lg hover:shadow-[#ffd700]/30 transition-all flex items-center gap-3 text-black">
                                Book Airport Ride
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section id="how-it-works" className="py-24 bg-white/[0.02]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">How It Works</h2>
                        <p className="text-white/40">Simple steps to your destination</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {steps.map((step, idx) => (
                            <div key={idx} className="relative group">
                                <div className="text-8xl font-black text-white/[0.03] absolute -top-12 -left-4 group-hover:text-[#ffd700]/10 transition-colors">{step.number}</div>
                                <div className="relative pt-4">
                                    <h3 className="text-2xl font-bold mb-4 flex items-center">
                                        {step.title}
                                        <ChevronRight className="ml-2 w-5 h-5 text-[#ffd700] opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </h3>
                                    <p className="text-white/50 text-lg">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* App Preview Section */}
            <section className="py-24 overflow-hidden">
                <div className="container mx-auto px-6 text-center mb-16">
                    <h2 className="text-4xl font-bold">App Preview</h2>
                    <p className="text-white/40">Intuitive interface designed for you</p>
                </div>

                <div className="flex overflow-x-auto pb-12 px-6 gap-8 no-scrollbar mask-fade">
                    <div className="flex space-x-8 min-w-max animate-scroll">
                        <PhoneMockup imageSrc="/intro.jpeg" />
                        <PhoneMockup imageSrc="/plan-ride.png" />
                        <PhoneMockup imageSrc="/wallet.png" />
                        <PhoneMockup imageSrc="/my-rides.png" />
                        <PhoneMockup imageSrc="/profile.png" />
                    </div>
                </div>
            </section>

            {/* Download Section */}
            <section id="download" className="py-32 relative">
                <div className="container mx-auto px-6">
                    <div className="gradient-bg rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden shadow-2xl shadow-[#ffd700]/20">
                        <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
                        <div className="relative z-10">
                            <h2 className="text-4xl lg:text-6xl font-black mb-6">Download Qubi Ride App Now</h2>
                            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto font-medium">
                                Join thousands of riders enjoying a premium taxi experience. Safe, fast, and always on time.
                            </p>

                            <div className="flex flex-wrap justify-center gap-6">
                                <button className="flex items-center space-x-3 bg-white text-black px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-transform shadow-2xl">
                                    <Play className="fill-current w-7 h-7" />
                                    <div className="text-left">
                                        <div className="text-xs uppercase font-bold opacity-70">Get it on</div>
                                        <div className="text-xl leading-tight">Google Play</div>
                                    </div>
                                </button>
                                <button className="flex items-center space-x-3 bg-black text-white px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-transform shadow-2xl">
                                    <Apple className="fill-current w-7 h-7" />
                                    <div className="text-left">
                                        <div className="text-xs uppercase font-bold opacity-70">Download on the</div>
                                        <div className="text-xl leading-tight">App Store</div>
                                    </div>
                                </button>
                            </div>
                            <p className="mt-8 text-white/60 text-sm">Available on Google Play & App Store</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
