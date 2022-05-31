import Link from 'next/link';
import React from 'react';
import { AiFillFile, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: 'white', marginBottom: "20px"}}>
          <DiCssdeck size="3rem" /><Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      
      <SocialIcons href='https://github.com/MarkGraebener '>
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      
      <SocialIcons href='https://www.linkedin.com/in/mark-graebener-00787832/'>
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href='https://docs.google.com/document/d/1sM9ihVBsYozxOg78wQNG8jLq8oJov1KoYz7Ew6p-utA/edit?usp=sharing'>
        <AiFillFile size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
