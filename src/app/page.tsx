import Image from 'next/image';
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler';
import { OrbitingCirclesDemo } from '@/components/OrbitingCirclesDemo';
import { FloatingDock } from '@/components/ui/floating-dock';
import { profile, experiences, projects, awards, skills } from '@/data/profile';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandMedium,
  IconDownload,
  IconMail,
} from '@tabler/icons-react';

export default function Home() {
  return (
    <div className='min-h-screen bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center p-4'>
      <div className='relative w-full max-w-[414px] h-[90vh] max-h-[896px] bg-white dark:bg-zinc-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col'>
        <div className='pointer-events-none absolute left-1/2 top-0 z-40 h-10 w-[78%] -translate-x-1/2 rounded-b-[28px] bg-white dark:bg-zinc-800 shadow-[0_14px_30px_-18px_rgba(0,0,0,0.45)]' />
        <header className='sticky top-0 z-50 flex items-center justify-between px-5 py-4 bg-white/90 dark:bg-zinc-800/90 backdrop-blur-md border-b border-zinc-100 dark:border-zinc-700'>
          <div className='flex items-center gap-3'>
            <span className='flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium'>
              <span className='relative flex h-2 w-2'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75'></span>
                <span className='relative inline-flex rounded-full h-2 w-2 bg-emerald-500'></span>
              </span>
              Open to Work
            </span>
          </div>
          <AnimatedThemeToggler />
        </header>

        <main className='flex-1 overflow-y-auto px-5 py-6 pb-32 space-y-5 hide-scrollbar scroll-smooth'>
          <section className='bg-zinc-50 dark:bg-zinc-700 rounded-2xl p-6 transition-colors duration-300'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0 border-2 border-white dark:border-zinc-600 shadow-sm'>
                <Image
                  src='/senior.jpeg'
                  alt={profile.name}
                  fill
                  priority
                  sizes='44px'
                  className='object-cover object-[35%_60%]'
                />
              </div>

              <div>
                <p className='font-semibold text-zinc-900 dark:text-white text-sm'>
                  {profile.name}
                </p>
                <p className='text-xs text-zinc-500 dark:text-zinc-400'>
                  {profile.title}
                </p>
              </div>
            </div>

            <h1 className='text-2xl font-semibold text-zinc-900 dark:text-white leading-tight mb-3'>
              Hi, I'm Wahyu{' '}
              <span className='text-zinc-500 dark:text-zinc-400 font-normal'>
                {profile.title}
              </span>
            </h1>

            <p className='text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed'>
              {profile.bio}
            </p>

            <div className='mt-6 flex items-center gap-3'>
              <a
                href='#projects'
                className='inline-flex items-center rounded-full border border-zinc-200 bg-white px-4 py-2 text-xs font-medium text-zinc-900 shadow-sm transition-all hover:bg-zinc-50 hover:border-zinc-300 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700'
              >
                View Work
              </a>
            </div>
          </section>

          <OrbitingCirclesDemo />

          <section className='bg-zinc-50 dark:bg-zinc-700 rounded-2xl p-6'>
            <h2 className='text-xl font-semibold text-zinc-900 dark:text-white mb-4'>
              Awards
            </h2>
            <div className='space-y-3'>
              {awards.map((award, index) => (
                <div
                  key={award.id}
                  className={`flex items-center justify-between py-3 ${
                    index < awards.length - 1
                      ? 'border-b border-zinc-200 dark:border-zinc-600'
                      : ''
                  }`}
                >
                  <div>
                    <p className='font-medium text-zinc-900 dark:text-white text-sm'>
                      {award.title}
                    </p>
                    <p className='text-xs text-zinc-500 dark:text-zinc-400'>
                      {award.organization}
                    </p>
                    {award.link ? (
                      <a
                        href={award.link}
                        target='_blank'
                        rel='noreferrer'
                        className='inline-flex mt-1 text-xs font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white'
                      >
                        Tampilkan publikasi
                      </a>
                    ) : null}
                  </div>
                  <span className='text-xs text-zinc-400'>{award.year}</span>
                </div>
              ))}
            </div>
          </section>

          <section className='bg-zinc-50 dark:bg-zinc-700 rounded-2xl p-6'>
            <h2 className='text-xl font-semibold text-zinc-900 dark:text-white mb-4'>
              Learn
            </h2>
            <div className='flex flex-wrap gap-2'>
              {skills.map((skill) => (
                <span
                  key={skill}
                  className='px-3 py-1.5 rounded-full text-xs font-medium bg-white text-zinc-700 border border-zinc-200 shadow-sm dark:bg-zinc-800 dark:text-zinc-200 dark:border-zinc-600'
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section className='bg-zinc-50 dark:bg-zinc-700 rounded-2xl p-6'>
            <h2 className='text-xl font-semibold text-zinc-900 dark:text-white mb-4'>
              Experience
            </h2>
            <div className='space-y-6'>
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className='relative pl-4 border-l-2 border-zinc-200 dark:border-zinc-700 last:border-0 pb-1'
                >
                  <div className='absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-600 ring-4 ring-white dark:ring-zinc-800' />
                  <div>
                    <p className='font-medium text-zinc-900 dark:text-white text-sm'>
                      {exp.role}
                    </p>
                    <p className='text-xs text-zinc-500 dark:text-zinc-400'>
                      {exp.company} • {exp.period}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section
            id='projects'
            className='bg-zinc-50 dark:bg-zinc-700 rounded-2xl p-6'
          >
            <h2 className='text-xl font-semibold text-zinc-900 dark:text-white mb-2'>
              Projects
            </h2>
            <p className='text-sm text-zinc-500 dark:text-zinc-400 mb-5'>
              Selected works and case studies from recent projects.
            </p>

            <div className='space-y-4'>
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className='group bg-white dark:bg-zinc-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow'
                >
                  <div
                    className={`relative aspect-[16/10] w-full bg-gradient-to-br ${project.gradient}`}
                  >
                    {project.video ? (
                      <video
                        className='h-full w-full object-cover'
                        src={project.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload='metadata'
                      />
                    ) : (
                      <div className='absolute inset-0 flex items-center justify-center'>
                        <span className='text-white/20 text-6xl font-bold'>
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className='p-4 flex items-center justify-between'>
                    <div>
                      <p className='font-medium text-zinc-900 dark:text-white text-sm'>
                        {project.title}
                      </p>
                      <p className='text-xs text-zinc-500 dark:text-zinc-400'>
                        {project.skills.join(', ')}
                      </p>
                    </div>
                    {project.link ? (
                      <a
                        href={project.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-xs font-medium text-zinc-600 dark:text-zinc-300 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors'
                      >
                        View
                      </a>
                    ) : (
                      <button className='text-xs font-medium text-zinc-600 dark:text-zinc-300 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors'>
                        View
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <a
            href='https://drive.google.com/file/d/1rmmN6F6g72m5V0o4zW_5SgWtWaMyebzI/view?usp=drive_link'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-center w-full p-4 mt-4 bg-zinc-50 dark:bg-zinc-700 rounded-2xl text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-600 transition-colors'
          >
            View All Projects
          </a>

          <section className='bg-zinc-900 dark:bg-zinc-950 rounded-2xl p-6 text-white'>
            <h2 className='text-lg font-semibold mb-3'>Let’s Collaborate</h2>
            <div className='space-y-2 text-sm text-zinc-300'>
              <div className='flex items-center gap-2'>
                <span className='text-base'>📍</span>
                <span>Malang, Indonesia (Remote/Onsite)</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='text-base'>🛠️</span>
                <span>Web Apps • Automation • AI Agent</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='text-base'>⚡</span>
                <span>Fast turnaround • Clean UI • Scalable build</span>
              </div>
            </div>
          </section>
        </main>

        <div className='pointer-events-none absolute inset-x-0 -bottom-2 z-40 flex justify-center'>
          <div className='pointer-events-auto'>
            <FloatingDock
              items={[
                {
                  title: 'Email',
                  icon: (
                    <IconMail className='h-full w-full text-neutral-500 dark:text-neutral-300' />
                  ),
                  href: 'mailto:wahyufiver.id@gmail.com',
                },
                {
                  title: 'GitHub',
                  icon: (
                    <IconBrandGithub className='h-full w-full text-neutral-500 dark:text-neutral-300' />
                  ),
                  href: 'https://github.com/ts-wahyupratamaa',
                },
                {
                  title: 'LinkedIn',
                  icon: (
                    <IconBrandLinkedin className='h-full w-full text-neutral-500 dark:text-neutral-300' />
                  ),
                  href: 'https://www.linkedin.com/in/wahyupratamaa',
                },
                {
                  title: 'Medium',
                  icon: (
                    <IconBrandMedium className='h-full w-full text-neutral-500 dark:text-neutral-300' />
                  ),
                  href: 'https://medium.com/@wahyupratama_',
                },
                {
                  title: 'Download CV',
                  icon: (
                    <IconDownload className='h-full w-full text-neutral-500 dark:text-neutral-300' />
                  ),
                  href: '/cv-wahyupratama.pdf',
                },
              ]}
              desktopClassName='bg-white dark:bg-zinc-900 shadow-lg backdrop-blur-md px-3 rounded-[28px] h-16'
              mobileClassName='mx-auto'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
