"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

// Icons
function PlayIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
    </svg>
  );
}

function PauseIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clipRule="evenodd" />
    </svg>
  );
}

function HeartIcon({ className, filled }: { className?: string; filled?: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={filled ? 0 : 2}
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  );
}

function BackwardIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M9.195 18.44c1.25.713 2.805-.19 2.805-1.629v-2.34l6.945 3.968c1.25.714 2.805-.188 2.805-1.628V8.688c0-1.44-1.555-2.342-2.805-1.628L12 11.03v-2.34c0-1.44-1.555-2.343-2.805-1.629l-7.108 4.062c-1.26.72-1.26 2.536 0 3.256l7.108 4.061z" />
    </svg>
  );
}

function ForwardIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M5.055 7.06c-1.25-.714-2.805.189-2.805 1.628v8.123c0 1.44 1.555 2.342 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.342 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.062c-1.25-.713-2.805.19-2.805 1.629v2.34l-6.945-3.968z" />
    </svg>
  );
}

export default function MusicPlayerPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [progress, setProgress] = useState(30); // Mock progress

  // Toggle play state
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Mock progress bar interval
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 0.5));
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-300 via-rose-300 to-red-300 dark:from-rose-950 dark:via-red-900 dark:to-pink-950 opacity-80" />
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/30 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-secondary/40 rounded-full blur-[100px] animate-pulse delay-75" />

      {/* Floating Hearts Background (Simple CSS implementation) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white/10 dark:text-white/5 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 4 + 2}rem`,
              animationDuration: `${Math.random() * 5 + 3}s`,
            }}
          >
            ♥
          </div>
        ))}
      </div>

      <div className="relative z-10 w-full max-w-sm">
        {/* Navigation */}
        <div className="flex justify-between items-center mb-8 px-4 text-white/80">
          <Link href="/" className="hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clipRule="evenodd" />
            </svg>
          </Link>
          <span className="text-sm font-medium tracking-widest uppercase">Now Playing</span>
          <button className="hover:text-white transition-colors">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
              </svg>
          </button>
        </div>

        {/* Music Player Card */}
        <div className="bg-white/30 dark:bg-black/30 backdrop-blur-xl border border-white/20 dark:border-white/10 p-6 rounded-[2.5rem] shadow-2xl">
          
          {/* Album Art */}
          <div className="relative aspect-square mb-8 rounded-2xl overflow-hidden shadow-lg group">
             {/* Rotating disk effect */}
            <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-tr from-rose-400 to-orange-300 transition-transform duration-[10000ms] ease-linear ${isPlaying ? 'rotate-180' : ''}`} style={{ transitionDuration: isPlaying ? '10s' : '0.5s', animation: isPlaying ? 'spin 10s linear infinite' : 'none' }}>
                <div className="w-1/2 h-1/2 bg-white/20 rounded-full blur-xl" />
            </div>
             {/* Center Image/Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
                 <HeartIcon className="w-24 h-24 text-white drop-shadow-md" filled={true} />
            </div>
          </div>

          {/* Song Info */}
          <div className="flex justify-between items-end mb-6">
            <div>
              <h2 className="text-2xl font-bold text-white dark:text-rose-50 mb-1">Endless Love</h2>
              <p className="text-rose-100 dark:text-rose-200/70 text-sm font-medium">Romantic Ballads Vol. 1</p>
            </div>
            <button 
                onClick={() => setIsLiked(!isLiked)} 
                className={`p-2 rounded-full transition-all ${isLiked ? 'text-rose-500 scale-110' : 'text-white/70 hover:text-white'}`}
            >
              <HeartIcon className="w-8 h-8" filled={isLiked} />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="mb-8 group cursor-pointer">
            <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)] rounded-full relative" 
                style={{ width: `${progress}%` }}
              >
                  {/* Scrubber knob */}
                 <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
            <div className="flex justify-between text-xs text-white/60 font-medium mt-2">
              <span>1:45</span>
              <span>4:20</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mb-2">
            <button className="text-white/70 hover:text-white transition-colors p-2">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M15.97 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 010 1.06l-4.5 4.5a.75.75 0 11-1.06-1.06l3.22-3.22H7.5a9.75 9.75 0 109.75 9.75.75.75 0 111.5 0 11.25 11.25 0 11-11.25-11.25h11.69l-3.22-3.22a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg>
            </button>
            
            <button className="text-white/80 hover:text-white transition-colors hover:scale-110 active:scale-95">
              <BackwardIcon className="w-10 h-10" />
            </button>

            <button 
                onClick={togglePlay}
                className="w-16 h-16 bg-white text-rose-500 rounded-full flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all"
            >
              {isPlaying ? (
                <PauseIcon className="w-8 h-8 ml-0.5" />
              ) : (
                <PlayIcon className="w-8 h-8 ml-1" />
              )}
            </button>

            <button className="text-white/80 hover:text-white transition-colors hover:scale-110 active:scale-95">
              <ForwardIcon className="w-10 h-10" />
            </button>

             <button className="text-white/70 hover:text-white transition-colors p-2">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 8.625a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM15.375 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
