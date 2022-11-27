import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';

const About = () => {

  return (
    <Section id="about">
      <SectionTitle>Sobre Mí</SectionTitle>
      <SectionText>
        Mi nombre es Andrés Capano y soy un Full Stack Developer con capacidad de realizar proyectos complejos con un equipo al valerse de herramientas como las metodologías ágiles, git, entre otras.
        Siempre trabajando con la idea de que sean escalables, eficientes y moduralizables para así poder construir de una manera más limpia y ordenada.
      </SectionText>
    </Section>
  );
};

export default About;