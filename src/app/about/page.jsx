import AboutHeader from '@/components/header/AboutHeader';
import Team from '@/components/team/Team';
import React from 'react'

const About = () => {
  return (
    <section className="page">
      <main className='w-[90%]  mx-auto'>
        <AboutHeader />
        <Team/>
      </main>
    </section>
  );
}

export default About