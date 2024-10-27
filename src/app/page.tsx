import { Projects } from '@/components/projects';
import { About } from '@/components/about';
import { Interests } from '@/components/interests';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className='flex flex-col items-center h-auto w-auto pb-4'>
      <About />
      <Projects />
      <Interests />
      <Footer />
    </main>
  );
}
