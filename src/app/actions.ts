'use server';

import { cookies } from 'next/headers';
import { PAGES } from '@/lib/data';

export async function verifyPassword(slug: string, password: string) {
  const page = PAGES[slug];
  
  if (!page || !page.password) {
    return { success: false, error: "Page not found or not protected" };
  }

  if (page.password === password) {
    // Set a cookie that expires in 1 day
    const cookieStore = await cookies();
    cookieStore.set(`mini-access-${slug}`, 'true', { 
        httpOnly: true,
        path: '/',
        maxAge: 60 * 60 * 24 // 1 day
    });
    return { success: true };
  }

  return { success: false, error: "Incorrect password" };
}
