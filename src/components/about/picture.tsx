import Image from 'next/image';
import { AnimateLeft } from '../app/animation/animate-left';

export const MyPicture: React.FC = () => (
  <AnimateLeft>
    <Image
      src="/stephen.JPG"
      height={225}
      width={225}
      alt="Picture of Stephen smiling"
      priority={true}
      className="w-48 h-auto mb-8 border-4 border-solid border-accent overflow-hidden rounded-md"
    />
  </AnimateLeft>
);
