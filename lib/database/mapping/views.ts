import { sql } from '@vercel/postgres';
import { type View } from '@/lib/database/schema';

import { unstable_noStore as noStore } from 'next/cache';

export async function getBlogViews(): Promise<number> {
  noStore();
  const { rows: views } = await sql<View>`SELECT count FROM views`;

  return views.reduce((acc, curr) => acc + Number(curr.count), 0);
}

export async function executeViewCountFetch(): Promise<Array<View>> {
  noStore();
  const { rows: views } = await sql<View>`SELECT slug, count FROM views`;

  return views;
}
