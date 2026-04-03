import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import {
  ChevronDown,
  ArrowRight,
  Star,
  Trophy,
  ThumbsUp,
  Shield,
  Clock,
  CheckCircle,
  Quote,
  Sparkles,
  Droplets,
  TreePine,
  Home as HomeIcon,
  ExternalLink,
  Tag,
  Percent,
} from "lucide-react";

const pricing = [
  {
    title: "Landscaping",
    icon: TreePine,
    color: "bg-green-500",
    startingAt: "$45",
    unit: "/visit",
    tiers: [
      { label: "¼ Acre Lot", price: "$45–$55" },
      { label: "½ Acre Lot", price: "$60–$70" },
      { label: "1 Acre Lot", price: "$85–$100" },
    ],
    extras: ["Mulching", "Garden beds", "Seasonal cleanups", "Hedge trimming"],
    popular: false,
  },
  {
    title: "Power Washing",
    icon: Droplets,
    color: "bg-blue-500",
    startingAt: "$150",
    unit: "/surface",
    tiers: [
      { label: "Driveway / Walkway", price: "$150–$250" },
      { label: "Deck / Patio", price: "$150–$250" },
      { label: "House Exterior", price: "$250–$400" },
    ],
    extras: ["Fence cleaning", "Pre-paint prep", "Brick & concrete", "Bundle discounts"],
    popular: true,
  },
  {
    title: "Driveway Sealing",
    icon: HomeIcon,
    color: "bg-amber-500",
    startingAt: "$200",
    unit: "/driveway",
    tiers: [
      { label: "Small (under 400 sq ft)", price: "$200–$300" },
      { label: "Standard (400–700 sq ft)", price: "$350–$500" },
      { label: "Large (700–1,200 sq ft)", price: "$550–$800" },
    ],
    extras: ["Crack filling", "2-coat premium", "Oil stain treatment", "Neighbor discounts"],
    popular: false,
  },
  {
    title: "Gutter Cleaning",
    icon: Sparkles,
    color: "bg-purple-500",
    startingAt: "$125",
    unit: "/home",
    tiers: [
      { label: "1-Story Ranch", price: "$125–$175" },
      { label: "2-Story Colonial", price: "$175–$275" },
      { label: "3-Story / Complex", price: "$275–$350" },
    ],
    extras: ["Downspout flushing", "Minor repairs", "Before & after photos", "Seasonal plans"],
    popular: false,
  },
];

const stats = [
  { value: "500+", label: "Projects Completed", icon: Trophy },
  { value: "5+", label: "Years Experience", icon: Clock },
  { value: "100%", label: "Client Satisfaction", icon: ThumbsUp },
  { value: "4.9★", label: "Google Rating", icon: Star },
];

const services = [
  {
    title: "Landscaping",
    desc: "Complete lawn care, garden design, and landscape maintenance to keep your property looking its best year-round.",
    icon: TreePine,
    img: "/images/landscaping.png",
  },
  {
    title: "Power Washing",
    desc: "Restore your home's exterior, decks, patios, and walkways to like-new condition with our professional pressure washing.",
    icon: Droplets,
    img: "/images/pressure-washing.png",
  },
  {
    title: "Driveway Sealing",
    desc: "Protect and extend the life of your driveway with expert sealcoating that prevents cracks and weather damage.",
    icon: HomeIcon,
    img: "/images/driveway-sealing.png",
  },
  {
    title: "Gutter Cleaning",
    desc: "Keep water flowing properly and protect your home's foundation with thorough gutter cleaning and maintenance.",
    icon: Sparkles,
    img: "/images/gutter-cleaning.png",
  },
];

const testimonials = [
  {
    quote:
      "JM Residential transformed our yard completely. The landscaping looks incredible and the team was professional from start to finish.",
    name: "Sarah M.",
    location: "Ashburn, VA",
  },
  {
    quote:
      "Had our driveway sealed and the house power washed. It looks like we just moved in! Highly recommend their services.",
    name: "David K.",
    location: "Leesburg, VA",
  },
  {
    quote:
      "Reliable, on time, and great quality work. They cleaned our gutters and did a full yard cleanup. Will definitely use again.",
    name: "Jennifer L.",
    location: "Sterling, VA",
  },
];

const whyUs = [
  "Locally owned & operated in Loudoun County",
  "Licensed, insured, and fully equipped",
  "Free estimates with transparent pricing",
  "Consistent communication throughout every project",
  "Satisfaction guaranteed on every job",
];

export default function Home() {
  return (
    <>
      <SEO
        path="/"
        title="Landscaping & Power Washing in Loudoun County, VA"
        description="Professional landscaping, power washing, driveway sealing & gutter cleaning in Ashburn, Leesburg & Loudoun County, VA. Upfront pricing. Free estimates. Call (571) 578-1218."
      />
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src="/images/landscaping.png"
          alt="Beautiful landscaped property"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-white/15 backdrop-blur-sm text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 rounded-full mb-4 sm:mb-6 border border-white/20 mt-16 sm:mt-0">
              Loudoun County's Trusted Residential Experts
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight"
          >
            Elevate Your Home's
            <br />
            <span className="text-primary-300">Curb Appeal</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-8 sm:mb-10 px-2"
          >
            Professional landscaping, power washing, driveway sealing & gutter
            cleaning for homeowners across Loudoun County, VA.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0"
          >
            <Link to="/contact" className="btn-primary text-base sm:text-lg w-full sm:w-auto justify-center">
              Get a Free Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/portfolio" className="btn-outline text-base sm:text-lg w-full sm:w-auto justify-center">
              View Our Work
            </Link>
            <a
              href="https://www.thumbtack.com/va/ashburn/shed-moving/jm-professional-services/service/565316882815795205"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full flex items-center gap-2 transition-all duration-300 hover:shadow-xl text-base sm:text-lg w-full sm:w-auto justify-center"
            >
              <ExternalLink className="w-5 h-5" /> Find Us on Thumbtack
            </a>
          </motion.div>
        </div>

      </section>

      {/* Stats Bar */}
      <section className="bg-primary-800 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ value, label, icon: Icon }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <Icon className="w-7 h-7 text-primary-300 mx-auto mb-2" />
                <div className="font-display text-4xl font-bold text-primary-300 mb-1">
                  {value}
                </div>
                <div className="text-white/70 text-sm font-medium">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label">Transparent Pricing</span>
            <h2 className="section-title">Upfront & Honest Pricing</h2>
            <p className="text-neutral-500 text-lg max-w-2xl mx-auto mt-4">
              No hidden fees, no surprises. See our starting rates below and
              get a free custom quote for your property.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricing.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative bg-white rounded-2xl border ${
                  p.popular
                    ? "border-primary-400 shadow-xl shadow-primary-100"
                    : "border-neutral-200 shadow-sm"
                } p-6 flex flex-col`}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <div className={`w-12 h-12 ${p.color} rounded-xl flex items-center justify-center mb-4`}>
                  <p.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-neutral-900 mb-1">
                  {p.title}
                </h3>
                <div className="flex items-baseline gap-1 mb-5">
                  <span className="text-3xl font-display font-bold text-primary-600">
                    {p.startingAt}
                  </span>
                  <span className="text-neutral-400 text-sm">{p.unit}</span>
                </div>
                <div className="space-y-3 mb-6 flex-1">
                  {p.tiers.map((t) => (
                    <div
                      key={t.label}
                      className="flex justify-between items-center text-sm"
                    >
                      <span className="text-neutral-600">{t.label}</span>
                      <span className="font-semibold text-neutral-900">
                        {t.price}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-neutral-100 pt-4 mb-5">
                  <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                    Add-ons Available
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.extras.map((e) => (
                      <span
                        key={e}
                        className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded-md"
                      >
                        {e}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  to="/contact"
                  className={`w-full text-center py-3 rounded-xl font-semibold text-sm transition-all ${
                    p.popular
                      ? "bg-primary-600 text-white hover:bg-primary-700"
                      : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                  }`}
                >
                  Get a Free Quote
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-6 bg-primary-50 rounded-2xl px-6 sm:px-8 py-4">
              <div className="flex items-center gap-2">
                <Tag className="w-5 h-5 text-primary-600 shrink-0" />
                <span className="text-sm font-semibold text-primary-800">
                  Free estimates on every job
                </span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-primary-200" />
              <div className="flex items-center gap-2">
                <Percent className="w-5 h-5 text-primary-600 shrink-0" />
                <span className="text-sm font-semibold text-primary-800">
                  Book 2+ services & save 10%
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label">What We Do</span>
            <h2 className="section-title">Our Services</h2>
            <p className="text-neutral-500 text-lg max-w-2xl mx-auto mt-4">
              From landscaping to gutter cleaning, we provide comprehensive
              residential services to keep your property in top shape.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center shadow-lg">
                    <s.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold mb-2">
                    {s.title}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed mb-4">
                    {s.desc}
                  </p>
                  <Link
                    to="/services"
                    className="text-primary-600 font-semibold text-sm flex items-center gap-1.5 group/link"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/images/landscaping.png"
                alt="Professional landscaping work"
                className="rounded-2xl shadow-xl w-full aspect-[4/3] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border border-neutral-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-neutral-900 text-lg">
                      Fully Insured
                    </div>
                    <div className="text-primary-600 text-xs font-semibold">
                      Licensed & Bonded
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-label">Why Choose Us</span>
              <h2 className="section-title mb-6">
                The Trusted Name in Loudoun County Home Services
              </h2>
              <p className="text-neutral-500 text-lg mb-8">
                We're a family-owned business that treats every property like
                our own. Our commitment to quality and customer satisfaction has
                made us the go-to choice for homeowners across the county.
              </p>
              <ul className="space-y-4 mb-8">
                {whyUs.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-500 shrink-0" />
                    <span className="text-neutral-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-primary">
                Get Your Free Estimate <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary-300 font-semibold text-sm uppercase tracking-[0.2em] block mb-3">
              Testimonials
            </span>
            <h2 className="section-title-white">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-7"
              >
                <Quote className="w-8 h-8 text-primary-400 mb-4 opacity-60" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-white/85 text-sm leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">
                      {t.name}
                    </div>
                    <div className="text-primary-300 text-xs">
                      {t.location}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Transform Your Property?
          </h2>
          <p className="text-white/80 text-xl mb-10 max-w-xl mx-auto">
            Get a free, no-obligation quote today. Transparent pricing,
            no hidden fees — just honest, quality work.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary-700 hover:bg-neutral-50 font-bold px-8 py-4 rounded-full flex items-center gap-2 transition-all duration-300 hover:shadow-xl"
            >
              Get Free Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="tel:+15715781218" className="btn-outline">
              Call (571) 578-1218
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
