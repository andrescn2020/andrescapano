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
        Hello World!!!
      </SectionText>
      <Button target="_blank" onClick={() => window.location = "https://drive.google.com/file/d/1atRHirkf6UFVMdUVRVO_i0-No7daN4WB/view"}>Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;