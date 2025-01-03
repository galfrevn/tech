import type { Metadata } from 'next';
import { AnimatedSection, AnimatedItem } from '@/components/animated-section';

export const metadata: Metadata = {
  title: 'Work',
  description: 'A summary of my work and contributions.',
};

export default function WorkPage() {
  return (
    <AnimatedSection>
      <AnimatedItem>
        <h1 className='font-medium text-2xl mb-8 tracking-tighter'>my work</h1>
      </AnimatedItem>
      
      <AnimatedItem className='prose prose-neutral dark:prose-invert'>
        <p>
          Passionate about crafting high-quality software and mentoring developers, while building impactful digital
          solutions. Here&apos;s a summary of my work so far.
        </p>
      </AnimatedItem>

      <AnimatedItem>
        <hr className='my-6 border-neutral-100 dark:border-neutral-800' />
      </AnimatedItem>

      <AnimatedItem className='prose prose-neutral dark:prose-invert'>
        <h2 className='font-medium text-xl mb-1 tracking-tighter'>Mercado Libre</h2>
        <p className='text-neutral-600 dark:text-neutral-400 text-sm'>Senior Software Engineer, April 2024 – Present</p>
        <p>
          At Mercado Libre, I focus on designing and building scalable applications that enhance the e-commerce
          experience. I ensure code quality, mentor junior developers, and implement cutting-edge technologies to keep
          the platform competitive.
        </p>
      </AnimatedItem>

      <AnimatedItem>
        <hr className='my-6 border-neutral-100 dark:border-neutral-800' />
      </AnimatedItem>

      <AnimatedItem className='prose prose-neutral dark:prose-invert'>
        <h2 className='font-medium text-xl mb-1 tracking-tighter'>Crombie</h2>
        <p className='text-neutral-600 dark:text-neutral-400 text-sm'>
          Software Technical Leader, April 2023 – April 2024
        </p>
        <p>
          Led a team of 8 developers, driving the development of high-quality applications. Fostered a culture of
          collaboration and innovation, delivered projects on time and within budget, and improved application
          performance by 40%.
        </p>

        <p className='text-neutral-600 dark:text-neutral-400 text-sm'>
          Senior Software Engineer, June 2022 – April 2023
        </p>
        <p>
          Optimized and maintained web applications, ensuring client satisfaction with a 95% approval rating.
          Streamlined deployment processes, mentored new team members, and reduced production errors while delivering
          robust solutions.
        </p>

        <p className='text-neutral-600 dark:text-neutral-400 text-sm'>Software Engineer, March 2022 – June 2022</p>
        <p>
          Focused on front-end development, creating visually appealing and efficient web interfaces. Contributed to
          reusable components and improved application stability by 60%.
        </p>
      </AnimatedItem>

      <AnimatedItem>
        <hr className='my-6 border-neutral-100 dark:border-neutral-800' />
      </AnimatedItem>

      <AnimatedItem className='prose prose-neutral dark:prose-invert'>
        <h2 className='font-medium text-xl mb-1 tracking-tighter'>Sublytics</h2>
        <p className='text-neutral-600 dark:text-neutral-400 text-sm'>Software Engineer, November 2022 – April 2023</p>
        <p>
          Collaborated remotely with a global team to develop high-quality applications. Designed and implemented
          real-time APIs with AWS and enhanced software architecture, achieving over 80% test coverage.
        </p>
      </AnimatedItem>

      <AnimatedItem>
        <hr className='my-6 border-neutral-100 dark:border-neutral-800' />
      </AnimatedItem>

      <AnimatedItem className='prose prose-neutral dark:prose-invert'>
        <h2 className='font-medium text-xl mb-1 tracking-tighter'>Freelancer</h2>
        <p className='text-neutral-600 dark:text-neutral-400 text-sm'>Software Engineer, December 2020 – July 2021</p>
        <p>
          Worked on diverse projects for various clients, developing and maintaining web applications to help small
          businesses establish a strong online presence. Delivered tailored solutions and ensured high-quality project
          execution.
        </p>
      </AnimatedItem>
    </AnimatedSection>
  );
}
