import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
// import { DiCssdeck } from 'react-icons/di';
import { FaPushed } from "react-icons/fa";
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center",color: "white", marginBottom: "1.5rem" }}>
            <FaPushed size= "3rem" /> <Span>Portafolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
       <li>
        <Link href="#projects">
          <NavLink> Proyectos </NavLink>
        </Link>
       </li>
       <li>
        <Link href="#tech">
          <NavLink> Tecnologías </NavLink>
        </Link>
       </li>
       <li>
        <Link href="#about">
          <NavLink> Sobre Mí </NavLink>
        </Link>
       </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/andrescn2020' target="_blank">
        <AiFillGithub size= "3rem" />
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/andrescapano/' target="_blank">
        <AiFillLinkedin size= "3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
