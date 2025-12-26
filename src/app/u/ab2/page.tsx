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

function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
    </svg>
  );
}

function SoundWave({ className }: { className?: string }) {
  const colors = ["#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#FFEB3B", "#FF9800"];
  return (
    <svg viewBox="0 0 100 100" className={className} preserveAspectRatio="none">
      {[...Array(12)].map((_, i) => (
        <rect
          key={i}
          x={14 + i * 6}
          y="25"
          width="4"
          height="50"
          rx="2"
          fill={colors[i % colors.length]}
          style={{
            transformBox: 'fill-box',
            transformOrigin: 'center',
            animation: `wave 1.2${(i % 6) + 2}s ease-in-out infinite alternate`,
            animationDelay: `-${i * 0.2}s`,
            filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.3))'
          }}
        />
      ))}
    </svg>
  );
}

const AUDIO_URL = "https://storage.googleapis.com/nadeem-public-gcs/mini/my_life.mp3";

export default function MusicPlayerPage() {
  const [isPlaying, setIsPlaying] = useState(false);
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
      if (duration === 0 && Number.isFinite(audioRef.current.duration)) {
        setDuration(audioRef.current.duration);
      }
    }
  };

  const onLoadedMetadata = () => {
    if (audioRef.current && Number.isFinite(audioRef.current.duration)) {
      setDuration(audioRef.current.duration);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = Number(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const handleSeekForward = () => {
    if (audioRef.current) {
      const newTime = Math.min(audioRef.current.currentTime + 5, duration);
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleSeekBackward = () => {
    if (audioRef.current) {
      const newTime = Math.max(audioRef.current.currentTime - 5, 0);
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleDownload = async () => {
    try {
      const response = await fetch(AUDIO_URL);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "My Life - Romantic Journey.mp3";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed, falling back to new tab:", error);
      window.open(AUDIO_URL, "_blank");
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      <audio
        ref={audioRef}
        src={AUDIO_URL}
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onLoadedMetadata}
        onDurationChange={onLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
      />
      
      <div className="absolute inset-0 bg-gradient-to-br from-pink-300 via-rose-300 to-red-300 dark:from-rose-950 dark:via-red-900 dark:to-pink-950 opacity-80" />
      <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] max-w-[500px] max-h-[500px] bg-primary/30 rounded-full blur-[60px] md:blur-[100px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] max-w-[500px] max-h-[500px] bg-secondary/40 rounded-full blur-[60px] md:blur-[100px] animate-pulse delay-75" />

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
          <button 
            className="hover:text-white transition-colors hover:scale-110 active:scale-95" 
            onClick={handleDownload}
            aria-label="Download Song"
          >
             <DownloadIcon className="w-6 h-6" />
          </button>
        </div>

        <div className="bg-white/30 dark:bg-black/30 backdrop-blur-xl border border-white/20 dark:border-white/10 p-5 md:p-6 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl">
          <div className="relative aspect-square mb-6 md:mb-8 rounded-2xl overflow-hidden bg-black/10 dark:bg-white/5 flex items-center justify-center">
            {isPlaying ? (
                <div className="w-full h-full p-6">
                    <SoundWave className="w-full h-full opacity-100" />
                </div>
            ) : (
                <div className="flex flex-col items-center gap-2 text-white/40">
                    <div className="w-16 h-1 bg-white/30 rounded-full" />
                    <div className="w-24 h-1 bg-white/30 rounded-full" />
                    <div className="w-16 h-1 bg-white/30 rounded-full" />
                </div>
            )}
          </div>

          <div className="flex flex-col items-center text-center mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-white dark:text-rose-50 mb-1">My Life</h2>
            <p className="text-rose-100 dark:text-rose-200/70 text-xs md:text-sm font-medium">Romantic Journey</p>
          </div>

          <div className="mb-6 md:mb-8 group">
            <input
              type="range"
              min="0"
              max={duration || 100}
              step="0.1"
              value={currentTime}
              onChange={handleProgressChange}
              className="w-full h-2 bg-white/20 rounded-full appearance-none cursor-pointer accent-white relative z-20 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-lg [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:rounded-full"
            />
            <div className="flex justify-between text-xs text-white/60 font-medium mt-2">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          <div className="flex items-center justify-between mb-2">
            <button className="text-white/70 hover:text-white transition-colors p-2" onClick={() => { if(audioRef.current) { audioRef.current.currentTime = 0; setCurrentTime(0); } }}>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                  <path fillRule="evenodd" d="M15.97 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 010 1.06l-4.5 4.5a.75.75 0 11-1.06-1.06l3.22-3.22H7.5a9.75 9.75 0 109.75 9.75.75.75 0 111.5 0 11.25 11.25 0 11-11.25-11.25h11.69l-3.22-3.22a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg>
            </button>
            
            <button className="text-white/80 hover:text-white transition-colors" onClick={handleSeekBackward}>
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

            <button className="text-white/80 hover:text-white transition-colors" onClick={handleSeekForward}>
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
        @keyframes wave {
            0% { transform: scaleY(0.4); }
            50% { transform: scaleY(1.1); }
            100% { transform: scaleY(0.4); }
        }
      `}</style>
    </div>
  );
}