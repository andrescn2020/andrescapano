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
      <Button target="_blank" onClick={() => window.location = "https://www.dropbox.com/s/i4c506litwj4p4q/AndresCapano-CV-SoftwareDeveloper-Espa%C3%B1ol.pdf?dl=0"}>CV</Button>
    </LeftSection>
  </Section>
);

export default Hero;