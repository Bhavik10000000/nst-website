import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import {
  X,
  Search,
  Award,
  GraduationCap,
  CheckCircle2,
  ChevronRight,
  BookOpen,
  Star,
  Sparkles,
} from "lucide-react";

interface AcademicRegistryProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: string;
}

export function AcademicRegistry({
  isOpen,
  onClose,
  initialTab = "all",
}: AcademicRegistryProps) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [searchTerm, setSearchTerm] = useState("");

  const facultyMembers = [
    {
      name: "Mr. Nikhil Shewale Sir",
      role: "Founder & Lead Director",
      experience: "10+ Years of Success",
      bio: "An elite science and mathematics tutor who established NST Tutorials in 2012. Known for core conceptual building, customized learning schedules, and bridging the gap between potential and peak scores.",
      specialty: [
        "Physics & Math Specialist",
        "NEET/JEE Strategist",
        "Admission Consulting & Career Guidance",
      ],
      quote:
        "Don't think twice. Make the right choice at once. You won't regret choosing us.",
    },
  ];

  const collegeToppers = [
    {
      name: "Adharv Kadam",
      score: "87.33%",
      detail: "1st Rank (97/100 Maths)",
      school: "G.P. Parshik College, Khanivali",
      stream: "12th Science / Boards",
      category: "12th",
    },
    {
      name: "Sonali Dash",
      score: "86.17%",
      detail: "2nd Rank Overall",
      school: "G.P. Parshik College, Khanivali",
      stream: "12th Science / Boards",
      category: "12th",
    },
    {
      name: "Mitali Shelar",
      score: "84.83%",
      detail: "1st Rank Overall",
      school: "New Ideal College, Vasind / Birla College",
      stream: "12th Science / Boards",
      category: "12th",
    },
    {
      name: "Vaishnavi Dubhele",
      score: "82.50%",
      detail: "1st Rank (97/100 Maths)",
      school: "Saraswati Vidyalaya, Vasind",
      stream: "12th Science / Boards",
      category: "12th",
    },
    {
      name: "Monish R. Patil",
      score: "84.67%",
      detail: "NEET 590 / 93%ile JEE",
      school: "G.P. Parshik College, Khanivali",
      stream: "12th Science & Competitive",
      category: "competitive",
    },
    {
      name: "Vedika Sapale",
      score: "90% Bio",
      detail: "Subject Topper (Biology)",
      school: "Saraswati Vidyalaya, Vasind",
      stream: "12th Science",
      category: "12th",
    },
    {
      name: "Omkar Thakare",
      score: "88.89%ile",
      detail: "JEE Main Elite Ranker",
      school: "HSC Competitive Stream",
      stream: "JEE Main",
      category: "competitive",
    },
  ];

  const classTenToppers = [
    {
      name: "Vaishnavi Dubhele",
      score: "96.80%",
      detail: "1st Rank (97/100 Maths)",
      school: "Saraswati Vidyalaya, Vasind",
      category: "10th",
    },
    {
      name: "Parth Kathole",
      score: "95.00%",
      detail: "1st Rank (98/100 Science)",
      school: "New Ideal School, Vasind",
      category: "10th",
    },
    {
      name: "Bhavik Sapat",
      score: "94.80%",
      detail: "2nd Rank (98/100 English & 98/100 Maths)",
      school: "Saraswati Vidyalaya, Vasind",
      category: "10th",
    },
    {
      name: "Diksha Late",
      score: "94.20%",
      detail: "2nd Rank Overall",
      school: "New Ideal School, Vasind",
      category: "10th",
    },
    {
      name: "Nimisha Vishe",
      score: "94.00%",
      detail: "3rd Rank Overall",
      school: "New Ideal School, Vasind",
      category: "10th",
    },
    {
      name: "Poonam Keyare",
      score: "93.80%",
      detail: "Elite List",
      school: "Board Excellence",
      category: "10th",
    },
    {
      name: "Samiksha Thakare",
      score: "93.20%",
      detail: "Elite List",
      school: "Concept Champion",
      category: "10th",
    },
    {
      name: "Vaishnavi Thakare",
      score: "92.80%",
      detail: "Elite List",
      school: "Maths Prodigy",
      category: "10th",
    },
    {
      name: "Tanmay Pawar",
      score: "90.80%",
      detail: "Elite List",
      school: "High Achiever",
      category: "10th",
    },
    {
      name: "Sonali Das",
      score: "90.60%",
      detail: "Elite List",
      school: "High Achiever",
      category: "10th",
    },
    {
      name: "Diksha Vishe",
      score: "90.60%",
      detail: "Elite List",
      school: "High Achiever",
      category: "10th",
    },
    {
      name: "Pranav Jadhav",
      score: "89.80%",
      detail: "Board Excellence",
      school: "NST Foundation",
      category: "10th",
    },
    {
      name: "Mayuresh Gaikwad",
      score: "89.60%",
      detail: "Board Excellence",
      school: "NST Foundation",
      category: "10th",
    },
    {
      name: "Vedika Patil",
      score: "89.20%",
      detail: "Board Excellence",
      school: "NST Foundation",
      category: "10th",
    },
    {
      name: "Priya Patil",
      score: "89.20%",
      detail: "Board Excellence",
      school: "NST Foundation",
      category: "10th",
    },
    {
      name: "Atharva Kadam",
      score: "89.00%",
      detail: "Excellent Results",
      school: "NST Foundation",
      category: "10th",
    },
    {
      name: "Divya Patil",
      score: "89.00%",
      detail: "Excellent Results",
      school: "NST Foundation",
      category: "10th",
    },
    {
      name: "Ritesh Kadu",
      score: "88.00%",
      detail: "Excellent Results",
      school: "NST Foundation",
      category: "10th",
    },
    {
      name: "Sakshi Shelar",
      score: "88.20%",
      detail: "Excellent Results",
      school: "NST Foundation",
      category: "10th",
    },
    {
      name: "Mrunal Patil",
      score: "87.20%",
      detail: "Excellent Results",
      school: "NST Foundation",
      category: "10th",
    },
    {
      name: "Jagdish Choudhary",
      score: "86.80%",
      detail: "Excellent Results",
      school: "NST Foundation",
      category: "10th",
    },
    {
      name: "Sumit Mishra",
      score: "86.80%",
      detail: "Excellent Results",
      school: "NST Foundation",
      category: "10th",
    },
    {
      name: "Dipti Mohe",
      score: "86.80%",
      detail: "Excellent Results",
      school: "NST Foundation",
      category: "10th",
    },
    {
      name: "Neha Mhaskar",
      score: "86.40%",
      detail: "Excellent Results",
      school: "NST Foundation",
      category: "10th",
    },
    {
      name: "Manika Bhoir",
      score: "86.00%",
      detail: "Excellent Results",
      school: "NST Foundation",
      category: "10th",
    },
  ];

  const allToppers = [...collegeToppers, ...classTenToppers];

  // Filtering based on active tab and search term
  const filteredToppers = allToppers.filter((topper) => {
    // Tab filter
    if (activeTab === "12th" && topper.category !== "12th") return false;
    if (activeTab === "10th" && topper.category !== "10th") return false;
    if (activeTab === "competitive" && topper.category !== "competitive")
      return false;

    // Search search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      return (
        topper.name.toLowerCase().includes(term) ||
        topper.school.toLowerCase().includes(term) ||
        topper.score.toLowerCase().includes(term) ||
        (topper.detail && topper.detail.toLowerCase().includes(term))
      );
    }
    return true;
  });

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-stretch md:items-center justify-end md:justify-center bg-art-black/60 backdrop-blur-md p-0 md:p-6 overflow-hidden"
      >
        {/* Backdrop clicking closes */}
        <div className="absolute inset-0 -z-10" onClick={onClose}></div>

        {/* Modal Sheet */}
        <motion.div
          initial={{ y: 50, opacity: 0, scale: 0.98 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 50, opacity: 0, scale: 0.98 }}
          className="w-full max-w-6xl h-full md:h-[90vh] bg-white border-l md:border border-art-black flex flex-col justify-between overflow-hidden relative shadow-2xl"
        >
          {/* Header */}
          <div className="px-6 py-6 md:px-10 md:py-8 border-b border-art-black flex items-center justify-between bg-neutral-50">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 bg-art-red text-white text-[8px] tracking-widest art-label">
                  NST HONOURS REGISTRY
                </span>
                <span className="text-xs font-serif italic text-neutral-400">
                  10 Years of Excellence
                </span>
              </div>
              <h2 className="text-xl md:text-3xl font-serif italic font-black text-art-black">
                The Directorial & Merit Roll
              </h2>
            </div>

            <button
              onClick={onClose}
              className="w-10 h-10 border border-art-black hover:bg-art-black hover:text-white transition-colors flex items-center justify-center shrink-0"
              aria-label="Close Registry"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Filtering row & Search */}
          <div className="px-6 py-4 md:px-10 border-b border-neutral-200 flex flex-col gap-4 sm:flex-row sm:items-center justify-between">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: "all", label: "All Roll of Honour" },
                { id: "12th", label: "12th Science / Boards" },
                { id: "10th", label: "10th Board Toppers" },
                { id: "competitive", label: "NEET & JEE Elite" },
                { id: "faculty", label: "Faculty & Directors" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 border text-[10px] art-label transition-all ${
                    activeTab === tab.id
                      ? "border-art-black bg-art-black text-white font-bold"
                      : "border-neutral-200 hover:border-art-black text-neutral-600 bg-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            {activeTab !== "faculty" && (
              <div className="relative w-full sm:w-64">
                <input
                  type="text"
                  placeholder="Filter by name, score, school..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full h-10 pl-9 pr-4 border border-neutral-300 focus:border-art-black focus:outline-none text-xs"
                />
                <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
              </div>
            )}
          </div>

          {/* Directory Body (Scrollable) */}
          <div className="flex-1 overflow-y-auto p-6 md:p-10 bg-neutral-50">
            {activeTab === "faculty" ? (
              // Faculty profile exclusive
              <div className="max-w-4xl mx-auto space-y-12">
                {facultyMembers.map((member, idx) => (
                  <div
                    key={idx}
                    className="border border-art-black bg-white p-6 md:p-10 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex flex-col md:flex-row justify-between items-start gap-6 border-b border-neutral-100 pb-6 mb-6">
                      <div>
                        <span className="px-2 py-0.5 bg-art-red text-white text-[8px] art-label font-bold mb-3 inline-block">
                          ACADEMIC FOUNDER
                        </span>
                        <h3 className="text-3xl md:text-4xl font-serif italic text-art-black">
                          {member.name}
                        </h3>
                        <p className="art-label text-art-red text-xs mt-1">
                          {member.role} — {member.experience}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="art-label opacity-40 text-[9px]">
                          CLASSES TAUGHT
                        </span>
                        <p className="text-sm font-sans font-medium text-neutral-800">
                          5th to 10th &amp; 11th - 12th Science / Board Prep
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                      <div>
                        <h4 className="art-label text-[9px] opacity-40 mb-3">
                          PROFESSIONAL SPECIALIZATION
                        </h4>
                        <div className="space-y-2 mb-6">
                          {member.specialty.map((spec, sIdx) => (
                            <div key={sIdx} className="flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-art-red shrink-0" />
                              <span className="text-xs text-neutral-800 font-sans font-medium">
                                {spec}
                              </span>
                            </div>
                          ))}
                        </div>

                        <p className="text-xs md:text-sm text-neutral-600 leading-relaxed font-light font-sans mb-4">
                          {member.bio}
                        </p>
                      </div>

                      <div className="border-l border-neutral-200 pl-0 md:pl-8 pt-6 md:pt-0 flex flex-col justify-between h-full">
                        <div>
                          <span className="art-label text-[9px] opacity-40 mb-3 block">
                            DIRECTOR'S STATEMENT
                          </span>
                          <blockquote className="text-base font-serif italic text-art-red font-medium leading-relaxed">
                            "{member.quote}"
                          </blockquote>
                        </div>

                        <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center gap-2">
                          <Star className="w-4 h-4 text-art-red" />
                          <span className="art-label text-[8px] text-neutral-400">
                            Where Knowledge Meets Confidence!
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // Student roster layout
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] art-label text-neutral-400">
                    SHOWING {filteredToppers.length} ELITE RESULTS
                  </span>
                  {authTokenMessage()}
                </div>

                {filteredToppers.length === 0 ? (
                  <div className="text-center py-20 border border-neutral-200 bg-white">
                    <p className="text-sm text-neutral-500 font-serif italic">
                      No matching academic records found. Try adjusting your
                      search keyword.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredToppers.map((topper, idx) => (
                      <div
                        key={idx}
                        className="bg-white border border-neutral-200/80 p-6 flex flex-col justify-between hover:border-art-red transition-all duration-300 hover:shadow-md"
                      >
                        <div>
                          <div className="flex justify-between items-center mb-4">
                            <span className="px-2 py-0.5 bg-neutral-100 text-neutral-600 text-[8px] font-mono tracking-widest font-bold">
                              {topper.category === "12th"
                                ? "12TH SCIENCE"
                                : topper.category === "competitive"
                                  ? "COMPETITIVE"
                                  : "10TH BOARD"}
                            </span>
                            <span className="text-[9px] font-mono text-neutral-300">
                              #0{idx + 1}
                            </span>
                          </div>

                          <h4 className="text-lg md:text-xl font-serif italic text-art-black font-semibold mb-1">
                            {topper.name}
                          </h4>

                          <div className="text-2xl md:text-3xl font-mono font-black tracking-tight text-art-black mt-2 mb-3">
                            {topper.score}
                          </div>

                          <p className="text-[9px] art-label font-bold text-art-red mb-2">
                            {topper.detail}
                          </p>
                        </div>

                        <div className="border-t border-neutral-100 pt-3 mt-4">
                          <p className="text-[10px] text-neutral-400 leading-snug font-sans">
                            {topper.school}
                          </p>
                          <p className="text-[8px] art-label text-neutral-300 tracking-wider mt-1">
                            {(topper as any).stream || "10th Board Foundation"}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Sticky footer with admissions note */}
          <div className="px-6 py-4 md:px-10 border-t border-art-black bg-art-black text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="art-label text-[8px] opacity-60 tracking-widest text-neutral-300 text-center sm:text-left">
              * CRASH COURSE &amp; BOARD ADMISSIONS OPEN: LIMITED TO 30
              STRATEGIC PROFILES PER YEAR.
            </span>
            <div className="flex gap-4">
              <a
                href="https://wa.me/919130114477"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 border border-emerald-500 hover:bg-emerald-500/10 text-emerald-400 text-[8px] art-label font-bold transition-all text-center"
              >
                WHATSAPP CHAT
              </a>
              <button
                onClick={onClose}
                className="px-5 py-2 bg-white text-art-black hover:bg-neutral-200 text-[8px] art-label font-bold transition-all"
              >
                CLOSE DIRECTORY
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );

  function authTokenMessage() {
    return (
      <div className="flex items-center gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
        <span className="text-[8px] art-label text-neutral-400 tracking-wider font-bold">
          VERIFIED BOARD RECORDS
        </span>
      </div>
    );
  }
}
