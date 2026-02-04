import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Star, CheckCircle, Clock, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, TESTIMONIALS, COMPANY_INFO } from '../constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const HomePage = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop"
            alt="Southern Utah Quality Roofing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/50 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-block bg-brand-500/90 text-slate-900 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 shadow-lg backdrop-blur-sm">
              #1 Rated Roofing Service in Southern Utah
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6">
              Protecting What <br />
              <span className="text-brand-500 drop-shadow-sm">Matters Most.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-100 mb-8 leading-relaxed max-w-2xl drop-shadow-md">
              From emergency repairs to full replacements, we deliver premium craftsmanship tailored to the unique climate of Southern Utah.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <button className="w-full sm:w-auto bg-brand-500 hover:bg-brand-400 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-2">
                  Get a Free Estimate <ArrowRight size={20} />
                </button>
              </Link>
              <Link to="/services">
                <button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center">
                  View Our Services
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Licensed & Insured', icon: Shield },
              { label: '5-Star Rated', icon: Star },
              { label: '24/7 Support', icon: Clock },
              { label: 'Satisfaction Guarantee', icon: CheckCircle },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center justify-center gap-3 text-slate-700 font-semibold"
              >
                <div className="bg-brand-50 p-2 rounded-full text-brand-600">
                  <item.icon size={24} />
                </div>
                <span>{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-brand-accent font-bold tracking-wider uppercase text-sm mb-3">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">Comprehensive Roofing Solutions</h3>
            <p className="text-slate-600 text-lg">
              We don't just fix roofs; we build trust through transparency, quality materials, and superior workmanship.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {SERVICES.slice(0, 3).map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <div className="bg-brand-500 w-12 h-12 rounded-xl flex items-center justify-center text-slate-900 mb-6 -mt-14 relative z-10 shadow-lg group-hover:bg-brand-400 transition-colors">
                    <service.icon size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                  <p className="text-slate-600 mb-6 line-clamp-2">{service.description}</p>
                  <Link to="/services" className="text-brand-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all hover:text-brand-accent">
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link to="/services">
              <button className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-8 py-3 rounded-lg font-bold transition-all duration-300">
                View All Services
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* About / Why Us Split */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://picsum.photos/seed/rooferwork/800/800" alt="Worker on roof" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl hidden md:block max-w-xs">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-green-100 text-green-600 p-3 rounded-full">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Project Completed</p>
                    <p className="text-xs text-slate-500">On Time & On Budget</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="lg:w-1/2">
              <h2 className="text-brand-accent font-bold tracking-wider uppercase text-sm mb-3">Why Choose Us</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">The Southern Utah Standard</h3>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                We understand the unique challenges our local climate presents—from intense sun exposure to sudden monsoons. Our team is dedicated to providing roofing solutions that stand the test of time.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Local expertise and community focused",
                  "Premium materials from trusted manufacturers",
                  "Transparent pricing with no hidden fees",
                  "Fully licensed, bonded, and insured"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="bg-brand-100 text-brand-600 p-1 rounded-full"><CheckCircle size={16} /></div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about">
                <button className="bg-brand-900 hover:bg-brand-800 text-slate-900 px-8 py-3 rounded-lg font-bold transition-all shadow-lg">
                  More About Our Team
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pattern-grid-lg"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">Ready to Upgrade Your Roof?</h2>
          <p className="text-slate-800 text-xl max-w-2xl mx-auto mb-10 font-medium">
            Contact us today for a comprehensive inspection and quote. Don't wait until a small leak becomes a major problem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link to="/contact">
              <button className="bg-brand-accent hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                Get Your Free Quote
              </button>
            </Link>
            <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g,'')}`}>
              <button className="bg-transparent border border-slate-900/30 hover:bg-slate-900/10 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2">
                <Phone size={20} /> {COMPANY_INFO.phone}
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;