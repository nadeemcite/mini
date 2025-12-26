import MusicPlayer from "@/components/MusicPlayer";
import { notFound } from "next/navigation";
import React from "react";

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3.25 7.5 3.25c1.258 0 2.442.56 3.23 1.475.788-.915 1.972-1.475 3.23-1.475 2.786 0 5.25 2.072 5.25 5.005 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
    </svg>
  );
}

type PageData = 
  | {
      type: "greeting";
      title: string;
      content: React.ReactNode;
      quote: string;
    }
  | {
      type: "music";
      audioUrl: string;
      songName: string;
      description: string;
      colorTheme: "Romantic" | "Ocean" | "Party" | "Sad" | "Happy";
    };

const PAGES: Record<string, PageData> = {
  "ab1": {
    type: "greeting",
    title: "Hello there!",
    content: (
      <>
        Welcome to your special corner of <span className="text-primary font-semibold">LoveTheme</span>. 
        We&apos;re so glad you&apos;re here. This is a space built with passion and care, 
        just for you.
      </>
    ),
    quote: "\"Love is the only force capable of transforming an enemy into a friend.\""
  },
  "ab2": {
    type: "music",
    audioUrl: "https://storage.googleapis.com/nadeem-public-gcs/mini/my_life.mp3",
    songName: "My Life",
    description: "Romantic Journey",
    colorTheme: "Ocean"
  },
  "90e61069-aed4-402c-a275-1759b05ebb5f": {
    type: "music",
    audioUrl: "https://storage.googleapis.com/nadeem-public-gcs/mini/my_life.mp3",
    songName: "My Life",
    description: "Romantic Journey",
    colorTheme: "Ocean"
  },
  "b5e64f01-4095-6d1d-8da6-a5630ceddbf3": {
    type: "music",
    audioUrl: "https://storage.googleapis.com/nadeem-public-gcs/mini/my_life.mp3",
    songName: "Neon Lights",
    description: "Dance all night",
    colorTheme: "Party"
  },
  "4ca8c0d9-2e2f-6ae0-bb89-cd840b7ea0a7": {
    type: "music",
    audioUrl: "https://storage.googleapis.com/nadeem-public-gcs/mini/my_life.mp3",
    songName: "Sweet Nothing",
    description: "Just for you",
    colorTheme: "Romantic"
  },
  "101ab7ba-a47e-6c67-b82e-37d0111a51be": {
    type: "music",
    audioUrl: "https://storage.googleapis.com/nadeem-public-gcs/mini/my_life.mp3",
    songName: "Rainy Day",
    description: "Melancholy vibes",
    colorTheme: "Sad"
  },
  "c1d320eb-0c55-6b1b-874f-31e1a077038d": {
    type: "music",
    audioUrl: "https://storage.googleapis.com/nadeem-public-gcs/mini/my_life.mp3",
    songName: "Sunshine",
    description: "Good morning",
    colorTheme: "Happy"
  },
  "4ba6c253-5b2a-65de-9b38-62f0fcc8f885": {
    type: "music",
    audioUrl: "https://storage.googleapis.com/nadeem-public-gcs/mini/my_life.mp3",
    songName: "Deep Blue",
    description: "Calm waves",
    colorTheme: "Ocean"
  },
  "ec81b10c-95f3-6ec8-a4c6-48e4becb14ea": {
    type: "music",
    audioUrl: "https://storage.googleapis.com/nadeem-public-gcs/mini/my_life.mp3",
    songName: "Forever",
    description: "Eternity",
    colorTheme: "Romantic"
  },
  "896bc08b-c5ae-6af0-8db3-e70ab60a6123": {
    type: "music",
    audioUrl: "https://storage.googleapis.com/nadeem-public-gcs/mini/my_life.mp3",
    songName: "Club Mix",
    description: "Bass drop",
    colorTheme: "Party"
  },
  "e9aa4178-b045-6f8f-9074-0c6bf67ac752": {
    type: "music",
    audioUrl: "https://storage.googleapis.com/nadeem-public-gcs/mini/my_life.mp3",
    songName: "Smile",
    description: "Be happy",
    colorTheme: "Happy"
  },
  "fd22b2f7-089c-63f1-a3a2-27f82c139d39": {
    type: "music",
    audioUrl: "https://storage.googleapis.com/nadeem-public-gcs/mini/my_life.mp3",
    songName: "Tears",
    description: "Broken heart",
    colorTheme: "Sad"
  },
  "318f3edb-8c49-632e-b8fc-c2c99562a419": {
    type: "music",
    audioUrl: "https://storage.googleapis.com/nadeem-public-gcs/mini/my_life.mp3",
    songName: "Breeze",
    description: "Sea shore",
    colorTheme: "Ocean"
  },
  "88ff1b65-269a-6334-bb21-7fc438008684": {
    type: "music",
    audioUrl: "https://storage.googleapis.com/nadeem-public-gcs/mini/my_life.mp3",
    songName: "Valentine",
    description: "Be mine",
    colorTheme: "Romantic"
  },
  "f1c2312f-e3b6-6fa3-9952-9b1035bd4d68": {
    type: "music",
    audioUrl: "https://storage.googleapis.com/nadeem-public-gcs/mini/my_life.mp3",
    songName: "Celebration",
    description: "Cheers",
    colorTheme: "Party"
  },
  "0080a0fd-75b7-6cf4-b4ff-dea8537412af": {
    type: "music",
    audioUrl: "https://storage.googleapis.com/nadeem-public-gcs/mini/my_life.mp3",
    songName: "Joy",
    description: "Pure bliss",
    colorTheme: "Happy"
  },
  "f01c040d-b558-6a60-b085-82ab182b6698": {
    type: "music",
    audioUrl: "https://storage.googleapis.com/nadeem-public-gcs/mini/my_life.mp3",
    songName: "Tides",
    description: "Moving water",
    colorTheme: "Ocean"
  },
  "db518420-c9ac-6577-a5d0-7b8e18486e22": {
    type: "music",
    audioUrl: "https://storage.googleapis.com/nadeem-public-gcs/mini/my_life.mp3",
    songName: "Lonely",
    description: "Solo night",
    colorTheme: "Sad"
  },
  "c9292532-23b5-6ee6-a388-ed004ea6f1f2": {
    type: "music",
    audioUrl: "https://storage.googleapis.com/nadeem-public-gcs/mini/my_life.mp3",
    songName: "Adore",
    description: "Only you",
    colorTheme: "Romantic"
  },
  "024fe120-dc77-6bbe-bb14-517198761f6b": {
    type: "music",
    audioUrl: "https://storage.googleapis.com/nadeem-public-gcs/mini/my_life.mp3",
    songName: "Fiesta",
    description: "Let's go",
    colorTheme: "Party"
  },
  "79c76ca6-23ea-65d1-8b54-fb1ab9de1622": {
    type: "music",
    audioUrl: "https://storage.googleapis.com/nadeem-public-gcs/mini/my_life.mp3",
    songName: "Laugh",
    description: "Funny day",
    colorTheme: "Happy"
  },
  "fa1fc415-a601-6f3f-9ce6-d7427daff434": {
    type: "music",
    audioUrl: "https://storage.googleapis.com/nadeem-public-gcs/mini/my_life.mp3",
    songName: "Coral",
    description: "Under the sea",
    colorTheme: "Ocean"
  }
};

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pageData = PAGES[slug];

  if (!pageData) {
    notFound();
  }

  if (pageData.type === "greeting") {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center p-4 md:p-6 text-center overflow-x-hidden">
        <div className="w-full max-w-md p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-white/40 dark:bg-black/20 border-2 border-primary/10 backdrop-blur-md shadow-2xl shadow-primary/5 mx-auto">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
            <HeartIcon className="w-8 h-8 md:w-10 md:h-10 text-primary animate-bounce" />
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">{pageData.title}</h1>
          
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-6 md:mb-8">
            {pageData.content}
          </p>

          <div className="space-y-4">
            <p className="text-xs text-foreground/50 italic">
              {pageData.quote}
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (pageData.type === "music") {
    return (
      <MusicPlayer
        audioUrl={pageData.audioUrl}
        songName={pageData.songName}
        description={pageData.description}
        colorTheme={pageData.colorTheme}
      />
    );
  }

  return null;
}
