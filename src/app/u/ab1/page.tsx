import Link from "next/link";

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

export default function GreetingPage() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center p-6 text-center">
      <div className="max-w-md w-full p-10 rounded-[3rem] bg-white/40 dark:bg-black/20 border-2 border-primary/10 backdrop-blur-md shadow-2xl shadow-primary/5">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
          <HeartIcon className="w-10 h-10 text-primary animate-bounce" />
        </div>
        
        <h1 className="text-3xl font-bold mb-4">Hello there!</h1>
        
        <p className="text-lg text-foreground/80 leading-relaxed mb-8">
          Welcome to your special corner of <span className="text-primary font-semibold">LoveTheme</span>. 
          We&apos;re so glad you&apos;re here. This is a space built with passion and care, 
          just for you.
        </p>

        <div className="space-y-4">
          <Link 
            href="/"
            className="block w-full py-4 bg-primary text-primary-foreground rounded-full font-bold hover:opacity-90 transition-opacity"
          >
            Back to Home
          </Link>
          <p className="text-xs text-foreground/50 italic">
            &quot;Love is the only force capable of transforming an enemy into a friend.&quot;
          </p>
        </div>
      </div>
    </div>
  );
}
