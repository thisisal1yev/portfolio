import {
  AboutSection,
  ContactsSection,
  EducationSection,
  ExperienceSection,
  HackathonsSection,
  ProjectsSection,
  ServicesSection,
  SidebarSection,
  SkillsSection,
} from '@widgets'

export function Home() {
  return (
    <div className='grid min-h-screen grid-cols-[55fr_35fr] gap-20 p-5 md:grid-cols-1'>
      <main className='flex flex-col gap-y-5'>
        <AboutSection />
        <ServicesSection />
        <SkillsSection />
        <EducationSection />
        <ExperienceSection />
        <HackathonsSection />
        <ProjectsSection />
        <ContactsSection />
      </main>

      <SidebarSection />
    </div>
  )
}
