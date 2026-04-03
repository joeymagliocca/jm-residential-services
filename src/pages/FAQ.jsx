import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ArrowRight,
  Phone,
  TreePine,
  Droplets,
  Home as HomeIcon,
  Sparkles,
  HelpCircle,
  MapPin,
  MessageSquare,
} from "lucide-react";

/* ───── Accordion Item ───── */
function AccordionItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border border-neutral-200 rounded-xl overflow-hidden">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-neutral-50 transition-colors"
      >
        <span className="font-semibold text-neutral-900 text-[15px] leading-snug">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-neutral-400 shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-neutral-600 text-sm leading-relaxed border-t border-neutral-100 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ───── Category CTA ───── */
function CategoryCTA({ text }) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
      <span className="text-neutral-400">{text}</span>
      <a
        href="tel:+15715781218"
        className="bg-primary-600 text-white font-semibold px-4 py-2 rounded-full flex items-center gap-1.5 hover:bg-primary-700 transition-colors"
      >
        <Phone className="w-3.5 h-3.5" /> Call Now
      </a>
      <a
        href="sms:+15715781218?body=Hi%20JM%20Residential!%20I%27m%20interested%20in%20a%20free%20quote."
        className="bg-green-500 text-white font-semibold px-4 py-2 rounded-full flex items-center gap-1.5 hover:bg-green-600 transition-colors"
      >
        <MessageSquare className="w-3.5 h-3.5" /> Text Us
      </a>
    </div>
  );
}

/* ───── FAQ Data ───── */
const faqCategories = [
  {
    title: "General",
    icon: HelpCircle,
    color: "bg-primary-500",
    cta: "Have a question we didn't cover?",
    items: [
      {
        q: "Are you licensed and insured?",
        a: "Yes! JM Residential Services is fully licensed and insured in the state of Virginia. We carry general liability insurance to protect your property and our team on every job. We're happy to provide documentation upon request.",
      },
      {
        q: "What areas do you serve?",
        a: (
          <div>
            <p className="mb-3">
              We proudly serve homeowners across Loudoun County, VA, including:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                "Ashburn",
                "Leesburg",
                "Sterling",
                "Purcellville",
                "South Riding",
                "Broadlands",
                "Lansdowne",
                "Middleburg",
                "Hamilton",
              ].map((area) => (
                <div key={area} className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-primary-500" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-neutral-400">
              Don't see your area? Contact us — we may still be able to help.
            </p>
          </div>
        ),
      },
      {
        q: "Do I need to be home during service?",
        a: "Nope! Most of our services are performed entirely outside. As long as we can access the work area, you're free to go about your day. We'll leave everything tidy and send you a summary when the job is done.",
      },
      {
        q: "How do I get a quote?",
        a: "Getting a quote is easy and always free. You can call us at (571) 578-1218, fill out our contact form, or find us on Thumbtack. We'll discuss your needs and provide a transparent estimate — no hidden fees, no pressure.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept cash, check, Venmo, Zelle, and all major credit/debit cards. Payment is due upon completion of service unless other arrangements have been made.",
      },
      {
        q: "Do you offer bundle discounts or seasonal packages?",
        a: "Absolutely! Book 2 or more services together and save 10%. We also offer seasonal packages — for example, combine a spring gutter cleaning with a fall cleanup at a discounted rate. Ask us about custom packages tailored to your property.",
      },
    ],
  },
  {
    title: "Landscaping",
    icon: TreePine,
    color: "bg-green-500",
    cta: "Need help with your yard?",
    items: [
      {
        q: "How often should I mow my lawn?",
        a: "During the growing season (April–October in Virginia), weekly mowing is ideal to keep your lawn healthy and looking sharp. In early spring and late fall, biweekly is usually sufficient. We'll recommend the right schedule based on your grass type and property.",
      },
      {
        q: "What's included in a standard lawn visit?",
        a: "Every visit includes mowing, edging along walkways and driveways, string trimming around obstacles and beds, and blowing all clippings off hard surfaces. It's a complete, clean-cut look every time.",
      },
      {
        q: "Do you offer one-time cleanups or just recurring service?",
        a: "Both! We're happy to do one-time seasonal cleanups, and we also offer weekly and biweekly recurring service with no contracts. You can pause or cancel anytime.",
      },
      {
        q: "When is the best time to mulch?",
        a: "In Loudoun County, the best time to mulch is mid-April through May, after the last frost. Mulching in spring helps retain moisture, suppress weeds, and give your garden beds a fresh, polished look heading into summer.",
      },
    ],
  },
  {
    title: "Power Washing",
    icon: Droplets,
    color: "bg-blue-500",
    cta: "Ready to restore your surfaces?",
    items: [
      {
        q: "Will pressure washing damage my siding or paint?",
        a: "Not when done properly. We adjust our pressure and technique for each surface type. For vinyl and painted siding, we use a soft wash method with lower pressure and specialized cleaning solutions that do the heavy lifting — not brute force.",
      },
      {
        q: "How often should I power wash my house?",
        a: "In our Virginia climate with the humidity and seasonal changes, we recommend power washing your home's exterior every 1–2 years. Driveways and patios may benefit from annual cleaning, especially in shaded areas prone to algae and mildew.",
      },
      {
        q: "Is pressure washing safe for all surfaces?",
        a: "We customize our approach for every surface. Concrete and brick can handle higher pressure, while wood decks, vinyl siding, and painted surfaces require a gentler soft wash technique. We'll always assess your surfaces before we start.",
      },
      {
        q: "Do you use chemicals? Are they safe for my plants and pets?",
        a: "We use professional-grade, biodegradable cleaning solutions. Before any application near landscaping, we pre-wet plants and rinse thoroughly after. Our solutions break down quickly and are safe for your lawn, plants, and pets once dry.",
      },
    ],
  },
  {
    title: "Driveway Sealing",
    icon: HomeIcon,
    color: "bg-amber-500",
    cta: "Want to protect your driveway?",
    items: [
      {
        q: "How long does sealcoating last?",
        a: "A professional sealcoat application typically lasts 2–3 years in Virginia's climate, depending on traffic, sun exposure, and weather conditions. We recommend resealing every 2–3 years to maintain maximum protection against cracking and UV damage.",
      },
      {
        q: "How long before I can drive on my sealed driveway?",
        a: "We recommend staying off the driveway for a minimum of 24 hours, and ideally 48 hours for full cure. We'll block off the area with caution tape and cones, and let you know exactly when it's safe to use.",
      },
      {
        q: "Do you fill cracks before sealing?",
        a: "Yes! Crack filling is a standard part of our prep process. We clean out debris from cracks and apply professional-grade crack filler before applying the sealcoat. This ensures a smooth, long-lasting finish and prevents water from penetrating beneath the surface.",
      },
      {
        q: "What's the best time of year to seal a driveway?",
        a: "Sealcoating requires temperatures of 50°F or above and dry conditions for proper curing. In Loudoun County, the ideal window is April through October. We monitor weather closely and will reschedule if conditions aren't right — we never cut corners on cure time.",
      },
    ],
  },
  {
    title: "Gutter Cleaning",
    icon: Sparkles,
    color: "bg-purple-500",
    cta: "Time for a gutter checkup?",
    items: [
      {
        q: "How often should gutters be cleaned?",
        a: "At minimum, twice per year — once in spring and once in late fall after the leaves drop. If your home is surrounded by mature trees (especially pines), you may benefit from 3–4 cleanings per year. Clogged gutters can lead to foundation damage, basement flooding, and rotted fascia.",
      },
      {
        q: "What's included in your gutter cleaning service?",
        a: "Our standard service includes complete debris removal from all gutters, downspout flushing to ensure proper flow, a visual inspection for damage or loose hangers, minor tightening and repairs at no extra charge, and full cleanup of any mess. We leave your property as clean as we found it.",
      },
      {
        q: "How do I know if my gutters need cleaning?",
        a: "Common signs include water overflowing during rain, plants or seedlings growing in your gutters, sagging or pulling away from the roofline, water stains on your siding, or pooling water near your foundation. If you're not sure, we're happy to do a quick inspection.",
      },
      {
        q: "Do you provide before and after photos?",
        a: "Yes! We photograph your gutters before and after every cleaning. This gives you peace of mind that the job was done thoroughly, and it's great for keeping records of your home maintenance. We'll text or email them to you the same day.",
      },
    ],
  },
];

/* ───── Page Component ───── */
export default function FAQ() {
  const [openItems, setOpenItems] = useState({});

  const toggle = (catIdx, itemIdx) => {
    const key = `${catIdx}-${itemIdx}`;
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const expandAll = () => {
    const all = {};
    faqCategories.forEach((cat, ci) =>
      cat.items.forEach((_, ii) => {
        all[`${ci}-${ii}`] = true;
      })
    );
    setOpenItems(all);
  };

  const collapseAll = () => setOpenItems({});

  return (
    <>
      {/* Page Hero */}
      <section className="relative py-40 overflow-hidden">
        <img
          src="/images/landscaping.png"
          alt="Frequently asked questions"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 to-black/50" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-5 text-primary-300">
            <span className="h-px w-12 bg-primary-400" />
            <span className="text-sm font-semibold uppercase tracking-widest">
              Got Questions?
            </span>
            <span className="h-px w-12 bg-primary-400" />
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-5">
            FAQ
          </h1>
          <p className="text-white/75 text-xl max-w-2xl mx-auto">
            Everything you need to know about our services, pricing, and
            process. Can't find your answer? Just reach out.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Controls */}
          <div className="flex justify-end gap-3 mb-10">
            <button
              onClick={expandAll}
              className="text-sm text-primary-600 font-semibold hover:underline"
            >
              Expand All
            </button>
            <span className="text-neutral-300">|</span>
            <button
              onClick={collapseAll}
              className="text-sm text-primary-600 font-semibold hover:underline"
            >
              Collapse All
            </button>
          </div>

          {/* Categories */}
          <div className="space-y-14">
            {faqCategories.map((cat, catIdx) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIdx * 0.05 }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-10 h-10 ${cat.color} rounded-xl flex items-center justify-center`}
                  >
                    <cat.icon className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-neutral-900">
                    {cat.title}
                  </h2>
                </div>

                {/* Accordion Items */}
                <div className="space-y-3">
                  {cat.items.map((item, itemIdx) => (
                    <AccordionItem
                      key={itemIdx}
                      question={item.q}
                      answer={item.a}
                      isOpen={!!openItems[`${catIdx}-${itemIdx}`]}
                      onClick={() => toggle(catIdx, itemIdx)}
                    />
                  ))}
                </div>

                {/* Category CTA */}
                <CategoryCTA text={cat.cta} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-20 bg-primary-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-white/80 text-xl mb-10 max-w-xl mx-auto">
            We're here to help. Reach out anytime and we'll get back to you
            within 24 hours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary-700 hover:bg-neutral-50 font-bold px-8 py-4 rounded-full flex items-center gap-2 transition-all duration-300 hover:shadow-xl"
            >
              Send Us a Message <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+15715781218"
              className="btn-outline flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call (571) 578-1218
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
