import { Suspense, cache } from 'react';
import { unstable_noStore as noStore } from 'next/cache';

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { CustomMarkdown } from '@/components/mdx';
import { Counter, CounterSkeleton } from '@/components/ui/counter';

import { executeViewCountFetch } from '@/lib/database/mapping/views';
import { executeBlogContentFetch } from '@/lib/database/mapping/blog';

import { increment } from '@/lib/database/actions';
import { Blog } from '@/lib/database/schema';

type BlogPageProps = { params: Blog };

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata | undefined> {
  let post = executeBlogContentFetch().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let { title, publishedAt: publishedTime, summary: description, image } = post.metadata;
  let ogImage = image ? `https://galfrevn.com${image}` : `https://galfrevn.com/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `https://galfrevn.com/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

function formatDate(date: string) {
  noStore();
  let currentDate = new Date();
  if (!date.includes('T')) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date);

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  let daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = '';

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = 'Today';
  }

  let fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return `${fullDate} (${formattedDate})`;
}

export default function BlogPage({ params }: BlogPageProps) {
  let post = executeBlogContentFetch().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <script
        type='application/ld+json'
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `https://galfrevn.com${post.metadata.image}`
              : `https://galfrevn.com/og?title=${post.metadata.title}`,
            url: `https://galfrevn.com/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'Valentin Galfre',
            },
          }),
        }}
      />
      <h1 className='title font-medium text-2xl tracking-tighter max-w-[650px]'>{post.metadata.title}</h1>
      <div className='flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]'>
        <Suspense fallback={<CounterSkeleton className='w-32' />}>
          <p className='text-sm text-neutral-600 dark:text-neutral-400'>{formatDate(post.metadata.publishedAt)}</p>
        </Suspense>
        <Suspense fallback={<CounterSkeleton className='h-3' />}>
          <Views slug={post.slug} />
        </Suspense>
      </div>
      <article className='prose prose-quoteless prose-neutral dark:prose-invert'>
        {/* @ts-expect-error markdown content type */}
        <CustomMarkdown source={post.content} />
      </article>
    </section>
  );
}

let incrementViews = cache(increment);

async function Views({ slug }: { slug: string }) {
  let views = await executeViewCountFetch();
  incrementViews(slug);
  return <Counter allViews={views} slug={slug} />;
}
