import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';

 const About = () => {

  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
      My name is Andres Capano and i am a Full Stack Developer with the ability to develop projects always keeping in mind that they are scalable, efficient and modularizable in order to be able to build as a team.
      </SectionText>
    </Section>
  );
};

export default About;