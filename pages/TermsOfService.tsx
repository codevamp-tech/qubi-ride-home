import React from 'react';
import { FileText, Shield, User, CreditCard, AlertCircle, Scale } from 'lucide-react';

const TermsOfService: React.FC = () => {
    return (
        <div className="pt-32 pb-24 min-h-screen animate-fade-in">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-[#ffd700] mb-4">
                        Legal Agreement
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-black mb-6">
                        Terms of <span className="gradient-text">Service</span>
                    </h1>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto">
                        Please read these terms carefully before using Qubi Ride. By using our services, you agree to be bound by these terms.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-12">
                    {/* Acceptance of Terms */}
                    <section className="glass-card p-8 rounded-[2rem]">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 bg-[#ffd700]/10 rounded-xl flex items-center justify-center text-[#ffd700] shrink-0">
                                <Scale className="w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-2">1. Acceptance of Terms</h2>
                                <p className="text-white/60 leading-relaxed">
                                    By accessing or using the Qubi Ride mobile application or website (collectively, the "Service"), you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, you may not use the Service.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* User Accounts */}
                    <section className="glass-card p-8 rounded-[2rem]">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 bg-[#ffd700]/10 rounded-xl flex items-center justify-center text-[#ffd700] shrink-0">
                                <User className="w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-2">2. User Accounts</h2>
                                <p className="text-white/60 leading-relaxed mb-4">
                                    To use certain features of the Service, you must register for an account. You agree to:
                                </p>
                                <ul className="list-disc list-inside text-white/60 space-y-2 ml-4">
                                    <li>Provide accurate, current, and complete information.</li>
                                    <li>Maintain the security of your password and accept all risks of unauthorized access.</li>
                                    <li>Promptly notify us if you discover or suspect any security breaches related to the Service.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Ride Bookings */}
                    <section className="glass-card p-8 rounded-[2rem]">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 bg-[#ffd700]/10 rounded-xl flex items-center justify-center text-[#ffd700] shrink-0">
                                <FileText className="w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-2">3. Ride Bookings</h2>
                                <p className="text-white/60 leading-relaxed">
                                    Qubi Ride provides a platform to connect riders with independent drivers. We do not provide transportation services ourselves. All bookings are subject to availability, and we reserve the right to refuse service to anyone at any time.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Payments and Fees */}
                    <section className="glass-card p-8 rounded-[2rem]">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 bg-[#ffd700]/10 rounded-xl flex items-center justify-center text-[#ffd700] shrink-0">
                                <CreditCard className="w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-2">4. Payments and Fees</h2>
                                <p className="text-white/60 leading-relaxed">
                                    You agree to pay all charges incurred in connection with your use of the Service, including ride fares, tolls, and any applicable taxes or fees. Prices are subject to change based on demand and other factors.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Prohibited Actions */}
                    <section className="glass-card p-8 rounded-[2rem]">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 bg-[#ffd700]/10 rounded-xl flex items-center justify-center text-[#ffd700] shrink-0">
                                <AlertCircle className="w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-2">5. Prohibited Actions</h2>
                                <p className="text-white/60 leading-relaxed mb-4">
                                    You may not use the Service to:
                                </p>
                                <ul className="list-disc list-inside text-white/60 space-y-2 ml-4">
                                    <li>Violate any laws or regulations.</li>
                                    <li>Harass, abuse, or harm another person.</li>
                                    <li>Interfere with or disrupt the integrity or performance of the Service.</li>
                                    <li>Attempt to gain unauthorized access to the Service or its related systems.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Limitation of Liability */}
                    <section className="glass-card p-8 rounded-[2rem]">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 bg-[#ffd700]/10 rounded-xl flex items-center justify-center text-[#ffd700] shrink-0">
                                <Shield className="w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-2">6. Limitation of Liability</h2>
                                <p className="text-white/60 leading-relaxed">
                                    To the maximum extent permitted by law, Qubi Ride shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
