import React from 'react';
import { DiReact, DiNodejsSmall, DiJavascript1, DiJavascript, DiPostgresql, DiBootstrap, DiGit, DiPython, DiMongodb, DiCss3 } from 'react-icons/di';
import { FaAws } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiFirebase } from "react-icons/si";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListText, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />

    <SectionTitle>Tecnologiás</SectionTitle>
    <List>
      <ListItem>
        <div style={{ display: "grid" }}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
            <DiReact style={{ marginLeft: "1rem" }} size="4rem" />
            <ListText>Reactjs</ListText>
          </div>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
            <DiJavascript1 style={{ marginLeft: "1rem" }} size="4rem" />
            <ListText>JavaScript</ListText>
          </div>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
            <SiTypescript style={{ marginLeft: "1rem" }} size="4rem" />
            <ListText>TypeScript</ListText>
          </div>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
            <DiNodejsSmall style={{ marginLeft: "1rem" }} size="4rem" />
            <ListText>Nodejs</ListText>
          </div>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
            <DiPostgresql style={{ marginLeft: "1rem" }} size="4rem" />
            <ListText>PostgreSQL</ListText>
          </div>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
            <DiGit style={{ marginLeft: "1rem" }} size="4rem" />
            <ListText>Git</ListText>
          </div>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
            <SiFirebase style={{ marginLeft: "1rem" }} size="4rem" />
            <ListText>Firebase</ListText>
          </div>
        </div>
      </ListItem>
      <ListItem>
        <div style={{ display: "grid" }}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
            <DiPython style={{ marginLeft: "1rem" }} size="4rem" />
            <ListText>Python</ListText>
          </div>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
            <DiMongodb style={{ marginLeft: "1rem" }} size="4rem" />
            <ListText>MongoDB</ListText>
          </div>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
            <FaAws style={{ marginLeft: "1rem" }} size="4rem" />
            <ListText>AWS</ListText>
          </div>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
            <DiJavascript style={{ marginLeft: "1rem" }} size="4rem" />
            <ListText>HTML</ListText>
          </div>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
            <DiCss3 style={{ marginLeft: "1rem" }} size="4rem" />
            <ListText>CSS</ListText>
          </div>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
            <SiTailwindcss style={{ marginLeft: "1rem" }} size="4rem" />
            <ListText>Tailwind</ListText>
          </div>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
            <DiBootstrap style={{ marginLeft: "1rem" }} size="4rem" />
            <ListText>Bootstrap</ListText>
          </div>
        </div>
      </ListItem>
    </List>

  </Section>
);

export default Technologies;
