import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";

function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 backdrop-blur-md border-t border-neutral-200 px-4 py-3 flex gap-3">
      <a
        href="tel:+15715781218"
        className="flex-1 bg-primary-600 text-white font-bold text-sm py-3 rounded-xl flex items-center justify-center gap-2"
      >
        📞 Call Now
      </a>
      <a
        href="sms:+15715781218?body=Hi%20JM%20Residential!%20I%27m%20interested%20in%20a%20free%20quote."
        className="flex-1 bg-neutral-900 text-white font-bold text-sm py-3 rounded-xl flex items-center justify-center gap-2"
      >
        💬 Text Us
      </a>
    </div>
  );
}

function ChatBubble() {
  return (
    <a
      href="sms:+15715781218?body=Hi%20JM%20Residential!%20I%27m%20interested%20in%20a%20free%20quote."
      className="fixed bottom-6 right-6 z-50 hidden lg:flex w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full items-center justify-center shadow-2xl shadow-green-500/30 transition-all duration-300 hover:scale-110 group"
      title="Text us for a free quote"
    >
      <svg
        className="w-7 h-7 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
      <span className="absolute -top-10 right-0 bg-neutral-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Text us for a free quote!
      </span>
    </a>
  );
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 pb-16 lg:pb-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
        <Footer />
        <ChatBubble />
        <MobileCTA />
      </div>
    </HashRouter>
  );
}
