import MusicPlayer from "@/components/MusicPlayer";
import { notFound } from "next/navigation";
import React from "react";
import { trackPageVisit } from "@/lib/tracker";
import { PAGES } from "@/lib/data";
import { cookies } from "next/headers";
import PasswordGate from "@/components/PasswordGate";

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

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  await trackPageVisit(slug);

  const pageData = PAGES[slug];

  if (!pageData) {
    notFound();
  }

  // Check for password protection
  if (pageData.password) {
    const cookieStore = await cookies();
    const hasAccess = cookieStore.get(`mini-access-${slug}`);

    if (!hasAccess) {
      return <PasswordGate slug={slug} />;
    }
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
        key={slug}
        audioUrl={pageData.audioUrl}
        songName={pageData.songName}
        description={pageData.description}
        colorTheme={pageData.colorTheme}
        transcriptUrl={pageData.transcriptUrl}
      />
    );
  }

  return null;
}
