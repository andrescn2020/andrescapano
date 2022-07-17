import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Mi nombre es Andres Capano y soy desarrollador web full stack
      </SectionText>
      <Button onClick={() => window.location = "https://google.com"}>Download CV</Button>
    </LeftSection>
  </Section>
);

export default Hero;