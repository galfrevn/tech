import { AnimatedSection, AnimatedItem } from '@/components/animated-section';
import { blogContentSorter, executeBlogContentFetch } from '@/lib/database/mapping/blog';
import Link from 'next/link';
import { Suspense } from 'react';
import { Counter, CounterSkeleton } from '@/components/ui/counter';
import { executeViewCountFetch } from '@/lib/database/mapping/views';

export const metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
};

export default function BlogPage() {
  const content = blogContentSorter(executeBlogContentFetch());

  return (
    <AnimatedSection>
      <AnimatedItem>
        <h1 className='font-medium text-2xl mb-8 tracking-tighter'>blog</h1>
      </AnimatedItem>

      <AnimatedItem className='prose prose-neutral dark:prose-invert'>
        <p className='mb-8'>
          I write about software development, design patterns, and my experiences in the tech industry.
        </p>
      </AnimatedItem>

      {content.map((post) => (
        <AnimatedItem key={post.slug}>
          <Link className='flex flex-col space-y-1 mb-4' href={`/blog/${post.slug}`}>
            <div className='w-full flex flex-col'>
              <p className='text-neutral-900 dark:text-neutral-100 tracking-tight'>
                {post.metadata.title}
              </p>
              <Suspense fallback={<CounterSkeleton />}>
                <Views slug={post.slug} />
              </Suspense>
            </div>
          </Link>
        </AnimatedItem>
      ))}
    </AnimatedSection>
  );
}

async function Views({ slug }: { slug: string }) {
  const views = await executeViewCountFetch();
  return <Counter allViews={views} slug={slug} />;
}
