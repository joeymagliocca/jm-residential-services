import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, ChevronLeft, ChevronRight, MapPin } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Complete Backyard Transformation",
    category: "Landscaping",
    location: "Ashburn, VA",
    year: "2025",
    img: "/images/landscaping.png",
    desc: "Full landscape redesign including new sod, garden beds, mulching, and decorative stone walkways.",
  },
  {
    id: 2,
    title: "Home Exterior Power Wash",
    category: "Power Washing",
    location: "Leesburg, VA",
    year: "2025",
    img: "/images/pressure-washing.png",
    desc: "Complete exterior cleaning — siding, deck, walkways, and driveway restored to like-new condition.",
  },
  {
    id: 3,
    title: "Driveway Restoration & Seal",
    category: "Driveway Sealing",
    location: "Sterling, VA",
    year: "2025",
    img: "/images/driveway-sealing.png",
    desc: "Crack repair and premium two-coat sealant application on a 2,500 sq ft asphalt driveway.",
  },
  {
    id: 4,
    title: "Seasonal Gutter Service",
    category: "Gutter Cleaning",
    location: "Purcellville, VA",
    year: "2025",
    img: "/images/gutter-cleaning.png",
    desc: "Full gutter and downspout cleaning with inspection and minor repairs on a two-story colonial.",
  },
  {
    id: 5,
    title: "Front Yard Curb Appeal",
    category: "Landscaping",
    location: "South Riding, VA",
    year: "2026",
    img: "/images/landscaping.png",
    desc: "New flower beds, fresh mulch, hedge trimming, and edging for a stunning front yard makeover.",
  },
  {
    id: 6,
    title: "Patio & Deck Deep Clean",
    category: "Power Washing",
    location: "Broadlands, VA",
    year: "2026",
    img: "/images/pressure-washing.png",
    desc: "Composite deck and stone patio power wash, prepped and cleaned for summer entertaining season.",
  },
  {
    id: 7,
    title: "Large Property Landscaping",
    category: "Landscaping",
    location: "Middleburg, VA",
    year: "2026",
    img: "/images/landscaping.png",
    desc: "Multi-acre property maintenance including mowing, edging, tree trimming, and seasonal cleanup.",
  },
  {
    id: 8,
    title: "Cul-de-Sac Driveway Project",
    category: "Driveway Sealing",
    location: "Lansdowne, VA",
    year: "2026",
    img: "/images/driveway-sealing.png",
    desc: "Sealed three neighboring driveways in a single project — bulk pricing for the whole block.",
  },
];

const categories = ["All", "Landscaping", "Power Washing", "Driveway Sealing", "Gutter Cleaning"];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const currentIdx = lightbox
    ? filtered.findIndex((p) => p.id === lightbox)
    : -1;

  const navigate = (dir) => {
    const next = currentIdx + dir;
    if (next >= 0 && next < filtered.length) setLightbox(filtered[next].id);
  };

  const currentProject = filtered.find((p) => p.id === lightbox);

  return (
    <>
      <SEO
        path="/portfolio"
        title="Our Work — Before & After Photos"
        description="See real before and after photos of landscaping, power washing, driveway sealing & gutter cleaning projects in Loudoun County, VA by JM Residential Services."
      />
      {/* Page Hero */}
      <section className="relative py-40 overflow-hidden">
        <img
          src="/images/pressure-washing.png"
          alt="Our portfolio"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 to-black/50" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-5 text-primary-300">
            <span className="h-px w-12 bg-primary-400" />
            <span className="text-sm font-semibold uppercase tracking-widest">
              Our Work
            </span>
            <span className="h-px w-12 bg-primary-400" />
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-5">
            Portfolio
          </h1>
          <p className="text-white/75 text-xl max-w-2xl mx-auto">
            Browse our recent projects and see the quality of work we deliver to
            homeowners across Loudoun County.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  filter === cat
                    ? "bg-primary-600 text-white shadow-lg"
                    : "bg-white text-neutral-600 border border-neutral-200 hover:border-primary-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: i * 0.05 }}
                  className="aspect-square overflow-hidden rounded-2xl relative cursor-pointer group"
                  onClick={() => setLightbox(p.id)}
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-end">
                    <div className="p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="text-white font-display font-bold">
                        {p.title}
                      </div>
                      <div className="text-white/70 text-sm flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3" />
                        {p.location}
                      </div>
                    </div>
                  </div>
                  <span className="absolute top-3 left-3 bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {p.category}
                  </span>
                  <span className="absolute top-3 right-3 bg-black/40 text-white text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-sm">
                    {p.year}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && currentProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white z-10"
              onClick={() => setLightbox(null)}
            >
              <X className="w-8 h-8" />
            </button>
            {currentIdx > 0 && (
              <button
                className="absolute left-4 md:left-8 text-white/70 hover:text-white z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(-1);
                }}
              >
                <ChevronLeft className="w-10 h-10" />
              </button>
            )}
            {currentIdx < filtered.length - 1 && (
              <button
                className="absolute right-4 md:right-8 text-white/70 hover:text-white z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(1);
                }}
              >
                <ChevronRight className="w-10 h-10" />
              </button>
            )}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={currentProject.img}
                alt={currentProject.title}
                className="w-full rounded-xl max-h-[70vh] object-cover"
              />
              <div className="mt-4">
                <h3 className="font-display text-2xl font-bold text-white">
                  {currentProject.title}
                </h3>
                <p className="text-white/60 text-sm mt-1">
                  {currentProject.location} · {currentProject.category} ·{" "}
                  {currentProject.year}
                </p>
                <p className="text-white/80 mt-3">{currentProject.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-20 bg-primary-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Love What You See?
          </h2>
          <p className="text-white/80 text-xl mb-10 max-w-xl mx-auto">
            Let us do the same for your home. Request a free quote today.
          </p>
          <Link
            to="/contact"
            className="bg-white text-primary-700 hover:bg-neutral-50 font-bold px-8 py-4 rounded-full inline-flex items-center gap-2 transition-all duration-300 hover:shadow-xl"
          >
            Get Your Free Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
