import Link from 'next/link';
import { Suspense } from 'react';

import { Counter, CounterSkeleton } from '@/components/ui/counter';

import { blogContentSorter, executeBlogContentFetch } from '@/lib/database/mapping/blog';
import { executeViewCountFetch } from '@/lib/database/mapping/views';

export const metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
};

export default function BlogPage() {
  const content = blogContentSorter(executeBlogContentFetch());

  return (
    <section>
      <h1 className='font-medium text-2xl mb-8 tracking-tighter'>read my blog</h1>
      {content.map((post) => (
        <Link key={post.slug} className='flex flex-col space-y-1 mb-4' href={`/blog/${post.slug}`}>
          <div className='w-full flex flex-col'>
            <p className='text-neutral-900 dark:text-neutral-100 tracking-tight'>{post.metadata.title}</p>
            <Suspense fallback={<CounterSkeleton />}>
              <Views slug={post.slug} />
            </Suspense>
          </div>
        </Link>
      ))}
    </section>
  );
}

async function Views({ slug }: { slug: string }) {
  const views = await executeViewCountFetch();

  return <Counter allViews={views} slug={slug} />;
}
