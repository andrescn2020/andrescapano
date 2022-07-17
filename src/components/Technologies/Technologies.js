import React from 'react';
import { DiFirebase, DiReact, DiNodejsSmall, DiJavascript1, DiJavascript, DiPostgresql } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I´ve worked with a range a technologies in the web development world.
      From Back-end To Design
    </SectionText>
    <List>
      <ListItem>
        <div style={{ display: "flex" }}>
          <DiReact size="3rem" />
          <DiJavascript1 style={{marginLeft: "1rem"}}  size="3rem" />
          <DiJavascript style={{marginLeft: "1rem"}}  size="3rem" />
        </div>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <div style={{ display: "flex" }}>
          <DiFirebase size="3rem" />
          <DiNodejsSmall style={{marginLeft: "1rem"}} size="3rem" />
          <DiPostgresql style={{marginLeft: "1rem"}} size="3rem" />
        </div>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      {/* <ListItem>
      <DiZend size="3rem"/>
      <ListContainer>
        <ListTitle>UI/UX</ListTitle>
        <ListParagraph>
          Experience with <br />
          tools like Figma
        </ListParagraph>
      </ListContainer>
    </ListItem> */}
    </List>
  </Section>
);

export default Technologies;
