import React from 'react';
import { DiCss3, DiFirebase, DiGit, DiHtml5, DiJava, DiMysql, DiNodejs, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a wide range of Technologies in a short period of time.
      From Back-end To Design
    </SectionText>
    <List>

      <ListItem>
        <li>
        <DiReact size="3rem" />
        <DiJava size="3rem" />
        <DiCss3 size="3rem" />
        <DiHtml5 size="3rem" />
        </li>
        
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with: <br />
            Java React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <li>
        <DiFirebase size="3rem" />
        <DiMysql size="3rem" />
        <DiGit size="3rem" />
        <DiNodejs size="3rem" />
        </li>
        

        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with: <br />
            Mysql and Node
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with: <br />
            Tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>

    </List>
  </Section>
);

export default Technologies;
