import {
  AboutSection,
  ContactsSection,
  EducationSection,
  ExperienceSection,
  HackathonsSection,
  HeroSection,
  ProjectsSection,
  ServicesSection,
  SidebarSection,
  SkillsSection,
  StatsSection,
  TopBar,
} from '@widgets'

export function Home() {
  return (
    <div className='relative z-10 mx-auto min-h-screen max-w-[1500px] px-6 sm:px-4'>
      <TopBar />

      <div className='grid grid-cols-[240px_1fr] gap-12 lg:grid-cols-[200px_1fr] lg:gap-8 md:grid-cols-1 md:gap-0'>
        <SidebarSection />

        <main className='flex min-w-0 flex-col gap-20 py-6 sm:gap-16'>
          <HeroSection />
          <AboutSection />
          <StatsSection />
          <SkillsSection />
          <ServicesSection />
          <EducationSection />
          <ExperienceSection />
          <HackathonsSection />
          <ProjectsSection />
          <ContactsSection />

          <footer className='border-t border-border pt-6 text-xs text-text-dim'>
            <p>
              <span className='text-acc'>$</span> exit 0 —{' '}
              <span className='text-text-muted'>thisisaliyev.dev</span> ·
              built with React + Vite + Tailwind + Motion
            </p>
          </footer>
        </main>
      </div>
    </div>
  )
}
