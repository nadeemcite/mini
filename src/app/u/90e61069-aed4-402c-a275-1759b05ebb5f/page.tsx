import MusicPlayer from "@/components/MusicPlayer";

export default function MusicPlayerPage() {
    return (
        <MusicPlayer
            audioUrl="https://storage.googleapis.com/nadeem-public-gcs/mini/my_life.mp3"
            songName="My Life"
            description="Romantic Journey"
            colorTheme="Ocean"
        />
    );
}