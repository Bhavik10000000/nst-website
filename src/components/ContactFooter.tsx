import { motion } from "motion/react";
import {
  Phone,
  MessageCircle,
  MapPin,
  Send,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import { MagneticButton } from "./ui/MagneticButton";
import { cn } from "@/src/lib/utils";
import { useState } from "react";

export function Contact() {
  const [formState, setFormState] = useState<"idle" | "loading" | "success">(
    "idle",
  );
  const [selectedProgram, setSelectedProgram] = useState<string>("5th-10th");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setFormState("loading");

    const message = `New Callback Request

Name: ${name}
Phone: ${phone}
Program: ${selectedProgram}
Query: ${query}`;

    setTimeout(() => {
      window.location.href = `https://wa.me/919130114477?text=${encodeURIComponent(message)}`;

      setFormState("success");
    }, 500);
  };

  return (
    <section id="contact" className="py-16 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          {/* Left Side: Contact Info */}
          <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-art-black pb-8 lg:pb-0 lg:pr-12">
            <span className="art-label text-art-red mb-2 md:mb-4 block">
              Inquiries / Admissions
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-[80px] font-serif font-black tracking-tighter leading-none mb-8 md:mb-12">
              Let's. <br className="hidden lg:block" /> Talk.
            </h2>

            <div className="space-y-6 md:space-y-8">
              <div>
                <span className="art-label opacity-40 block mb-2">
                  Direct call —
                </span>
                <a
                  href="tel:+919130114477"
                  className="text-2xl md:text-3xl font-serif italic hover-strike"
                >
                  +91 913011 4477
                </a>
              </div>
              <div>
                <span className="art-label opacity-40 block mb-2">
                  WhatsApp —
                </span>
                <a
                  href="https://wa.me/919130114477"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl md:text-3xl font-serif italic text-emerald-600 hover-strike"
                >
                  Chat with Nikhil Sir
                </a>
              </div>
              <div>
                <span className="art-label opacity-40 block mb-2">
                  Digital —
                </span>
                <a
                  href="mailto:info@nsttutorial.com"
                  className="text-2xl md:text-3xl font-serif italic hover-strike"
                >
                  info@nsttutorial.com
                </a>
              </div>
              <div>
                <span className="art-label opacity-40 block mb-2 md:mb-4">
                  Vasind Office —
                </span>
                <p className="text-sm font-light leading-relaxed max-w-xs text-neutral-600">
                  Bajaj Enterprise, First Floor,
                  <br />
                  Gerse Road, Vasind (W) – 421601
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="border-b border-art-black py-2 md:py-4">
                  <span className="art-label opacity-40 block mb-1 md:mb-2">
                    01 / Full Name
                  </span>
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Identity"
                    className="w-full bg-transparent outline-none font-serif italic text-lg md:text-xl"
                  />
                </div>
                <div className="border-b border-art-black py-2 md:py-4">
                  <span className="art-label opacity-40 block mb-1 md:mb-2">
                    02 / Contact
                  </span>
                  <input
                    required
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Mobile Number"
                    className="w-full bg-transparent outline-none font-serif italic text-lg md:text-xl"
                  />
                </div>
              </div>

              <div className="border-b border-art-black py-4">
                <span className="art-label opacity-40 block mb-3 md:mb-4">
                  03 / Program Selection
                </span>
                <div className="flex flex-wrap gap-2.5 md:gap-4">
                  {["5th-10th", "11th-12th", "NEET/JEE", "Foundation"].map(
                    (choice) => (
                      <label
                        key={choice}
                        className="flex items-center cursor-pointer group"
                      >
                        <input
                          type="radio"
                          name="program"
                          value={choice}
                          checked={selectedProgram === choice}
                          onChange={() => setSelectedProgram(choice)}
                          className="hidden"
                        />
                        <span
                          className={cn(
                            "art-label text-[8px] md:text-[9px] px-3 py-1.5 border border-art-black transition-all cursor-pointer",
                            selectedProgram === choice
                              ? "bg-art-black text-white"
                              : "bg-white text-art-black hover:bg-neutral-100",
                          )}
                        >
                          {choice}
                        </span>
                      </label>
                    ),
                  )}
                </div>
              </div>

              <div className="border-b border-art-black py-2 md:py-4">
                <span className="art-label opacity-40 block mb-1 md:mb-2">
                  04 / Brief Query
                </span>
                <textarea
                  rows={1}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Specific academic needs..."
                  className="w-full bg-transparent outline-none font-serif italic text-lg md:text-xl resize-none"
                />
              </div>

              <button
                type="submit"
                className={cn(
                  "art-button w-full md:w-auto h-11 md:h-12 px-6 md:px-8 text-[10px] md:text-xs font-bold tracking-widest transition-all uppercase",
                  formState === "success" &&
                    "bg-art-red text-white border-art-red",
                )}
              >
                {formState === "idle" && "Request Strategic Callback"}
                {formState === "loading" && "Processing..."}
                {formState === "success" && "Request Received."}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <div className="bg-art-black text-white">
      <footer className="py-24 px-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-md">
            <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-6">
              NST Tuition
            </h2>
            <p className="art-label opacity-40 leading-relaxed max-w-xs">
              Hyper-personalized learning frameworks for high-achieving
              profiles. Est. 2012 / Mumbai.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 lg:gap-24">
            <div>
              <span className="art-label text-art-red mb-6 block">
                Navigation
              </span>
              <ul className="space-y-4 art-label text-[10px] opacity-60">
                <li>
                  <a href="#method" className="hover-strike">
                    The Method
                  </a>
                </li>
                <li>
                  <a href="#faculty-toppers" className="hover-strike">
                    Faculty & Toppers
                  </a>
                </li>
                <li>
                  <a href="#results" className="hover-strike">
                    Success Metrics
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover-strike">
                    Get in Touch
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <span className="art-label text-art-red mb-6 block">Digital</span>
              <ul className="space-y-4 art-label text-[10px] opacity-60">
                <li>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover-strike"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover-strike"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover-strike"
                  >
                    Youtube
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover-strike"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Ticker Line from theme */}
      <div className="h-10 bg-neutral-950 flex items-center overflow-hidden whitespace-nowrap border-t border-neutral-800">
        <div className="flex gap-20 art-label text-[9px] font-bold tracking-[0.4em] px-10 animate-marquee items-center text-white/30">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex gap-20 items-center">
              <span>Personalized Excellence</span>
              <span>*</span>
              <span>Elite Results Only</span>
              <span>*</span>
              <span>NST Tuition</span>
              <span>*</span>
              <span>Empowerment through Knowledge</span>
              <span>*</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
