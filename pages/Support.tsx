import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';

const Support: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const faqs = [
        {
            question: "How do I book a ride?",
            answer: "Simply open the app, enter your destination, choose your ride type, and confirm. Your driver will be on their way in minutes."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit/debit cards, digital wallets (Apple Pay, Google Pay), and UPI payments for your convenience."
        },
        {
            question: "How can I contact my driver?",
            answer: "Once a ride is booked, you can call or message your driver directly through the app without sharing your personal phone number."
        },
        {
            question: "Is Qubi Ride safe?",
            answer: "Safety is our top priority. All drivers undergo rigorous background checks, and our app features real-time ride tracking and an emergency SOS button."
        },
        {
            question: "Can I schedule a ride in advance?",
            answer: "Yes, you can schedule rides up to 7 days in advance for airport transfers or important appointments."
        }
    ];

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="pt-32 pb-24 min-h-screen animate-fade-in">
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-[#ffd700] mb-4">
                        24/7 Support
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-black mb-6">
                        We're Here to <span className="gradient-text">Help</span>
                    </h1>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto">
                        Have a question or need assistance? Our dedicated support team is available around the clock to ensure your journey is smooth.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                    {/* Contact Form */}
                    <div className="space-y-8">
                        <div className="glass-card p-8 rounded-[2rem]">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <MessageSquare className="w-6 h-6 text-[#ffd700]" />
                                Send us a message
                            </h3>
                            <form className="space-y-6" action="mailto:support@qubiride.com" method="post" encType="text/plain">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-white/60">First Name</label>
                                        <input type="text" name="first_name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#ffd700] transition-colors text-white" placeholder="John" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-white/60">Last Name</label>
                                        <input type="text" name="last_name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#ffd700] transition-colors text-white" placeholder="Doe" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white/60">Email Address</label>
                                    <input type="email" name="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#ffd700] transition-colors text-white" placeholder="john@example.com" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white/60">Subject</label>
                                    <input type="text" name="subject" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#ffd700] transition-colors text-white" placeholder="How can we help?" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white/60">Message</label>
                                    <textarea name="message" rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#ffd700] transition-colors text-white resize-none" placeholder="Tell us more about your inquiry..."></textarea>
                                </div>
                                <button type="submit" className="w-full gradient-bg py-4 rounded-xl font-bold text-black hover:shadow-lg hover:shadow-[#ffd700]/20 transition-all flex items-center justify-center gap-2">
                                    Send Message
                                    <Send className="w-5 h-5" />
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="grid grid-cols-1 gap-6">
                            <div className="glass-card p-6 rounded-2xl flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-[#ffd700]">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-xs text-white/40 uppercase tracking-wider font-bold mb-1">Email Us</div>
                                    <div className="font-semibold">support@qubiride.com</div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* FAQ Section */}
                    <div className="space-y-8">
                        <div className="mb-8">
                            <h3 className="text-3xl font-bold mb-4">Frequently Asked Questions</h3>
                            <p className="text-white/50">Quick answers to common questions about using Qubi Ride.</p>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === index ? 'bg-white/[0.08]' : 'hover:bg-white/[0.05]'}`}>
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                                    >
                                        <span className="font-bold text-lg">{faq.question}</span>
                                        {openFaq === index ? (
                                            <ChevronUp className="w-5 h-5 text-[#ffd700]" />
                                        ) : (
                                            <ChevronDown className="w-5 h-5 text-white/40" />
                                        )}
                                    </button>
                                    <div className={`px-6 overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <p className="text-white/60 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;
