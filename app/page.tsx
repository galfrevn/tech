import Link from 'next/link';
import Image from 'next/image';

import { Suspense } from 'react';

import { executeViewCountFetch } from '@/lib/database/mapping/views';
import { blogContentSorter, executeBlogContentFetch } from '@/lib/database/mapping/blog';

import { Icons } from '@/components/ui/icons';
import { Badge, BadgeProps } from '@/components/ui/badge';
import { Counter, CounterSkeleton } from '@/components/ui/counter';
import { cn } from '@/lib/utils';
import { Donut } from '@/components/ui/donut';

interface SecondaryBadgeProps extends BadgeProps {}
function SecondaryBadge({ children, ...props }: SecondaryBadgeProps) {
  return (
    <Badge variant='secondary' className={cn('mx-1 translate-y-0.5', props.className)} {...props}>
      {children}
    </Badge>
  );
}

export default function Home() {
  const content = blogContentSorter(executeBlogContentFetch(), 3);

  return (
    <section>
      <Image src='/images/avatar.webp' alt='Valentín Galfré' width={72} height={72} className='rounded-full mb-8' />

      <div className='flex items-center gap-4 mb-8'>
        <h1 className='text-2xl font-medium tracking-tighter'>hey, I&apos;m Valentín Galfré</h1>
      </div>

      <span className='prose prose-neutral dark:prose-invert'>
        I&apos;m a Senior Software Engineer at
        <span>
          <SecondaryBadge>
            <Icons.Mercadolibre size={16} />
            Mercado Libre
          </SecondaryBadge>
        </span>
        where I build minimalistic and elegant frontend solutions with
        <SecondaryBadge className='mr-0 ml-1 translate-y-0.5'>
          <Icons.React size={16} stroke={1} /> React
        </SecondaryBadge>
        I use
        <SecondaryBadge>
          <Icons.Typescript size={16} stroke={1} /> TypeScript
        </SecondaryBadge>
        to ensure robust and scalable code and rely on
        <SecondaryBadge>
          <Icons.AWS size={16} stroke={1} /> Amazon Web Services
        </SecondaryBadge>
        to power seamless and efficient applications. My work reflects a passion for technology, design, and creating
        exceptional user experiences.
      </span>

      <div className='flex space-x-2 items-center mt-8 mb-8'>
        <Icons.blogs stroke={1} />
        <h3>Latest blog entries</h3>
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
      <p className='prose prose-neutral dark:prose-invert my-8'>
        Throughout my career, I&apos;ve worked on various impactful projects, constantly exploring new tools and
        techniques to refine my skills. Whether it&apos;s developing scalable systems or solving complex problems,
        I&apos;m committed to delivering high-quality solutions that meet user and business needs.
      </p>
      <span className='prose prose-neutral dark:prose-invert mt-8'>
        Beyond coding, I enjoy traveling, hiking, and capturing moments through photography with my
        <span>
          <SecondaryBadge className='mr-0 ml-1 translate-y-0.5'>
            <Icons.Nikon size={16} /> Nikon D5200
          </SecondaryBadge>
        </span>{' '}
        I document my journey through personal projects and writing, sharing insights into the technologies I&apos;m
        working with, and how I&apos;m evolving in my career. My work reflects a deep curiosity for innovation, a focus
        on simplicity, and a drive for continuous improvement.
      </span>

      <div className='-mt-[40px] -mb-[160px] flex items-center justify-center w-full'>
        <Donut />
      </div>
    </section>
  );
}

async function Views({ slug }: { slug: string }) {
  const views = await executeViewCountFetch();

  return <Counter allViews={views} slug={slug} />;
}
