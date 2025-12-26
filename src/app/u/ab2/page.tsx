"use client";

import React, { useState, useEffect, useRef } from "react";

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

const AUDIO_URL = "https://storage.googleapis.com/nadeem-public-gcs/mini/my_life.mp3";

export default function MusicPlayerPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const onTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const onLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      const newTime = Number(e.target.value);
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      <audio
        ref={audioRef}
        src={AUDIO_URL}
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
      />
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-300 via-rose-300 to-red-300 dark:from-rose-950 dark:via-red-900 dark:to-pink-950 opacity-80" />
      <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] max-w-[500px] max-h-[500px] bg-primary/30 rounded-full blur-[60px] md:blur-[100px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] max-w-[500px] max-h-[500px] bg-secondary/40 rounded-full blur-[60px] md:blur-[100px] animate-pulse delay-75" />

      {/* Floating Hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white/10 dark:text-white/5 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 2 + 1}rem`,
              animationDuration: `${Math.random() * 5 + 3}s`,
            }}
          >
            ♥
          </div>
        ))}
      </div>

      <div className="relative z-10 w-full max-w-sm px-4 md:px-0">
        <div className="flex justify-between items-center mb-6 md:mb-8 px-2 text-white/80">
          <div className="w-6" />
          <span className="text-xs md:text-sm font-medium tracking-widest uppercase">Now Playing</span>
          <button className="hover:text-white transition-colors">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
              </svg>
          </button>
        </div>

        <div className="bg-white/30 dark:bg-black/30 backdrop-blur-xl border border-white/20 dark:border-white/10 p-5 md:p-6 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl">
          <div className="relative aspect-square mb-6 md:mb-8 rounded-2xl overflow-hidden shadow-lg">
            <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-tr from-rose-400 to-orange-300 ${isPlaying ? 'animate-spin-slow' : ''}`}>
                <div className="w-1/2 h-1/2 bg-white/20 rounded-full blur-xl" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
                 <HeartIcon className="w-16 h-16 md:w-24 md:h-24 text-white drop-shadow-md" filled={true} />
            </div>
          </div>

          <div className="flex justify-between items-end mb-5 md:mb-6">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white dark:text-rose-50 mb-1">My Life</h2>
              <p className="text-rose-100 dark:text-rose-200/70 text-xs md:text-sm font-medium">Romantic Journey</p>
            </div>
            <button 
                onClick={() => setIsLiked(!isLiked)} 
                className={`p-2 rounded-full transition-all ${isLiked ? 'text-rose-500 scale-110' : 'text-white/70 hover:text-white'}`}
            >
              <HeartIcon className="w-6 h-6 md:w-8 md:h-8" filled={isLiked} />
            </button>
          </div>

          <div className="mb-6 md:mb-8 group">
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={handleProgressChange}
              className="w-full h-1.5 bg-white/20 rounded-full appearance-none cursor-pointer accent-white"
            />
            <div className="flex justify-between text-xs text-white/60 font-medium mt-2">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          <div className="flex items-center justify-between mb-2">
            <button className="text-white/70 hover:text-white transition-colors p-2" onClick={() => { if(audioRef.current) audioRef.current.currentTime = 0 }}>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                  <path fillRule="evenodd" d="M15.97 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 010 1.06l-4.5 4.5a.75.75 0 11-1.06-1.06l3.22-3.22H7.5a9.75 9.75 0 109.75 9.75.75.75 0 111.5 0 11.25 11.25 0 11-11.25-11.25h11.69l-3.22-3.22a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg>
            </button>
            
            <button className="text-white/80 hover:text-white transition-colors" onClick={() => { if(audioRef.current) audioRef.current.currentTime -= 10 }}>
              <BackwardIcon className="w-8 h-8 md:w-10 md:h-10" />
            </button>

            <div className="relative flex items-center justify-center">
              {!isPlaying && (
                <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-40" />
              )}
              <button 
                  onClick={togglePlay}
                  className="relative z-10 w-14 h-14 md:w-16 md:h-16 bg-white text-rose-500 rounded-full flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all"
              >
                {isPlaying ? (
                  <PauseIcon className="w-6 h-6 md:w-8 md:h-8 ml-0.5" />
                ) : (
                  <PlayIcon className="w-6 h-6 md:w-8 md:h-8 ml-1" />
                )}
              </button>
            </div>

            <button className="text-white/80 hover:text-white transition-colors" onClick={() => { if(audioRef.current) audioRef.current.currentTime += 10 }}>
              <ForwardIcon className="w-8 h-8 md:w-10 md:h-10" />
            </button>

             <button className="text-white/70 hover:text-white transition-colors p-2">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6">
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
        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }
      `}</style>
    </div>
  );
}
