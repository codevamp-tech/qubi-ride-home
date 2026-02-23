import React from 'react';
import { Shield, Lock, Eye, FileText, UserCheck, Mail } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="pt-32 pb-24 min-h-screen animate-fade-in">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-[#ffd700] mb-4">
                        Privacy Matters
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-black mb-6">
                        Privacy <span className="gradient-text">Policy</span>
                    </h1>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto">
                        Your trust is our most valuable asset. We are committed to protecting your personal data and being transparent about how we use it.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-12">
                    {/* Introduction */}
                    <section className="glass-card p-8 rounded-[2rem]">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 bg-[#ffd700]/10 rounded-xl flex items-center justify-center text-[#ffd700] shrink-0">
                                <FileText className="w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-2">1. Introduction</h2>
                                <p className="text-white/60 leading-relaxed">
                                    Welcome to Qubi Ride. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the application.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Information We Collect */}
                    <section className="glass-card p-8 rounded-[2rem]">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 bg-[#ffd700]/10 rounded-xl flex items-center justify-center text-[#ffd700] shrink-0">
                                <Eye className="w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-2">2. Information We Collect</h2>
                                <p className="text-white/60 leading-relaxed mb-4">
                                    We may collect information about you in a variety of ways. The information we may collect via the Application includes:
                                </p>
                                <ul className="list-disc list-inside text-white/60 space-y-2 ml-4">
                                    <li>Personal Data: Name, email address, phone number, and payment information.</li>
                                    <li>Location Information: GPS data to provide ride-hailing services.</li>
                                    <li>Device Information: Mobile device ID, model, and manufacturer.</li>
                                    <li>Usage Data: Information on how you use our app and services.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* How We Use Information */}
                    <section className="glass-card p-8 rounded-[2rem]">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 bg-[#ffd700]/10 rounded-xl flex items-center justify-center text-[#ffd700] shrink-0">
                                <UserCheck className="w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-2">3. How We Use Your Information</h2>
                                <p className="text-white/60 leading-relaxed mb-4">
                                    Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Application to:
                                </p>
                                <ul className="list-disc list-inside text-white/60 space-y-2 ml-4">
                                    <li>Create and manage your account.</li>
                                    <li>Process your transactions and rides.</li>
                                    <li>Improve our services and application functionality.</li>
                                    <li>Send you administrative information and marketing communications.</li>
                                    <li>Prevent fraudulent transactions and monitor against theft.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Data Security */}
                    <section className="glass-card p-8 rounded-[2rem]">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 bg-[#ffd700]/10 rounded-xl flex items-center justify-center text-[#ffd700] shrink-0">
                                <Lock className="w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-2">4. Data Security</h2>
                                <p className="text-white/60 leading-relaxed">
                                    We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Your Rights */}
                    <section className="glass-card p-8 rounded-[2rem]">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 bg-[#ffd700]/10 rounded-xl flex items-center justify-center text-[#ffd700] shrink-0">
                                <Shield className="w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-2">5. Your Rights</h2>
                                <p className="text-white/60 leading-relaxed">
                                    Depending on your location, you may have certain rights regarding your personal data, including the right to access, correct, or delete the personal information we have collected about you. You may also have the right to object to or restrict certain processing of your data.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Contact Us */}
                    <section className="glass-card p-8 rounded-[2rem] border border-[#ffd700]/20">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 bg-[#ffd700]/10 rounded-xl flex items-center justify-center text-[#ffd700] shrink-0">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-2">6. Contact Us</h2>
                                <p className="text-white/60 leading-relaxed mb-4">
                                    If you have questions or comments about this Privacy Policy, please contact us at:
                                </p>
                                <div className="bg-white/5 p-4 rounded-xl inline-block">
                                    <p className="font-bold text-[#ffd700]">Qubi Ride Support Team</p>
                                    <p className="text-white/60">Email: privacy@qubiride.com</p>
                                    <p className="text-white/60">Address: 123 Mobility St, Urban City, UC 12345</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
