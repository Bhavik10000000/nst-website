import { motion } from 'motion/react';
import { Award, GraduationCap, Star, BookOpen, ChevronRight, CheckCircle2, Trophy, Users } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';

interface FacultyAndToppersProps {
  onOpenRegistry: (tab?: string) => void;
}

export function FacultyAndToppers({ onOpenRegistry }: FacultyAndToppersProps) {
  const facultyMembers = [
    {
      name: "Mr. Nikhil Shewale Sir",
      role: "Founder & Lead Director",
      experience: "10+ Years of Success",
      bio: "An elite science and mathematics tutor who established NST Tutorials in 2012. Known for core conceptual building, customized learning schedules, and bridging the gap between potential and peak scores.",
      specialty: ["Physics & Math Specialist", "NEET/JEE Strategist", "Admission Consulting & Career Guidance"],
      quote: "Don't think twice. Make the right choice at once. You won't regret choosing us."
    }
  ];

  const coreFeatures = [
    { text: "Individual Counseling & Personal Care" },
    { text: "Four Comprehensive Prelims (with Moderator Paper Check)" },
    { text: "Topic-wise & Weekly Progress Tests" },
    { text: "Complete Career Guidance & Motivational Lectures" },
    { text: "Strong Academic Foundations (Class 5th - 12th)" },
    { text: "Specialized Crash Courses (NEET / JEE / CET / Medical / Engineering)" }
  ];

  const mainToppers = [
    {
      name: "Monish R. Patil",
      score: "84.67%",
      detail: "NEET 590 / 93%ile JEE",
      subInfo: "PCB 98.82% / PCM 93.95% Topper",
      stream: "NEET / JEE & Board"
    },
    {
      name: "Adharv Kadam",
      score: "87.33%",
      detail: "1st Rank (97/100 Maths Topper)",
      subInfo: "G.P. Parshik College, Khanivali",
      stream: "12th Science / Board"
    },
    {
      name: "Vaishnavi Dubhele",
      score: "82.50%",
      detail: "1st Rank (96.80% in 10th Topper)",
      subInfo: "Saraswati Vidyalaya, Vasind",
      stream: "12th Science & 10th Topper"
    },
    {
      name: "Parth Kathole",
      score: "95.00%",
      detail: "1st Rank (98/100 Science Topper)",
      subInfo: "New Ideal School, Vasind",
      stream: "10th Board / Science"
    },
    {
      name: "Bhavik Sapat",
      score: "94.80%",
      detail: "2nd Rank (98/100 English & Maths)",
      subInfo: "Saraswati Vidyalaya, Vasind",
      stream: "10th Board / Math & Lang"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-art-black" id="faculty-toppers">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 border-b border-art-black pb-8">
          <div className="max-w-2xl">
            <span className="art-label text-art-red mb-2 block font-bold">Academic Leadership & Merits</span>
            <h2 className="text-4xl sm:text-5xl md:text-[64px] font-serif font-black tracking-tighter leading-none">
              Faculty & Toppers.
            </h2>
          </div>
          <p className="art-label opacity-40 max-w-xs md:text-right mt-4 lg:mt-0 leading-relaxed text-[11px]">
            Guided by Nikhil Shewale Sir. Consistent results with 10 years of bright success in competitive exams.
          </p>
        </div>

        {/* Combined Faculty & Merit Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          
          {/* Mr. Nikhil Shewale Info Card */}
          <div className="lg:col-span-7 flex flex-col justify-between border border-art-black p-8 hover:bg-neutral-50 transition-all group">
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="px-3 py-1 bg-art-red text-white art-label text-[9px] font-bold">FOUNDER &amp; DIRECTOR</span>
                <span className="art-label opacity-40 text-[9px]">EST. 2012</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-serif italic mb-1 text-art-black">{facultyMembers[0].name}</h3>
              <div className="art-label text-art-red mb-6 tracking-wide text-xs">{facultyMembers[0].role} / {facultyMembers[0].experience}</div>
              
              <p className="text-sm text-neutral-600 mb-6 leading-relaxed font-light font-sans">
                {facultyMembers[0].bio}
              </p>
              
              <div className="space-y-2 mb-6 border-t border-neutral-100 pt-4">
                {facultyMembers[0].specialty.slice(0, 2).map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-3.5 h-3.5 text-art-red shrink-0" />
                    <span className="text-xs font-sans font-semibold text-neutral-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-art-black pt-4 mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-xs italic font-serif text-art-red max-w-sm">
                "{facultyMembers[0].quote}"
              </p>
              <button 
                onClick={() => onOpenRegistry('faculty')}
                className="text-[10px] art-label text-art-black hover:text-art-red font-bold flex items-center gap-1 shrink-0 bg-neutral-100 hover:bg-neutral-200 px-4 py-2 transition-colors border border-art-black/10"
              >
                View Leadership Credentials <ChevronRight className="w-3.5 h-3.5 text-art-red" />
              </button>
            </div>
          </div>

          {/* Pillars Card (compact) */}
          <div className="lg:col-span-5 border border-art-black bg-art-black p-8 text-white flex flex-col justify-between">
            <div>
              <span className="art-label text-art-red mb-6 block font-sans tracking-[0.2em] text-[10px]">NST PRINCIPLES</span>
              <h4 className="text-2xl font-serif italic mb-6 text-white border-b border-white/10 pb-3">Pillars of Academic Rigor</h4>
              
              <div className="space-y-4">
                {coreFeatures.slice(0, 4).map((feat, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <span className="text-[10px] font-mono text-art-red px-1 bg-white/5 border border-white/15">0{idx + 1}</span>
                    <p className="text-xs font-sans text-neutral-300 leading-normal">{feat.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="art-label text-[8px] text-neutral-400">Where Knowledge Meets Confidence!</span>
              <span className="text-[9px] text-art-red font-mono font-bold tracking-wider">EST. 2012</span>
            </div>
          </div>

        </div>

        {/* HSC Science & Board Toppers - Reduced to 3-5 Elite Profiles with streams */}
        <div id="quick-toppers" className="mb-12">
          <div className="border-t border-art-black pt-10 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="art-label text-art-red mb-1 block text-xs">Wide Stream Representation</span>
              <h3 className="text-2xl md:text-3xl font-serif italic text-art-black">Elite Board & Competitive Toppers</h3>
            </div>
            
            <button 
              onClick={() => onOpenRegistry('all')}
              className="text-[10px] art-label font-bold text-white bg-art-black hover:bg-art-red px-5 py-2.5 transition-all shrink-0 border border-art-black"
            >
              See All 30+ Merit Lists
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {mainToppers.map((topper, idx) => (
              <div 
                key={idx}
                className="border border-art-black/10 p-5 bg-white hover:border-art-red transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[9px] text-art-red font-bold uppercase tracking-wider">{topper.stream}</span>
                    <span className="text-[9px] font-mono text-neutral-300">#0{idx + 1}</span>
                  </div>
                  <h4 className="text-base font-serif italic text-art-black font-semibold group-hover:text-art-red transition-colors">{topper.name}</h4>
                  <div className="text-3xl font-mono font-black tracking-tight my-2">
                    {topper.score}
                  </div>
                  <p className="text-[10px] text-neutral-700 font-semibold">{topper.detail}</p>
                </div>
                
                <div className="border-t border-dashed border-neutral-100 mt-4 pt-2">
                  <p className="text-[9px] text-neutral-400 font-sans leading-normal">{topper.subInfo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compact quick-access info banner */}
        <div className="bg-neutral-50 border border-neutral-200 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-art-red/10 flex items-center justify-center shrink-0">
              <Award className="w-4 h-4 text-art-red" />
            </div>
            <div>
              <h4 className="text-xs font-sans font-bold text-neutral-800">Complete Board Registry Validated</h4>
              <p className="text-[10px] text-neutral-500 leading-none">Class 10th &amp; 12th state transcripts are fully authenticated.</p>
            </div>
          </div>
          <button 
            onClick={() => onOpenRegistry('all')}
            className="text-[10px] art-label text-art-red font-bold tracking-wider hover:opacity-85 flex items-center gap-2"
          >
            INSPECT FULL MERIT REGISTRY &amp; ARCHIVE <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
