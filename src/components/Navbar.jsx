import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  const transparent = isHome && !scrolled && !mobileOpen;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-md shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center font-display font-bold text-lg ${
                transparent
                  ? "bg-white/20 text-white"
                  : "bg-primary-600 text-white"
              }`}
            >
              JM
            </div>
            <div>
              <div
                className={`font-display font-bold text-lg leading-tight ${
                  transparent ? "text-white" : "text-neutral-900"
                }`}
              >
                JM Residential
              </div>
              <div
                className={`text-xs font-medium tracking-wider uppercase ${
                  transparent ? "text-white/70" : "text-primary-600"
                }`}
              >
                Services
              </div>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.to
                    ? transparent
                      ? "text-white font-semibold"
                      : "text-primary-600 font-semibold"
                    : transparent
                    ? "text-white/80 hover:text-white"
                    : "text-neutral-600 hover:text-primary-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+15715781218"
              className={`inline-flex items-center gap-2 font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-300 ${
                transparent
                  ? "bg-white/20 text-white hover:bg-white/30"
                  : "bg-primary-600 text-white hover:bg-primary-700"
              }`}
            >
              <Phone className="w-4 h-4" />
              (571) 578-1218
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`lg:hidden p-2 rounded-xl ${
              transparent ? "text-white" : "text-neutral-800"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden pb-6 border-t border-neutral-100">
            <div className="flex flex-col gap-1 pt-4">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    location.pathname === link.to
                      ? "bg-primary-50 text-primary-600"
                      : "text-neutral-600 hover:bg-neutral-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+15715781218"
                className="mt-3 btn-primary justify-center"
              >
                <Phone className="w-4 h-4" />
                (571) 578-1218
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
