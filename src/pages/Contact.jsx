import { useState } from "react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  Send,
  Star,
  Shield,
  Award,
  ExternalLink,
} from "lucide-react";

const serviceOptions = [
  "Landscaping",
  "Power Washing",
  "Driveway Sealing",
  "Gutter Cleaning",
  "Multiple Services",
  "Other",
];

const hours = [
  { day: "Monday – Friday", time: "7:00 AM – 7:00 PM" },
  { day: "Saturday", time: "8:00 AM – 5:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
    if (errors[field]) setErrors({ ...errors, [field]: undefined });
  };

  return (
    <>
      <SEO
        path="/contact"
        title="Contact Us — Free Estimates in Loudoun County"
        description="Get a free estimate from JM Residential Services. Call (571) 578-1218 or text us for landscaping, power washing, driveway sealing & gutter cleaning in Loudoun County, VA."
      />
      {/* Page Hero */}
      <section className="relative py-40 overflow-hidden">
        <img
          src="/images/landscaping.png"
          alt="Contact us"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 to-black/50" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-5 text-primary-300">
            <span className="h-px w-12 bg-primary-400" />
            <span className="text-sm font-semibold uppercase tracking-widest">
              Get in Touch
            </span>
            <span className="h-px w-12 bg-primary-400" />
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-5">
            Contact Us
          </h1>
          <p className="text-white/75 text-xl max-w-2xl mx-auto">
            Ready for a free estimate? Reach out and we'll get back to you
            within 24 hours.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Form Panel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 bg-white rounded-3xl shadow-xl p-8 md:p-10"
            >
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-accent-600" />
                  </div>
                  <h3 className="font-display text-3xl font-bold text-neutral-900 mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-neutral-500 text-lg max-w-md mx-auto">
                    Thanks, {form.name.split(" ")[0]}! We'll review your message
                    and get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="font-display text-3xl font-bold text-neutral-900 mb-2">
                    Get a Free Quote
                  </h2>
                  <p className="text-neutral-500 mb-8">
                    Fill out the form below and we'll get back to you shortly.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={handleChange("name")}
                          placeholder="John Smith"
                          className={`input-field ${
                            errors.name
                              ? "border-red-400 ring-1 ring-red-400"
                              : ""
                          }`}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                          Email *
                        </label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={handleChange("email")}
                          placeholder="john@example.com"
                          className={`input-field ${
                            errors.email
                              ? "border-red-400 ring-1 ring-red-400"
                              : ""
                          }`}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                          Phone (optional)
                        </label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={handleChange("phone")}
                          placeholder="(571) 555-0123"
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                          Service Needed
                        </label>
                        <select
                          value={form.service}
                          onChange={handleChange("service")}
                          className="input-field"
                        >
                          <option value="">Select a service...</option>
                          {serviceOptions.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                        Message *
                      </label>
                      <textarea
                        value={form.message}
                        onChange={handleChange("message")}
                        placeholder="Tell us about your project — property size, specific needs, preferred timeline..."
                        rows={5}
                        className={`input-field resize-none ${
                          errors.message
                            ? "border-red-400 ring-1 ring-red-400"
                            : ""
                        }`}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.message}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-neutral-400 text-xs">
                      <CheckCircle className="w-4 h-4" />
                      Your information is never shared with third parties.
                    </div>
                    <button type="submit" className="btn-primary w-full justify-center text-lg">
                      Send Message <Send className="w-5 h-5" />
                    </button>
                  </form>
                </>
              )}
            </motion.div>

            {/* Info Panel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Contact Details */}
              <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 p-6">
                <h3 className="font-display text-lg font-bold text-neutral-900 mb-5">
                  Contact Details
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <div className="font-medium text-neutral-900 text-sm">
                        Address
                      </div>
                      <div className="text-neutral-500 text-sm">
                        44120 Bristow Circle
                        <br />
                        Loudoun County, VA
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <div className="font-medium text-neutral-900 text-sm">
                        Phone
                      </div>
                      <a
                        href="tel:+15715781218"
                        className="text-primary-600 text-sm font-semibold hover:underline"
                      >
                        (571) 578-1218
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <div className="font-medium text-neutral-900 text-sm">
                        Email
                      </div>
                      <a
                        href="mailto:joeymagliocca@gmail.com"
                        className="text-primary-600 text-sm font-semibold hover:underline"
                      >
                        joeymagliocca@gmail.com
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 p-6">
                <h3 className="font-display text-lg font-bold text-neutral-900 mb-5 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary-600" />
                  Business Hours
                </h3>
                <ul className="space-y-3">
                  {hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex justify-between text-sm"
                    >
                      <span className="text-neutral-600 font-medium">
                        {h.day}
                      </span>
                      <span
                        className={`font-semibold ${
                          h.time === "Closed"
                            ? "text-red-500"
                            : "text-neutral-900"
                        }`}
                      >
                        {h.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8 text-center">
                <MapPin className="w-10 h-10 text-primary-600 mx-auto mb-3" />
                <h3 className="font-display font-bold text-neutral-900 mb-2">
                  Serving Loudoun County
                </h3>
                <p className="text-neutral-600 text-sm mb-4">
                  Ashburn, Leesburg, Sterling, Purcellville, South Riding &
                  surrounding areas
                </p>

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof Strip */}
      <section className="py-12 bg-white border-t border-neutral-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <div>
                <div className="font-bold text-neutral-900 text-sm">
                  4.9/5.0
                </div>
                <div className="text-neutral-500 text-xs">Google Reviews</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <div className="font-bold text-neutral-900 text-sm">
                  Fully Insured
                </div>
                <div className="text-neutral-500 text-xs">
                  Licensed in Virginia
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent-100 rounded-xl flex items-center justify-center">
                <Award className="w-5 h-5 text-accent-600" />
              </div>
              <div>
                <div className="font-bold text-neutral-900 text-sm">
                  Top Rated
                </div>
                <div className="text-neutral-500 text-xs">
                  Nextdoor & Angi
                </div>
              </div>
            </div>
            <a
              href="https://www.thumbtack.com/va/ashburn/shed-moving/jm-professional-services/service/565316882815795205"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                <ExternalLink className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <div className="font-bold text-neutral-900 text-sm">
                  Thumbtack Pro
                </div>
                <div className="text-neutral-500 text-xs">
                  View Our Profile
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
