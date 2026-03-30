import { useEffect, useState } from 'react';

const heroImages = [
  'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80',
];

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const skills = [
  'React development',
  'Tailwind CSS design',
  'Responsive layouts',
  'Animation and interaction',
  'Clean UI implementation',
  'Dark mode experience',
];

const projects = [
  {
    title: 'Business Landing Page',
    stack: 'React - Tailwind CSS',
    body: 'Website casri ah oo leh CTA cad, animation fiican, iyo layout nadiif ah.',
  },
  {
    title: 'Portfolio Website',
    stack: 'Vite - React',
    body: 'Portfolio shaqsiyeed leh hero muuqaal leh, project showcase, iyo contact section.',
  },
  {
    title: 'Dashboard Interface',
    stack: 'JavaScript - UI System',
    body: 'Dashboard leh cards, statistics, iyo qaab sahlan in la ballaariyo.',
  },
];

const cn = (...classes) => classes.filter(Boolean).join(' ');

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return true;
    const saved = window.localStorage.getItem('abdi-theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length);
    }, 4500);

    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('abdi-theme', isDark ? 'dark' : 'light');
    document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
  }, [isDark]);

  const shellClass = isDark
    ? 'bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(168,85,247,0.18),transparent_24%),linear-gradient(180deg,#020617_0%,#0f172a_45%,#020617_100%)] text-white'
    : 'bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.18),transparent_28%),radial-gradient(circle_at_84%_10%,rgba(244,114,182,0.16),transparent_24%),linear-gradient(180deg,#f8fbff_0%,#eef6ff_45%,#fdfcff_100%)] text-slate-950';

  const panelClass = isDark
    ? 'border-white/10 bg-white/8 shadow-[0_24px_80px_rgba(0,0,0,0.38)] backdrop-blur-xl'
    : 'border-slate-200/70 bg-white/70 shadow-[0_24px_80px_rgba(14,30,60,0.12)] backdrop-blur-xl';

  const mutedClass = isDark ? 'text-slate-300' : 'text-slate-600';
  const secondaryButtonClass = isDark
    ? 'border-white/15 bg-white/10 text-white hover:bg-white/16'
    : 'border-slate-300/80 bg-white/80 text-slate-900 hover:bg-white';

  return (
    <div className={cn('min-h-screen overflow-x-hidden transition-colors duration-500', shellClass)}>
      <div className='pointer-events-none fixed inset-0 -z-10 overflow-hidden'>
        <div className='animate-float absolute top-20 -left-16 h-56 w-56 rounded-full bg-cyan-400/18 blur-3xl' />
        <div className='animate-float-delayed absolute top-[28rem] right-[-3rem] h-72 w-72 rounded-full bg-fuchsia-500/14 blur-3xl' />
      </div>

      <header className={cn('sticky top-0 z-50 border-b backdrop-blur-xl', isDark ? 'border-white/10 bg-slate-950/45' : 'border-slate-200/70 bg-white/65')}>
        <div className='mx-auto flex w-[min(1200px,calc(100vw-28px))] items-center justify-between gap-4 py-4 md:w-[min(1200px,calc(100vw-48px))]'>
          <a href='#hero' className='font-display text-2xl tracking-tight md:text-3xl'>
            AbdiAsiis Ali Farax
          </a>

          <nav className='hidden items-center gap-7 md:flex'>
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className={cn('text-sm font-medium transition', isDark ? 'text-slate-200/85 hover:text-white' : 'text-slate-700 hover:text-slate-950')}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className='flex items-center gap-3'>
            <button type='button' onClick={() => setIsDark((current) => !current)} className={cn('hidden rounded-full border px-4 py-2 text-sm font-medium transition md:inline-flex', secondaryButtonClass)}>
              {isDark ? 'Light Mode' : 'Dark Mode'}
            </button>
            <button type='button' className={cn('rounded-full border px-4 py-2 text-sm font-medium transition md:hidden', secondaryButtonClass)} onClick={() => setMenuOpen((current) => !current)}>
              Menu
            </button>
          </div>
        </div>

        <div className={cn('mx-auto grid w-[min(1200px,calc(100vw-28px))] overflow-hidden transition-all duration-300 md:hidden', menuOpen ? 'grid-rows-[1fr] pb-4 opacity-100' : 'grid-rows-[0fr] opacity-0')}>
          <div className='overflow-hidden'>
            <div className={cn('rounded-[28px] border p-4', panelClass)}>
              <div className='grid gap-3'>
                {navLinks.map((link) => (
                  <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)} className={cn('rounded-2xl px-4 py-3 text-sm font-medium transition', isDark ? 'bg-white/5 text-slate-200 hover:bg-white/10' : 'bg-slate-950/[0.03] text-slate-800 hover:bg-slate-950/[0.06]')}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id='hero' className='relative isolate flex min-h-screen items-center overflow-hidden'>
          <div className='absolute inset-0'>
            {heroImages.map((image, index) => (
              <div
                key={image}
                className={cn('absolute inset-0 bg-cover bg-center transition-all duration-[1800ms]', activeImage === index ? 'scale-100 opacity-100' : 'scale-105 opacity-0')}
                style={{ backgroundImage: `url(${image})` }}
              />
            ))}
          </div>
          <div className={cn('absolute inset-0', isDark ? 'bg-[linear-gradient(180deg,rgba(2,6,23,0.35)_0%,rgba(2,6,23,0.72)_55%,rgba(2,6,23,0.92)_100%)]' : 'bg-[linear-gradient(180deg,rgba(255,255,255,0.22)_0%,rgba(241,245,249,0.66)_55%,rgba(248,250,252,0.92)_100%)]')} />

          <div className='relative mx-auto flex w-[min(1200px,calc(100vw-28px))] flex-col items-center py-28 text-center md:w-[min(1200px,calc(100vw-48px))] md:py-36'>
            <div className={cn('animate-fade-up rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em]', panelClass)}>
              Web Developer Portfolio
            </div>
            <h1 className='animate-fade-up mt-8 max-w-4xl font-display text-5xl leading-[0.95] tracking-tight md:text-7xl lg:text-8xl'>
              AbdiAsiis Ali Farax
            </h1>
            <p className={cn('animate-fade-up mt-6 max-w-2xl text-base md:text-xl', mutedClass)}>
              Waxaan dhisaa websites casri ah, degdeg ah, iyo qurux badan oo isku dara design wanaagsan, animation jilicsan, iyo user experience nadiif ah.
            </p>
            <div className='animate-fade-up mt-10 flex flex-wrap items-center justify-center gap-4'>
              <a href='#projects' className='inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-500 px-7 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(37,99,235,0.32)] transition hover:-translate-y-0.5'>
                Explore Projects
              </a>
              <a href='#projects' className={cn('inline-flex min-h-12 items-center justify-center rounded-full border px-7 text-sm font-semibold transition hover:-translate-y-0.5', secondaryButtonClass)}>
                Selected Work
              </a>
            </div>
            <div className='mt-12 flex items-center gap-3'>
              {heroImages.map((image, index) => (
                <button key={image} type='button' onClick={() => setActiveImage(index)} className={cn('h-2.5 rounded-full transition-all duration-300', activeImage === index ? 'w-10 bg-cyan-400' : isDark ? 'w-2.5 bg-white/35 hover:bg-white/60' : 'w-2.5 bg-slate-900/25 hover:bg-slate-900/45')} />
              ))}
            </div>
          </div>
        </section>

        <section id='about' className='py-24 md:py-28'>
          <div className='mx-auto grid w-[min(1200px,calc(100vw-28px))] gap-8 md:w-[min(1200px,calc(100vw-48px))] lg:grid-cols-[1.1fr_0.9fr] lg:items-center'>
            <div className={cn('rounded-[32px] border p-8 md:p-10', panelClass)}>
              <p className={cn('text-xs font-semibold uppercase tracking-[0.35em]', isDark ? 'text-cyan-300/90' : 'text-cyan-700')}>Section 2</p>
              <h2 className='mt-4 font-display text-4xl leading-tight md:text-6xl'>Aniga waxaan ahay Web Developer</h2>
              <p className={cn('mt-6 max-w-2xl text-base leading-8 md:text-lg', mutedClass)}>
                Waxaan xooga saaraa sameynta websites leh muuqaal soo jiidasho leh, code nadiif ah, iyo qaab si fudud ugu shaqeeya mobile iyo desktop.
              </p>
            </div>
            <div className='grid gap-4'>
              {['Responsive websites', 'Clean code structure', 'Modern UI animation'].map((item, index) => (
                <div key={item} className={cn('animate-fade-up rounded-[28px] border p-6 transition hover:-translate-y-1', panelClass)} style={{ animationDelay: `${index * 120}ms` }}>
                  <p className={cn('text-sm font-semibold uppercase tracking-[0.24em]', isDark ? 'text-cyan-300' : 'text-cyan-700')}>0{index + 1}</p>
                  <h3 className='mt-3 text-xl font-semibold'>{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id='skills' className='py-24 md:py-28'>
          <div className='mx-auto w-[min(1200px,calc(100vw-28px))] md:w-[min(1200px,calc(100vw-48px))]'>
            <div className='mx-auto mb-10 max-w-3xl text-center md:mb-14'>
              <p className={cn('mb-4 text-xs font-semibold uppercase tracking-[0.35em]', isDark ? 'text-cyan-300/90' : 'text-cyan-700')}>Section 3</p>
              <h2 className='font-display text-4xl leading-tight md:text-5xl'>Skills</h2>
              <p className={cn('mt-5 text-base md:text-lg', mutedClass)}>Kuwani waa xirfadaha ugu muhiimsan ee aan adeegsado si aan u dhiso websites tayo sare leh.</p>
            </div>
            <div className='grid gap-5 md:grid-cols-2 xl:grid-cols-3'>
              {skills.map((skill) => (
                <article key={skill} className={cn('rounded-[28px] border p-7 transition hover:-translate-y-1', panelClass)}>
                  <h3 className='text-2xl font-semibold'>{skill}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id='projects' className='py-24 md:py-28'>
          <div className='mx-auto w-[min(1200px,calc(100vw-28px))] md:w-[min(1200px,calc(100vw-48px))]'>
            <div className='mx-auto mb-10 max-w-3xl text-center md:mb-14'>
              <p className={cn('mb-4 text-xs font-semibold uppercase tracking-[0.35em]', isDark ? 'text-cyan-300/90' : 'text-cyan-700')}>Section 4</p>
              <h2 className='font-display text-4xl leading-tight md:text-5xl'>Projects</h2>
              <p className={cn('mt-5 text-base md:text-lg', mutedClass)}>Qaar ka mid ah noocyada projects-ka aan samayn karo si ay kuu tusaan style-kayga iyo sida aan u shaqeeyo.</p>
            </div>
            <div className='grid gap-6 lg:grid-cols-3'>
              {projects.map((project) => (
                <article key={project.title} className={cn('overflow-hidden rounded-[30px] border transition hover:-translate-y-1', panelClass)}>
                  <div className='h-48 bg-[linear-gradient(135deg,#06b6d4_0%,#3b82f6_48%,#8b5cf6_100%)]' />
                  <div className='p-7'>
                    <p className={cn('text-xs font-semibold uppercase tracking-[0.28em]', isDark ? 'text-cyan-300' : 'text-cyan-700')}>{project.stack}</p>
                    <h3 className='mt-4 text-2xl font-semibold'>{project.title}</h3>
                    <p className={cn('mt-4 leading-7', mutedClass)}>{project.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id='contact' className='py-24 md:py-28'>
          <div className='mx-auto w-[min(1200px,calc(100vw-28px))] md:w-[min(1200px,calc(100vw-48px))]'>
            <div className='mx-auto mb-10 max-w-3xl text-center md:mb-14'>
              <p className={cn('mb-4 text-xs font-semibold uppercase tracking-[0.35em]', isDark ? 'text-cyan-300/90' : 'text-cyan-700')}>Section 5</p>
              <h2 className='font-display text-4xl leading-tight md:text-5xl'>Contact</h2>
              <p className={cn('mt-5 text-base md:text-lg', mutedClass)}>Haddii aad rabto website cusub ama redesign, ila soo xiriir si aan uga wada hadalno project-kaaga.</p>
            </div>
            <div className='grid gap-6 lg:grid-cols-[1.1fr_0.9fr]'>
              <div className={cn('rounded-[32px] border p-8 md:p-10', panelClass)}>
                <p className={cn('text-sm font-semibold uppercase tracking-[0.35em]', isDark ? 'text-cyan-300' : 'text-cyan-700')}>Phone Number</p>
                <a href='tel:613111888' className='mt-5 block font-display text-5xl leading-none md:text-7xl'>613111888</a>
                <p className={cn('mt-6 max-w-xl text-base leading-8 md:text-lg', mutedClass)}>Waxaan diyaar u ahay inaan kaa caawiyo landing page, portfolio, company website, ama redesign modern ah oo leh dark mode, animation, iyo responsive layout.</p>
              </div>
              <div className={cn('rounded-[32px] border p-8 md:p-10', panelClass)}>
                <ul className='grid gap-4'>
                  {['Design nadiif ah oo casri ah', 'Dark mode iyo animation gudaha site-ka', 'Responsive layout dhammaan devices-ka', 'Code la sii ballaarin karo mustaqbalka'].map((item) => (
                    <li key={item} className={cn('rounded-2xl border px-4 py-4 text-sm md:text-base', isDark ? 'border-white/10 bg-white/5 text-slate-200' : 'border-slate-200 bg-white/80 text-slate-700')}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={cn('border-t py-10', isDark ? 'border-white/10' : 'border-slate-200/80')}>
        <div className='mx-auto flex w-[min(1200px,calc(100vw-28px))] flex-col gap-6 md:w-[min(1200px,calc(100vw-48px))] md:flex-row md:items-center md:justify-between'>
          <div>
            <p className='font-display text-3xl'>AbdiAsiis Ali Farax</p>
            <p className={cn('mt-2 text-sm', mutedClass)}>Personal portfolio built with React, Tailwind CSS, dark mode, animation, and modern UI.</p>
          </div>
          <div className='flex flex-wrap gap-5 text-sm font-medium'>
            {['Explore Projects', 'Selected Work', 'Contact'].map((item) => (
              <a key={item} href={item === 'Contact' ? '#contact' : '#projects'} className={cn('transition', isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-950')}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
