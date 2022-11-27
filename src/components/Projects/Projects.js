import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';


const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main> Proyectos </SectionTitle>
    <GridContainer>
      {projects.map(( project ) => (
        <BlogCard key={project.id}>
          {project.id === 0 ? <Img style={{height: "250px"}} src={project.image} /> : <Img src={project.image} />}
          <TitleContent>
            <HeaderThree title>{project.title}</HeaderThree>
            <Hr  />
          </TitleContent>
          <CardInfo>{project.description}</CardInfo>
          <br/>
          <div>
            <TagList>
              {project.tags.map((tag, i) => (
                 <Tag key={i}>{tag} </Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            {project.visit === "" ? null : <ExternalLinks target="_blank" href={project.visit}>Código en Github</ExternalLinks>}
            {project.source === "" ? null : <ExternalLinks target="_blank" href={project.source}>Sitio Web</ExternalLinks>}
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;