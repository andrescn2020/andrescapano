import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Bienvenid@s a mi Portafolio!!!
      </SectionTitle>
      <a href="https://www.dropbox.com/s/q37cp1d8gmauziy/CV-CapanoAndres-FullStackDeveloper.pdf?dl=0" target="_blank">
      <Button>Descargar CV</Button>
      </a>
      
    </LeftSection>
  </Section>
);

export default Hero;