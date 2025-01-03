import Link from 'next/link';
import { Suspense } from 'react';
import { Counter, CounterSkeleton } from '@/components/ui/counter';
import { executeViewCountFetch } from '@/lib/database/mapping/views';
import { blogContentSorter, executeBlogContentFetch } from '@/lib/database/mapping/blog';

export const metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
};

export default function BlogPage() {
  const content = blogContentSorter(executeBlogContentFetch());

  return (
    <section>
      <h1 className='font-medium text-2xl mb-8 tracking-tighter'>blog</h1>

      <div className='prose prose-neutral dark:prose-invert'>
        <p className='mb-8'>
          I write about software development, design patterns, and my experiences in the tech industry.
        </p>
      </div>

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
