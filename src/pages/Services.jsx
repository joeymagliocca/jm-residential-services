import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  TreePine,
  Droplets,
  Home as HomeIcon,
  Sparkles,
  PhoneCall,
  ClipboardCheck,
  Wrench,
  ThumbsUp,
} from "lucide-react";

const services = [
  {
    title: "Landscaping",
    icon: TreePine,
    img: "/images/landscaping.png",
    desc: "Transform your outdoor space with professional landscape design, installation, and maintenance. From lush lawns to custom garden beds, we create beautiful outdoor environments that enhance your home's value and your quality of life.",
    features: [
      "Lawn mowing & maintenance",
      "Garden bed design & planting",
      "Mulching & edging",
      "Seasonal cleanups",
      "Shrub & hedge trimming",
      "Sod installation",
    ],
  },
  {
    title: "Power Washing",
    icon: Droplets,
    img: "/images/pressure-washing.png",
    desc: "Restore surfaces to their original beauty with our professional pressure washing services. We safely and effectively clean siding, decks, patios, walkways, and fencing — removing years of built-up dirt, mold, and grime.",
    features: [
      "House & siding washing",
      "Deck & patio cleaning",
      "Driveway & walkway cleaning",
      "Fence restoration",
      "Brick & concrete cleaning",
      "Pre-paint surface prep",
    ],
  },
  {
    title: "Driveway Sealing",
    icon: HomeIcon,
    img: "/images/driveway-sealing.png",
    desc: "Protect your asphalt and concrete driveways from the elements with professional sealcoating. Our premium sealants guard against UV damage, water penetration, oil stains, and freeze-thaw cracking — extending your driveway's life by years.",
    features: [
      "Asphalt sealcoating",
      "Crack filling & repair",
      "Surface preparation",
      "Oil stain treatment",
      "Edge-to-edge coverage",
      "2-coat application standard",
    ],
  },
  {
    title: "Gutter Cleaning",
    icon: Sparkles,
    img: "/images/gutter-cleaning.png",
    desc: "Prevent costly water damage with thorough gutter cleaning and maintenance. We remove all debris, flush downspouts, and inspect for damage — keeping water flowing away from your home's foundation where it belongs.",
    features: [
      "Full debris removal",
      "Downspout flushing",
      "Gutter inspection",
      "Minor repairs included",
      "Before & after photos",
      "Seasonal maintenance plans",
    ],
  },
];

const steps = [
  {
    num: "01",
    title: "Get in Touch",
    desc: "Call us or fill out our contact form. We'll discuss your needs and schedule a convenient time for a free estimate.",
    icon: PhoneCall,
  },
  {
    num: "02",
    title: "Free Assessment",
    desc: "We visit your property, assess the scope of work, and provide a detailed, transparent quote with no hidden fees.",
    icon: ClipboardCheck,
  },
  {
    num: "03",
    title: "Expert Service",
    desc: "Our professional team completes the work efficiently and thoroughly, treating your property with care and respect.",
    icon: Wrench,
  },
  {
    num: "04",
    title: "Your Satisfaction",
    desc: "We do a final walkthrough with you to make sure everything meets your expectations. Your satisfaction is guaranteed.",
    icon: ThumbsUp,
  },
];

export default function Services() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative py-40 overflow-hidden">
        <img
          src="/images/landscaping.png"
          alt="Residential services"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 to-black/50" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-5 text-primary-300">
            <span className="h-px w-12 bg-primary-400" />
            <span className="text-sm font-semibold uppercase tracking-widest">
              What We Do
            </span>
            <span className="h-px w-12 bg-primary-400" />
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-5">
            Our Services
          </h1>
          <p className="text-white/75 text-xl max-w-2xl mx-auto">
            Comprehensive residential services to keep your property looking its
            best, all year round.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 ${
                    i % 2 === 1 ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  <div
                    className={`relative h-64 lg:h-auto overflow-hidden ${
                      i % 2 === 1 ? "lg:col-start-2" : ""
                    }`}
                  >
                    <img
                      src={s.img}
                      alt={s.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center shadow-lg">
                      <s.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="p-8 lg:p-10 flex flex-col justify-center">
                    <h3 className="font-display text-3xl font-bold text-neutral-900 mb-4">
                      {s.title}
                    </h3>
                    <p className="text-neutral-500 leading-relaxed mb-6">
                      {s.desc}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {s.features.map((f) => (
                        <div
                          key={f}
                          className="flex items-center gap-2 text-sm text-neutral-700"
                        >
                          <Check className="w-4 h-4 text-accent-500 shrink-0" />
                          {f}
                        </div>
                      ))}
                    </div>
                    <Link
                      to="/contact"
                      className="text-primary-600 font-semibold flex items-center gap-1.5 group"
                    >
                      Get a Quote
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label">How It Works</span>
            <h2 className="section-title">Simple Process, Great Results</h2>
            <p className="text-neutral-500 text-lg max-w-2xl mx-auto mt-4">
              We make it easy to get started. Here's how we work with you from
              first call to final walkthrough.
            </p>
          </div>
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="text-center relative"
                >
                  <div className="relative inline-flex items-center justify-center w-20 h-20 bg-primary-600 rounded-2xl shadow-lg mb-6">
                    <step.icon className="w-8 h-8 text-white" />
                    <span className="absolute -top-2 -right-2 w-7 h-7 bg-primary-800 text-white text-xs font-bold rounded-full flex items-center justify-center">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-neutral-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 text-xl mb-10 max-w-xl mx-auto">
            Contact us today for a free estimate. No pressure, no hidden fees —
            just honest, quality work.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary-700 hover:bg-neutral-50 font-bold px-8 py-4 rounded-full flex items-center gap-2 transition-all duration-300 hover:shadow-xl"
            >
              Request a Quote <ArrowRight className="w-5 h-5" />
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
