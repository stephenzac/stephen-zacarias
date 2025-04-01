import { SectionHeader } from '@/components/app/section-header';
import { RiMusic2Line } from 'react-icons/ri';

interface VideoData {
  title: string;
  embedURL: string;
}

const videos: VideoData[] = [
  {
    title: 'Hark the Herald Angels Sing Trombone Soli',
    embedURL: 'https://www.youtube.com/embed/sQW86nxndtM?si=h8smg1JjANY2yKqj',
  },
  {
    title: 'Overwatch Winter Wonderland Trombone Arrangement',
    embedURL: 'https://www.youtube.com/embed/PM5NgQcdWqM?si=dak4f4OJHErMCxH_',
  },
  {
    title: 'Legend of Korra Main Theme Multitrack',
    embedURL: 'https://www.youtube.com/embed/Ns79qRslohY?si=GSHqbl4Q5T-hiizG',
  },
  {
    title: 'UC Irvine Anteater Band Fight Song',
    embedURL: 'https://www.youtube.com/embed/akI8kKtQVFI?si=tkEtujxPI3pqA3T2',
  },
  {
    title: 'Alta Loma High School Jazz A - Reno Jazz Festival 2019',
    embedURL: 'https://www.youtube.com/embed/0RgOaiub8KI?si=SMtQuuyQnRAI9-IT',
  },
];

export default function Music() {
  return (
    <main className='w-full pt-16'>
      <SectionHeader>
        Music
        <span className='text-accent'>
          <RiMusic2Line />
        </span>
      </SectionHeader>

      <p className='mb-10'>
        I&apos;ve been playing the trombone for 11 years now. Here are some
        videos of me in action!
      </p>

      {videos.map((video) => (
        <article key={video.title} className='mb-16'>
          <h3 className='text-xl text-accent font-bold italic mb-2'>
            {video.title}
          </h3>

          <iframe
            className='w-full h-80'
            src={video.embedURL}
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
            loading='lazy'
          />
        </article>
      ))}
    </main>
  );
}
