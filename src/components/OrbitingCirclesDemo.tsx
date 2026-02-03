import { Braces, Code, Layers, Terminal, Zap } from 'lucide-react';
import { OrbitingCircles } from '@/components/ui/orbiting-circles';
export function OrbitingCirclesDemo() {
  return (
    <div className='relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden'>
      <OrbitingCircles iconSize={40}>
        <Code />
        <Braces />
        <Layers />
        <Terminal />
        <Zap />
      </OrbitingCircles>
      <div className='absolute z-10 size-44 overflow-hidden rounded-full ring-1 ring-black/10 dark:ring-white/10'>
        <video
          src='/custom.webm'
          autoPlay
          loop
          muted
          playsInline
          className='h-full w-full object-cover bg-transparent'
        />
      </div>
      <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
        <Braces />
        <Layers />
        <Terminal />
        <Zap />
      </OrbitingCircles>
    </div>
  );
}
