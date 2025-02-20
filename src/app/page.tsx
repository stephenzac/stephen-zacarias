import { Projects } from '@/components/projects';
import { About } from '@/components/about';
import { Interests } from '@/components/interests';

export default function Home() {
  return (
    <main className='flex flex-col items-center h-auto w-auto pb-4'>
      <About />

      <div className='mb-8 lg:mb-20' />

      <Projects />
      <Interests />
    </main>
  );
}
