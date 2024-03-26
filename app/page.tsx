import { Icons } from '@/components/ui/icons';
import { Badge, BadgeProps } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Grid, GridItem } from '@/components/ui/grid';

interface SecondaryBadgeProps extends BadgeProps {}
function SecondaryBadge({ children, ...props }: SecondaryBadgeProps) {
  return (
    <Badge variant='secondary' className='mx-1 translate-y-0.5' {...props}>
      {children}
    </Badge>
  );
}

export default function Home() {
  return (
    <section>
      <h1 className='mb-8 text-2xl font-medium tracking-tighter'>hey, I&apos;m galfrevn 👋</h1>

      <span className='prose prose-neutral dark:prose-invert'>
        I&apos;m a frontend developer, optimist, and community builder. I currently <a>work</a> as the VP of Product at
        <SecondaryBadge>
          <Icons.React size={16} stroke={1} />
          React
        </SecondaryBadge>
        where I help teach the
        <SecondaryBadge>
          <Icons.Typescript size={16} stroke={1} /> Typescript
        </SecondaryBadge>
        community, an open-source web framework built with
        <SecondaryBadge>
          <Icons.AWS size={16} stroke={1} /> Amazon Web Services
        </SecondaryBadge>
      </span>

      <div className='flex space-x-2 items-center mt-8 mb-8'>
        <Icons.blogs stroke={1} />
        <h3>Latest blog entries</h3>
      </div>

      <Grid className='gap-6'>
        <GridItem>
          <Card>Hola</Card>
        </GridItem>
        <GridItem className='col-span-2'>
          <Card>Hola</Card>
        </GridItem>
        <GridItem className='col-span-2'>
          <Card>Hola</Card>
        </GridItem>
        <GridItem className='col-span-1'>
          <Card>Hola</Card>
        </GridItem>
        <GridItem className='col-span-1'>
          <Card>Hola</Card>
        </GridItem>
      </Grid>

      <p className='prose prose-neutral dark:prose-invert mt-8'>
        I create educational content for developers, teaching them about web development, JavaScript and TypeScript,
        React and Next.js, and more. This comes in all forms: blog posts, videos, tweets, conference talks, and
        workshops. You can watch some of my favorites below.
      </p>
      
      <p className='prose prose-neutral dark:prose-invert mt-8'>
        Over the past decade, I&apos;ve written content on my blog and newsletter. I try to keep things simple. You&apos;ll find
        writing about technologies I&apos;m interested in at the time, or how I&apos;m learning and growing in my career, sharing
        knowledge along the way.
      </p>
    </section>
  );
}
