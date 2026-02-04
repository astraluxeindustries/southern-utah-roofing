import { Shield, Hammer, Home, Droplets, CheckCircle, Clock, Award, Phone } from 'lucide-react';
import { Service, Testimonial, Project, NavItem } from './types';

export const COMPANY_INFO = {
  name: "Southern Utah Roof Repairs",
  phone: "(435) 555-0123",
  email: "info@southernutahroofrepairs.com",
  address: "St. George, UT 84770",
  hours: "Mon-Fri: 8am - 6pm",
  license: "Licensed & Insured"
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'roof-repair',
    title: 'Roof Repair',
    description: 'Expert diagnosis and repair for leaks, storm damage, and wear and tear. We extend the life of your roof.',
    icon: Hammer,
    image: 'https://picsum.photos/seed/roofrepair/800/600',
    features: ['Leak Detection', 'Shingle Replacement', 'Flashing Repair', 'Emergency Patches']
  },
  {
    id: 'roof-replacement',
    title: 'Full Replacement',
    description: 'When repairs aren\'t enough, we provide high-quality full roof replacements with premium materials.',
    icon: Home,
    image: 'https://picsum.photos/seed/roofreplace/800/600',
    features: ['Asphalt Shingles', 'Tile Roofing', 'Metal Roofing', 'Flat Roof Systems']
  },
  {
    id: 'emergency',
    title: 'Emergency Services',
    description: '24/7 rapid response for severe storm damage or sudden leaks that threaten your property.',
    icon: Clock,
    image: 'https://picsum.photos/seed/emergency/800/600',
    features: ['24/7 Availability', 'Tarping Services', 'Storm Damage Assessment', 'Insurance Assistance']
  },
  {
    id: 'maintenance',
    title: 'Preventative Maintenance',
    description: 'Scheduled inspections and maintenance to catch issues before they become costly repairs.',
    icon: Shield,
    image: 'https://picsum.photos/seed/maintenance/800/600',
    features: ['Annual Inspections', 'Gutter Cleaning', 'Debris Removal', 'Sealant Checks']
  },
  {
    id: 'commercial',
    title: 'Commercial Roofing',
    description: 'Specialized roofing solutions for businesses, warehouses, and multi-unit properties in Southern Utah.',
    icon: Award,
    image: 'https://picsum.photos/seed/commercial/800/600',
    features: ['TPO & EPDM', 'Built-up Roofing', 'Coatings', 'Commercial Maintenance']
  },
  {
    id: 'waterproofing',
    title: 'Waterproofing',
    description: 'Advanced waterproofing solutions to protect your home from the harsh desert elements.',
    icon: Droplets,
    image: 'https://picsum.photos/seed/water/800/600',
    features: ['Deck Waterproofing', 'Balcony Sealing', 'Foundation Protection', 'Membrane Systems']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Homeowner, St. George',
    content: 'Southern Utah Roof Repairs saved us after a heavy storm. They were quick, professional, and the quote was very transparent. Highly recommend!',
    rating: 5
  },
  {
    id: '2',
    name: 'Michael Christensen',
    role: 'Property Manager',
    content: 'I manage several properties in Cedar City and they are my go-to for all roofing needs. Reliable and honest work every time.',
    rating: 5
  },
  {
    id: '3',
    name: 'David & Emily Torres',
    role: 'Homeowners',
    content: 'We did a full tile replacement. The team was respectful of our property and finished ahead of schedule. The roof looks million bucks!',
    rating: 5
  }
];

export const PROJECTS: Project[] = [
  { id: 'p1', title: 'Modern Villa Tile', category: 'Residential', imageUrl: 'https://picsum.photos/seed/roof1/800/600' },
  { id: 'p2', title: 'Commercial Flat Roof', category: 'Commercial', imageUrl: 'https://picsum.photos/seed/roof2/800/600' },
  { id: 'p3', title: 'Historic Home Restoration', category: 'Restoration', imageUrl: 'https://picsum.photos/seed/roof3/800/600' },
  { id: 'p4', title: 'Storm Damage Repair', category: 'Repair', imageUrl: 'https://picsum.photos/seed/roof4/800/600' },
  { id: 'p5', title: 'Luxury Shingle Install', category: 'Residential', imageUrl: 'https://picsum.photos/seed/roof5/800/600' },
  { id: 'p6', title: 'Metal Roof Upgrade', category: 'Residential', imageUrl: 'https://picsum.photos/seed/roof6/800/600' },
];