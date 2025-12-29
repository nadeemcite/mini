"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";

// --- Icons ---
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
  const vividColors = [
    "#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", 
    "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#FFEB3B", "#FF9800"
  ];
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
          fill={vividColors[i % vividColors.length]}
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

// --- Types ---
interface TranscriptWord {
  text: string;
  start_time: number;
  end_time: number;
}

interface TranscriptSegment {
  text: string;
  start_time: number;
  end_time: number;
  words: TranscriptWord[];
}

interface TranscriptData {
  language_code: string;
  segments: TranscriptSegment[];
}

type ThemeType = "Romantic" | "Ocean" | "Party" | "Sad" | "Happy";

const THEMES: Record<ThemeType, {
  background: string;
  blob1: string;
  blob2: string;
  playBtnText: string;
  highlight: string;
}> = {
  Romantic: {
    background: "bg-gradient-to-br from-pink-300 via-rose-300 to-red-300 dark:from-rose-950 dark:via-red-900 dark:to-pink-950",
    blob1: "bg-primary/30",
    blob2: "bg-secondary/40",
    playBtnText: "text-rose-500",
    highlight: "text-rose-600 dark:text-rose-300 drop-shadow-[0_0_10px_rgba(244,63,94,0.6)]",
  },
  Ocean: {
    background: "bg-gradient-to-br from-cyan-300 via-blue-300 to-indigo-300 dark:from-blue-950 dark:via-indigo-900 dark:to-cyan-950",
    blob1: "bg-blue-500/30",
    blob2: "bg-cyan-500/40",
    playBtnText: "text-blue-500",
    highlight: "text-blue-600 dark:text-blue-300 drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]",
  },
  Party: {
    background: "bg-gradient-to-br from-purple-400 via-pink-400 to-yellow-400 dark:from-purple-900 dark:via-pink-900 dark:to-yellow-900",
    blob1: "bg-purple-500/30",
    blob2: "bg-yellow-500/40",
    playBtnText: "text-purple-600",
    highlight: "text-purple-600 dark:text-purple-300 drop-shadow-[0_0_10px_rgba(147,51,234,0.6)]",
  },
  Sad: {
    background: "bg-gradient-to-br from-gray-300 via-slate-400 to-gray-500 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800",
    blob1: "bg-gray-500/30",
    blob2: "bg-slate-500/40",
    playBtnText: "text-slate-600",
    highlight: "text-slate-700 dark:text-slate-200 drop-shadow-[0_0_10px_rgba(100,116,139,0.6)]",
  },
  Happy: {
    background: "bg-gradient-to-br from-yellow-200 via-orange-200 to-green-200 dark:from-yellow-900 dark:via-orange-900 dark:to-green-900",
    blob1: "bg-yellow-500/30",
    blob2: "bg-green-500/40",
    playBtnText: "text-orange-500",
    highlight: "text-orange-600 dark:text-orange-300 drop-shadow-[0_0_10px_rgba(249,115,22,0.6)]",
  },
};

// --- Props ---
interface MusicPlayerProps {
  audioUrl: string;
  topText?: string;
  songName: string;
  description: string;
  colorTheme?: ThemeType;
  transcriptUrl?: string;
}

export default function MusicPlayer({
  audioUrl,
  topText = "Now Playing",
  songName,
  description,
  colorTheme = "Romantic",
  transcriptUrl
}: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [particles, setParticles] = useState<{left: string, top: string, fontSize: string, animationDuration: string}[]>([]);
  const [transcript, setTranscript] = useState<TranscriptSegment[]>([]);
  
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setParticles(
      [...Array(6)].map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        fontSize: `${Math.random() * 2 + 1}rem`,
        animationDuration: `${Math.random() * 5 + 3}s`,
      }))
    );
  }, []);

  // Fetch transcript
  useEffect(() => {
    if (!transcriptUrl) return;

    const controller = new AbortController();
    const signal = controller.signal;

    // Use local proxy to avoid CORS issues
    const proxyUrl = `/api/transcript?url=${encodeURIComponent(transcriptUrl)}`;

    fetch(proxyUrl, { signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data: TranscriptData) => {
        if (!signal.aborted && data.segments && Array.isArray(data.segments)) {
          setTranscript(data.segments);
        }
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          console.error("Failed to load transcript:", err);
        }
      });

    return () => {
      controller.abort();
    };
  }, [transcriptUrl]);

  const theme = THEMES[colorTheme];

  // Derived state for active lyrics
  const activeSentence = useMemo(() => {
    if (!transcript.length) return null;
    return transcript.find(
      (s) => currentTime >= s.start_time && currentTime <= s.end_time
    ) || null;
  }, [currentTime, transcript]);

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
      const response = await fetch(audioUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${songName} - ${description}.mp3`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed, falling back to new tab:", error);
      window.open(audioUrl, "_blank");
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      <audio
        ref={audioRef}
        src={audioUrl}
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onLoadedMetadata}
        onDurationChange={onLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
      />
      
      {/* Background */}
      <div className={`absolute inset-0 opacity-80 ${theme.background}`} />
      <div className={`absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] max-w-[500px] max-h-[500px] rounded-full blur-[60px] md:blur-[100px] animate-pulse ${theme.blob1}`} />
      <div className={`absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] max-w-[500px] max-h-[500px] rounded-full blur-[60px] md:blur-[100px] animate-pulse delay-75 ${theme.blob2}`} />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((style, i) => (
          <div
            key={i}
            className="absolute text-white/10 dark:text-white/5 animate-bounce"
            style={style}
          >
            {colorTheme === "Romantic" ? "♥" : "●"}
          </div>
        ))}
      </div>

      <div className="relative z-10 w-full max-w-md px-4 md:px-0">
        <div className="flex justify-between items-center mb-6 md:mb-8 px-2 text-white/80">
          <div className="w-6" />
          <span className="text-xs md:text-sm font-medium tracking-widest uppercase">{topText}</span>
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

          {/* Lyrics / Subtitles Section */}
          {transcript.length > 0 && (
            <div className="mb-6 min-h-[3rem] flex flex-col items-center justify-center text-center px-2">
              {activeSentence ? (
                <p className="text-white/95 text-lg md:text-xl font-medium leading-tight transition-all duration-300">
                  {activeSentence.words.map((word, index) => {
                    const isWordActive = currentTime >= word.start_time && currentTime <= word.end_time;
                    return (
                      <span
                        key={index}
                        className={`inline-block mx-[3px] transition-all duration-200 ${
                          isWordActive 
                            ? `${theme.highlight}` 
                            : "opacity-50 text-white"
                        }`}
                      >
                        {word.text}
                      </span>
                    );
                  })}
                </p>
              ) : (
                <p className="text-white/30 text-sm italic animate-pulse">
                  ...
                </p>
              )}
            </div>
          )}

          <div className="flex flex-col items-center text-center mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-white dark:text-rose-50 mb-1">{songName}</h2>
            <p className="text-rose-100 dark:text-rose-200/70 text-xs md:text-sm font-medium">{description}</p>
          </div>

          <div className="mb-6 md:mb-8 group">
            <input
              type="range"
              min="0"
              max={duration || 100}
              step="0.01"
              value={currentTime}
              onChange={handleProgressChange}
              className="w-full h-2 bg-white/20 rounded-full appearance-none cursor-pointer accent-white relative z-20 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-lg [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:rounded-full"
            />
            <div className="flex justify-between text-xs text-white/60 font-medium mt-2">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 md:gap-8 mb-2">
            <button 
                className="text-white/80 hover:text-white transition-colors hover:scale-110 active:scale-95 p-2" 
                onClick={handleSeekBackward}
                aria-label="Seek Backward"
            >
              <BackwardIcon className="w-10 h-10 md:w-12 md:h-12" />
            </button>
            
            <div className="relative flex items-center justify-center">
              {!isPlaying && (
                <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-40" />
              )}
              <button 
                  onClick={togglePlay}
                  className={`relative z-10 w-16 h-16 md:w-20 md:h-20 bg-white ${theme.playBtnText} rounded-full flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all`}
                  aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <PauseIcon className="w-8 h-8 md:w-10 md:h-10 ml-0.5" />
                ) : (
                  <PlayIcon className="w-8 h-8 md:w-10 md:h-10 ml-1" />
                )}
              </button>
            </div>

            <button 
                className="text-white/80 hover:text-white transition-colors hover:scale-110 active:scale-95 p-2" 
                onClick={handleSeekForward}
                aria-label="Seek Forward"
            >
              <ForwardIcon className="w-10 h-10 md:w-12 md:h-12" />
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