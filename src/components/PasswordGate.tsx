'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { verifyPassword } from '@/app/actions';

export default function PasswordGate({ slug }: { slug: string }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    startTransition(async () => {
      const result = await verifyPassword(slug, password);
      if (result.success) {
        router.refresh();
      } else {
        setError(result.error || 'Invalid password');
      }
    });
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center p-4 text-center">
      <div className="w-full max-w-md p-8 rounded-3xl bg-white/30 dark:bg-black/30 border border-white/20 backdrop-blur-xl shadow-2xl">
        <h2 className="text-xl font-semibold mb-4 text-primary">Content Locked</h2>
        <p className="mb-6 text-foreground/80">
          The content is not available for today its scheduled for a particular event but you can still access it using the password.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50 text-center tracking-widest"
            disabled={isPending}
          />
          
          {error && <p className="text-sm text-red-500">{error}</p>}
          
          <button
            type="submit"
            disabled={isPending}
            className="w-full py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
          >
            {isPending ? 'Unlocking...' : 'Unlock'}
          </button>
        </form>
      </div>
    </div>
  );
}
