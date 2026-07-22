import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { MagneticButton } from './ui/MagneticButton';
import { ArrowRight, Star, Users, Award, Volume2, VolumeX, ChevronLeft, ChevronRight } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';

interface ReviewVideo {
  src: string;
  studentName: string;
}

const REVIEW_PLAYLIST: ReviewVideo[] = [
  { src: '/review1.mp4', studentName: 'Sonali Das (86.17% 12th HSE)' },
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const currentVideo = REVIEW_PLAYLIST[currentIndex];
  const hasMultipleVideos = REVIEW_PLAYLIST.length > 1;

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement || !hasMultipleVideos) return;

    const handleVideoEnd = () => {
      setCurrentIndex((prev) => (prev === REVIEW_PLAYLIST.length - 1 ? 0 : prev + 1));
    };
    
    videoElement.addEventListener('ended', handleVideoEnd);
    return () => {
      videoElement.removeEventListener('ended', handleVideoEnd);
    };
  }, [currentIndex, hasMultipleVideos]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [currentIndex]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };  

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? REVIEW_PLAYLIST.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === REVIEW_PLAYLIST.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex flex-col pt-24 pb-12 md:pt-32 px-6 md:px-10 overflow-hidden bg-art-bg text-art-black">
      <div className="absolute left-0 top-0 bottom-0 w-16 border-r border-art-black hidden lg:flex flex-col items-center py-12 justify-between">
        <span className="rotate-180 [writing-mode:vertical-lr] art-label opacity-40">Est. 2012</span>
        <div className="w-2 h-2 rounded-full bg-art-red"></div>
        <span className="[writing-mode:vertical-lr] art-label opacity-40">Vasind / Mumbai</span>
      </div>

      <div className="container relative z-10 mx-auto lg:ml-24 max-w-6xl grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
        
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 md:mb-8"
          >
            <span className="art-label text-art-red mb-2 block">
              The NST Method / 2026 Admissions
            </span>
            <div className="w-12 h-0.5 bg-art-black" />
          </motion.div>

          <h1 className="art-heading-xl mb-6 md:mb-12">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="block"
            >
              Paving the
            </motion.span>
            <motion.span
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5, duration: 0.8 }}
  className="italic xl:whitespace-nowrap"
>
  Path to <span className="text-art-red">Success</span>
</motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-base md:text-2xl font-light leading-relaxed mb-6 md:mb-12 border-l-2 md:border-l-4 border-art-red pl-4 md:pl-6"
          >
            NST Tuition is a boutique academic consultancy specializing in hyper-personalized learning frameworks for elite university admissions.
          </motion.p>
          
          <div className="mb-8 md:mb-12 border-t border-art-black/10 pt-4" />

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button 
              onClick={scrollToContact}
              className="art-button w-full sm:w-auto h-12 md:h-16 px-8 md:px-12 group flex items-center justify-center gap-3"
            >
              Apply Now 
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
            </button>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full border border-art-black flex items-center justify-center">
                <div className="w-2 h-2 bg-art-red rounded-full animate-pulse"></div>
              </div>
              <div className="text-left">
                <div className="art-label text-[8px]">Admissions Open</div>
                <div className="text-xs font-serif italic">Autumn Term 2026</div>
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="relative xl:absolute xl:top-0 xl:right-0 h-[500px] w-[400px] mx-auto xl:mx-0 border border-art-black flex flex-col justify-between overflow-hidden bg-black/5"
        >
          <video 
            key={currentVideo.src}
            ref={videoRef}
            src={currentVideo.src}
            autoPlay 
            loop={!hasMultipleVideos}
            muted={isMuted}
            playsInline 
            className="absolute inset-0 w-full h-full object-cover opacity-100" 
          />

          <div className="w-full flex justify-end p-4 relative z-20">
            <button 
              onClick={toggleMute}
              className="p-2 rounded-full border border-art-black/20 bg-white/80 hover:bg-white text-art-black transition-colors"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>

          <div className="w-full flex flex-col relative z-10">
            <div className="w-full h-15 bg-white/80 border-t border-art-black/10 flex flex-col items-center justify-center gap-0.5 backdrop-blur-sm">
              <span className="art-label opacity-100 italic text-[10px]">Hear From Our Students</span>
              <span className="art-label opacity-60 italic text-[10px]">~ {currentVideo.studentName}</span>
            </div>

            {hasMultipleVideos && (
              <div className="w-full h-11 bg-white border-t border-art-black/20 grid grid-cols-2">
                <button
                  onClick={handlePrev}
                  className="flex items-center justify-center gap-2 border-r border-art-black/10 hover:bg-art-black/5 transition-colors text-art-black text-[11px] font-medium"
                >
                  <ChevronLeft className="w-4 h-4" /> Prev
                </button>
                <button
                  onClick={handleNext}
                  className="flex items-center justify-center gap-2 hover:bg-art-black/5 transition-colors text-art-black text-[11px] font-medium"
                >
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
