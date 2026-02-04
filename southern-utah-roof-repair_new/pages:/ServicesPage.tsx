import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const ServicesPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
           <img src="https://picsum.photos/seed/rooftop/1920/600" alt="Roof Background" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Services</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Professional roofing solutions tailored to your needs. Quality materials, expert installation.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 bg-white rounded-3xl p-8 shadow-sm border border-slate-100`}
              >
                <div className="lg:w-1/2 w-full h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg relative group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-60"></div>
                </div>

                <div className="lg:w-1/2 w-full">
                  <div className="bg-brand-100 w-16 h-16 rounded-2xl flex items-center justify-center text-brand-600 mb-6">
                    <service.icon size={32} />
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="bg-green-100 p-1 rounded-full text-green-600 shrink-0">
                          <Check size={14} />
                        </div>
                        <span className="font-medium text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link to="/contact">
                    <button className="text-brand-600 font-bold border-b-2 border-brand-200 hover:border-brand-600 hover:text-brand-800 transition-all pb-1 flex items-center gap-2">
                      Get a Quote for {service.title} <ArrowRight size={16} />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Not Sure What You Need?</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Our experts can assess your roof's condition and recommend the best course of action. No pressure, just honest advice.
          </p>
          <Link to="/contact">
            <button className="bg-brand-500 hover:bg-brand-400 text-slate-900 px-8 py-3 rounded-lg font-bold shadow-lg transition-all">
              Schedule an Inspection
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;