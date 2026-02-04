import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const ContactPage = () => {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Get in touch for a free estimate or emergency repair. We are here to help.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
            
            {/* Contact Info */}
            <div className="lg:w-1/3 space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-50 p-3 rounded-lg text-brand-600">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Phone</p>
                      <p className="text-slate-600">{COMPANY_INFO.phone}</p>
                      <p className="text-xs text-brand-accent font-semibold mt-1">Available 24/7 for Emergencies</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-50 p-3 rounded-lg text-brand-600">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Email</p>
                      <p className="text-slate-600">{COMPANY_INFO.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-brand-50 p-3 rounded-lg text-brand-600">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Office</p>
                      <p className="text-slate-600">{COMPANY_INFO.address}</p>
                    </div>
                  </div>

                   <div className="flex items-start gap-4">
                    <div className="bg-brand-50 p-3 rounded-lg text-brand-600">
                      <Clock size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Hours</p>
                      <p className="text-slate-600">{COMPANY_INFO.hours}</p>
                      <p className="text-slate-600">Sat-Sun: By Appointment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:w-2/3">
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-slate-100">
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">Send Us a Message</h3>
                <p className="text-slate-500 mb-8">Fill out the form below and we will get back to you within 24 hours.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={e => setFormState({...formState, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all bg-slate-50"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                      <input
                         type="tel"
                         required
                         value={formState.phone}
                         onChange={e => setFormState({...formState, phone: e.target.value})}
                         className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all bg-slate-50"
                         placeholder="(435) 555-0123"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={e => setFormState({...formState, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all bg-slate-50"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">How can we help?</label>
                    <textarea
                      rows={5}
                      required
                      value={formState.message}
                      onChange={e => setFormState({...formState, message: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all bg-slate-50 resize-none"
                      placeholder="Tell us about your roofing needs..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={submitted}
                    className="w-full bg-brand-500 hover:bg-brand-400 text-slate-900 font-bold py-4 rounded-lg transition-all shadow-lg flex items-center justify-center gap-2 disabled:bg-green-600 disabled:text-white disabled:cursor-not-allowed"
                  >
                    {submitted ? (
                      <>Message Sent! <Check className="animate-bounce" /></>
                    ) : (
                      <>Send Message <Send size={18} /></>
                    )}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

// Simple check icon for the success state above
const Check = ({ className }: { className?: string }) => (
  <svg className={`w-5 h-5 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default ContactPage;