import { Projects } from '@/components/projects/projects';
import { About } from '@/components/about/about';
import { Interests } from '@/components/interests/interests';
import { Footer } from '@/components/app/footer';
// import { TextBox } from '@/components/app/text-box';

export default function Home() {
  return (
    <main className='flex flex-col items-center h-auto w-auto pb-4'>
      <About />

      <div className='mb-8 lg:mb-40' />

      <Projects />
      <Interests />
    </main>
  );
}
