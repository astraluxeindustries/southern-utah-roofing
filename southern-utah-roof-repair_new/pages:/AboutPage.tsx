import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Heart } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-slate-100 py-20 lg:py-28 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
             <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6">
              More Than Just <br/>
              <span className="text-brand-600">A Roofing Company.</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              We are your neighbors, committed to protecting the homes and businesses of Southern Utah with integrity and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/2">
               <h2 className="text-brand-600 font-bold tracking-wider uppercase text-sm mb-3">Our Story</h2>
               <h3 className="text-3xl font-serif font-bold text-slate-900 mb-6">Building Trust Since Day One</h3>
               <div className="space-y-6 text-slate-600 text-lg">
                 <p>
                   Southern Utah Roof Repairs began with a simple mission: to provide honest, high-quality roofing services to our local community. We saw a need for a roofing contractor that prioritized clear communication and transparency as much as technical skill.
                 </p>
                 <p>
                   Over the years, we've grown from a small team of dedicated craftsmen to one of the region's most trusted roofing providers. Despite our growth, we've never lost sight of our roots. We treat every project—whether it's a minor repair or a massive commercial installation—with the same level of care and attention to detail.
                 </p>
                 <p>
                   Our deep understanding of Southern Utah's unique climate allows us to recommend materials and techniques that ensure longevity and durability against the harsh desert sun and seasonal storms.
                 </p>
               </div>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-1 gap-6">
               <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                 <div className="bg-brand-100 w-12 h-12 rounded-full flex items-center justify-center text-brand-600 mb-4">
                   <Target size={24} />
                 </div>
                 <h4 className="text-xl font-bold text-slate-900 mb-2">Our Mission</h4>
                 <p className="text-slate-600">To deliver superior roofing solutions that protect our clients' investments while fostering long-term relationships built on trust and reliability.</p>
               </div>
               
               <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                 <div className="bg-brand-100 w-12 h-12 rounded-full flex items-center justify-center text-brand-600 mb-4">
                   <Users size={24} />
                 </div>
                 <h4 className="text-xl font-bold text-slate-900 mb-2">Our Team</h4>
                 <p className="text-slate-600">Our crew consists of experienced, certified roofers who undergo regular training to stay updated on the latest industry standards and safety protocols.</p>
               </div>

               <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                 <div className="bg-brand-100 w-12 h-12 rounded-full flex items-center justify-center text-brand-600 mb-4">
                   <Heart size={24} />
                 </div>
                 <h4 className="text-xl font-bold text-slate-900 mb-2">Community Focused</h4>
                 <p className="text-slate-600">We are proud to serve St. George, Cedar City, and the surrounding areas. We live here, we work here, and we care about our community.</p>
               </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats */}
      <section className="bg-brand-900 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: '10+', label: 'Years Experience' },
              { num: '500+', label: 'Projects Completed' },
              { num: '100%', label: 'Satisfaction Rate' },
              { num: '24/7', label: 'Emergency Service' }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-bold text-brand-accent mb-2">{stat.num}</div>
                <div className="text-slate-900 font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;