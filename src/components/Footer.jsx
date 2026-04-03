import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, ArrowRight, ExternalLink } from "lucide-react";

const services = [
  "Landscaping",
  "Power Washing",
  "Driveway Sealing",
  "Gutter Cleaning",
];

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center font-display font-bold text-lg">
                JM
              </div>
              <div>
                <div className="font-display font-bold text-lg leading-tight">
                  JM Residential
                </div>
                <div className="text-primary-400 text-xs font-medium tracking-wider uppercase">
                  Services
                </div>
              </div>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed mb-5">
              Professional residential services for homeowners across Loudoun
              County, VA. Quality work, reliable service, guaranteed
              satisfaction.
            </p>
            <div className="flex items-center gap-2 text-primary-400 text-sm font-semibold">
              <Clock className="w-4 h-4" />
              Mon–Sat: 7:00 AM – 7:00 PM
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-neutral-400 hover:text-white text-sm flex items-center gap-2 transition-colors group"
                  >
                    <ArrowRight className="w-3 h-3 text-primary-500 group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-lg mb-5">Our Services</h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-neutral-400 hover:text-white text-sm flex items-center gap-2 transition-colors group"
                  >
                    <ArrowRight className="w-3 h-3 text-primary-500 group-hover:translate-x-1 transition-transform" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-lg mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-0.5 shrink-0" />
                <span className="text-neutral-400 text-sm">
                  44120 Bristow Circle
                  <br />
                  Loudoun County, VA
                </span>
              </li>
              <li>
                <a
                  href="tel:+15715781218"
                  className="flex items-center gap-3 text-neutral-400 hover:text-white text-sm transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary-400 shrink-0" />
                  (571) 578-1218
                </a>
              </li>
              <li>
                <a
                  href="mailto:joeymagliocca@gmail.com"
                  className="flex items-center gap-3 text-neutral-400 hover:text-white text-sm transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary-400 shrink-0" />
                  joeymagliocca@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.thumbtack.com/va/ashburn/shed-moving/jm-professional-services/service/565316882815795205"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-neutral-400 hover:text-white text-sm transition-colors"
                >
                  <ExternalLink className="w-5 h-5 text-primary-400 shrink-0" />
                  Find Us on Thumbtack
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} JM Residential Services. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.thumbtack.com/va/ashburn/shed-moving/jm-professional-services/service/565316882815795205"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-primary-400 transition-colors"
              title="Thumbtack"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-6h2v6zm-2-8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
              </svg>
            </a>
            <p className="text-neutral-600 text-xs">
              Proudly serving Loudoun County, VA and surrounding areas
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
