import React from "react";

export type PageData =
  | {
    type: "greeting";
    title: string;
    content: React.ReactNode;
    quote: string;
    password?: string;
  }
  | {
    type: "music";
    audioUrl: string;
    songName: string;
    description: string;
    colorTheme: "Romantic" | "Ocean" | "Party" | "Sad" | "Happy";
    password?: string;
    transcriptUrl?: string;
  };

export const PAGES: Record<string, PageData> = {
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
    quote: "\"Love is the only force capable of transforming an enemy into a friend.\"",
    password: "abcd1234"
  },
  "ab2": {
    type: "music",
    audioUrl: "https://storage.googleapis.com/nadeem-public-gcs/mini/my_life.mp3",
    songName: "My Life",
    description: "Romantic Journey",
    colorTheme: "Ocean",
    password: "abcd1234"
  },
  "90e61069-aed4-402c-a275-1759b05ebb5f": {
    type: "music",
    audioUrl: "https://storage.googleapis.com/nadeem-public-gcs/mini/putri/miss_you/I%20miss%20you.mp3",
    songName: "You miss me",
    description: "May be this makes you feel better",
    colorTheme: "Ocean",
    password: "abcd1234",
    transcriptUrl: "https://storage.googleapis.com/nadeem-public-gcs/mini/putri/miss_you/final_transcript.json"
  },
  "b5e64f01-4095-6d1d-8da6-a5630ceddbf3": {
    type: "music",
    audioUrl: "https://storage.googleapis.com/nadeem-public-gcs/mini/my_life.mp3",
    songName: "Neon Lights",
    description: "Dance all night",
    colorTheme: "Party",
    password: "abcd1234"
  },
  "4ca8c0d9-2e2f-6ae0-bb89-cd840b7ea0a7": {
    type: "music",
    audioUrl: "https://storage.googleapis.com/nadeem-public-gcs/mini/my_life.mp3",
    songName: "Sweet Nothing",
    description: "Just for you",
    colorTheme: "Romantic",
    password: "abcd1234"
  },
  "101ab7ba-a47e-6c67-b82e-37d0111a51be": {
    type: "music",
    audioUrl: "https://storage.googleapis.com/nadeem-public-gcs/mini/my_life.mp3",
    songName: "Rainy Day",
    description: "Melancholy vibes",
    colorTheme: "Sad",
    password: "abcd1234"
  },
  "c1d320eb-0c55-6b1b-874f-31e1a077038d": {
    type: "music",
    audioUrl: "https://storage.googleapis.com/nadeem-public-gcs/mini/my_life.mp3",
    songName: "Sunshine",
    description: "Good morning",
    colorTheme: "Happy",
    password: "abcd1234"
  },
  "4ba6c253-5b2a-65de-9b38-62f0fcc8f885": {
    type: "music",
    audioUrl: "https://storage.googleapis.com/nadeem-public-gcs/mini/my_life.mp3",
    songName: "Deep Blue",
    description: "Calm waves",
    colorTheme: "Ocean",
    password: "abcd1234"
  },
  "ec81b10c-95f3-6ec8-a4c6-48e4becb14ea": {
    type: "music",
    audioUrl: "https://storage.googleapis.com/nadeem-public-gcs/mini/my_life.mp3",
    songName: "Forever",
    description: "Eternity",
    colorTheme: "Romantic",
    password: "abcd1234"
  },
  "896bc08b-c5ae-6af0-8db3-e70ab60a6123": {
    type: "music",
    audioUrl: "https://storage.googleapis.com/nadeem-public-gcs/mini/my_life.mp3",
    songName: "Club Mix",
    description: "Bass drop",
    colorTheme: "Party",
    password: "abcd1234"
  },
  "e9aa4178-b045-6f8f-9074-0c6bf67ac752": {
    type: "music",
    audioUrl: "https://storage.googleapis.com/nadeem-public-gcs/mini/my_life.mp3",
    songName: "Smile",
    description: "Be happy",
    colorTheme: "Happy",
    password: "abcd1234"
  },
  "fd22b2f7-089c-63f1-a3a2-27f82c139d39": {
    type: "music",
    audioUrl: "https://storage.googleapis.com/nadeem-public-gcs/mini/my_life.mp3",
    songName: "Tears",
    description: "Broken heart",
    colorTheme: "Sad",
    password: "abcd1234"
  },
  "318f3edb-8c49-632e-b8fc-c2c99562a419": {
    type: "music",
    audioUrl: "https://storage.googleapis.com/nadeem-public-gcs/mini/my_life.mp3",
    songName: "Breeze",
    description: "Sea shore",
    colorTheme: "Ocean",
    password: "abcd1234"
  },
  "88ff1b65-269a-6334-bb21-7fc438008684": {
    type: "music",
    audioUrl: "https://storage.googleapis.com/nadeem-public-gcs/mini/my_life.mp3",
    songName: "Valentine",
    description: "Be mine",
    colorTheme: "Romantic",
    password: "abcd1234"
  },
  "f1c2312f-e3b6-6fa3-9952-9b1035bd4d68": {
    type: "music",
    audioUrl: "https://storage.googleapis.com/nadeem-public-gcs/mini/my_life.mp3",
    songName: "Celebration",
    description: "Cheers",
    colorTheme: "Party",
    password: "abcd1234"
  },
  "0080a0fd-75b7-6cf4-b4ff-dea8537412af": {
    type: "music",
    audioUrl: "https://storage.googleapis.com/nadeem-public-gcs/mini/my_life.mp3",
    songName: "Joy",
    description: "Pure bliss",
    colorTheme: "Happy",
    password: "abcd1234"
  },
  "f01c040d-b558-6a60-b085-82ab182b6698": {
    type: "music",
    audioUrl: "https://storage.googleapis.com/nadeem-public-gcs/mini/my_life.mp3",
    songName: "Tides",
    description: "Moving water",
    colorTheme: "Ocean",
    password: "abcd1234"
  },
  "db518420-c9ac-6577-a5d0-7b8e18486e22": {
    type: "music",
    audioUrl: "https://storage.googleapis.com/nadeem-public-gcs/mini/my_life.mp3",
    songName: "Lonely",
    description: "Solo night",
    colorTheme: "Sad",
    password: "abcd1234"
  },
  "c9292532-23b5-6ee6-a388-ed004ea6f1f2": {
    type: "music",
    audioUrl: "https://storage.googleapis.com/nadeem-public-gcs/mini/my_life.mp3",
    songName: "Adore",
    description: "Only you",
    colorTheme: "Romantic",
    password: "abcd1234"
  },
  "024fe120-dc77-6bbe-bb14-517198761f6b": {
    type: "music",
    audioUrl: "https://storage.googleapis.com/nadeem-public-gcs/mini/my_life.mp3",
    songName: "Fiesta",
    description: "Let's go",
    colorTheme: "Party",
    password: "abcd1234"
  },
  "79c76ca6-23ea-65d1-8b54-fb1ab9de1622": {
    type: "music",
    audioUrl: "https://storage.googleapis.com/nadeem-public-gcs/mini/my_life.mp3",
    songName: "Laugh",
    description: "Funny day",
    colorTheme: "Happy",
    password: "abcd1234"
  },
  "fa1fc415-a601-6f3f-9ce6-d7427daff434": {
    type: "music",
    audioUrl: "https://storage.googleapis.com/nadeem-public-gcs/mini/my_life.mp3",
    songName: "Coral",
    description: "Under the sea",
    colorTheme: "Ocean",
    password: "abcd1234"
  }
};
