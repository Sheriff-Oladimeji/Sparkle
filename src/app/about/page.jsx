import AboutHeader from '@/components/header/AboutHeader';
import Team from '@/components/team/Team';
import React from 'react'
export const metadata = {
  title: "About Sparkle",
  description: "Empower your brand with our creative expertise",
};
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