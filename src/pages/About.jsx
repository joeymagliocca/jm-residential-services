import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Heart,
  Shield,
  Award,
  Target,
  Users,
  Calendar,
} from "lucide-react";

const values = [
  {
    title: "Quality First",
    desc: "We never cut corners. Every project gets the same attention to detail, whether it's a simple gutter cleaning or a full landscape redesign.",
    icon: Award,
    bg: "bg-primary-50",
    color: "text-primary-600",
  },
  {
    title: "Customer Focused",
    desc: "Your satisfaction drives everything we do. We listen, communicate clearly, and make sure you're happy with the results.",
    icon: Heart,
    bg: "bg-red-50",
    color: "text-red-500",
  },
  {
    title: "Reliable & Honest",
    desc: "We show up when we say we will, do what we promised, and charge what we quoted. Transparency isn't a policy — it's who we are.",
    icon: Shield,
    bg: "bg-accent-50",
    color: "text-accent-600",
  },
];

const timeline = [
  {
    year: "2021",
    event: "Started mowing lawns in the neighborhood",
    detail:
      "What began as a way to earn summer money quickly turned into a growing list of happy repeat customers.",
  },
  {
    year: "2022",
    event: "Expanded to power washing services",
    detail:
      "Invested in professional equipment and added exterior cleaning to meet customer demand.",
  },
  {
    year: "2023",
    event: "Added driveway sealing & gutter cleaning",
    detail:
      "Rounded out our service offerings to become a one-stop shop for residential exterior maintenance.",
  },
  {
    year: "2024",
    event: "Serving 100+ homes across Loudoun County",
    detail:
      "Grew from a solo operation to a small team, building a reputation for reliability and quality.",
  },
  {
    year: "2025",
    event: "JM Residential Services officially launched",
    detail:
      "Formalized the business with licensing, insurance, and a commitment to professional-grade service.",
  },
];

const team = [
  {
    name: "Joey M.",
    role: "Founder & Lead Technician",
    bio: "Started the business from the ground up. Passionate about delivering great results and building lasting relationships with every client.",
    initials: "JM",
    color: "bg-primary-700",
  },
];

const awards = [
  { icon: "⭐", name: "Top Rated Local Pro", org: "Nextdoor", year: "2025" },
  {
    icon: "🏆",
    name: "Customer Satisfaction Award",
    org: "Loudoun County",
    year: "2024",
  },
  {
    icon: "✅",
    name: "Licensed & Insured",
    org: "Commonwealth of Virginia",
    year: "Current",
  },
];

export default function About() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative py-40 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1773427617774-d9ce7493b3d8?w=1920&q=80&auto=format&fit=crop"
          alt="About JM Residential Services"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 to-black/50" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-5 text-primary-300">
            <span className="h-px w-12 bg-primary-400" />
            <span className="text-sm font-semibold uppercase tracking-widest">
              Our Story
            </span>
            <span className="h-px w-12 bg-primary-400" />
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-5">
            About Us
          </h1>
          <p className="text-white/75 text-xl max-w-2xl mx-auto">
            A family-run business built on hard work, honest service, and a
            commitment to our community.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-label">Our Story</span>
              <h2 className="section-title mb-6">
                Built From the Ground Up in Loudoun County
              </h2>
              <p className="text-neutral-500 text-lg leading-relaxed mb-4">
                JM Residential Services started the way most great businesses do
                — with a simple idea and a willingness to work hard. What began
                as mowing lawns for neighbors has grown into a full-service
                residential maintenance company serving homeowners across
                Loudoun County.
              </p>
              <p className="text-neutral-500 text-lg leading-relaxed mb-8">
                We're a young company with old-school values: show up on time, do
                great work, charge a fair price, and treat every property like
                it's our own. That approach has earned us a growing list of loyal
                clients who trust us with their homes.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-neutral-50 rounded-xl p-5 text-center">
                  <div className="font-display text-3xl font-bold text-primary-600">
                    500+
                  </div>
                  <div className="text-neutral-500 text-sm mt-1">
                    Projects Completed
                  </div>
                </div>
                <div className="bg-neutral-50 rounded-xl p-5 text-center">
                  <div className="font-display text-3xl font-bold text-primary-600">
                    100%
                  </div>
                  <div className="text-neutral-500 text-sm mt-1">
                    Satisfaction Rate
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/images/landscaping.png"
                alt="Our team at work"
                className="rounded-2xl shadow-xl w-full aspect-[3/4] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-neutral-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-accent-600" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-neutral-900 text-lg">
                      Family Owned
                    </div>
                    <div className="text-primary-600 text-xs font-semibold">
                      Locally Operated
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label">Our Values</span>
            <h2 className="section-title">What Drives Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 text-center"
              >
                <div
                  className={`w-16 h-16 ${v.bg} rounded-2xl flex items-center justify-center mx-auto mb-5`}
                >
                  <v.icon className={`w-7 h-7 ${v.color}`} />
                </div>
                <h3 className="font-display text-xl font-bold text-neutral-900 mb-3">
                  {v.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label">Our Journey</span>
            <h2 className="section-title">Milestones</h2>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-100" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative flex items-start gap-8 ${
                    i % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse md:text-right"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white z-10 shadow" />
                  {/* Content */}
                  <div className="ml-16 md:ml-0 md:w-1/2 md:px-8">
                    <span className="text-primary-600 font-display font-bold text-lg">
                      {item.year}
                    </span>
                    <h3 className="font-display text-lg font-bold text-neutral-900 mt-1">
                      {item.event}
                    </h3>
                    <p className="text-neutral-500 text-sm mt-2 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label">Meet the Team</span>
            <h2 className="section-title">The People Behind the Work</h2>
          </div>
          <div className="max-w-md mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 text-center"
              >
                <div
                  className={`w-20 h-20 ${member.color} rounded-2xl flex items-center justify-center mx-auto mb-5`}
                >
                  <span className="text-white font-display font-bold text-2xl">
                    {member.initials}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-neutral-900">
                  {member.name}
                </h3>
                <p className="text-primary-600 text-sm font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label">Recognition</span>
            <h2 className="section-title">Awards & Certifications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {awards.map((a, i) => (
              <motion.div
                key={a.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 bg-neutral-50 rounded-2xl p-5 border border-neutral-100"
              >
                <span className="text-3xl">{a.icon}</span>
                <div>
                  <div className="font-semibold text-neutral-900 text-sm">
                    {a.name}
                  </div>
                  <div className="text-neutral-500 text-xs">
                    {a.org} · {a.year}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-white/80 text-xl mb-10 max-w-xl mx-auto">
            Let's talk about how we can help keep your property looking great.
          </p>
          <Link
            to="/contact"
            className="bg-white text-primary-700 hover:bg-neutral-50 font-bold px-8 py-4 rounded-full inline-flex items-center gap-2 transition-all duration-300 hover:shadow-xl"
          >
            Contact Us <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
