import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <Section row nopadding>
   <LeftSection>
     <SectionTitle main center>
       Welcome To<br/>
       Mark Graebener's
       Portfolio
     </SectionTitle>
     <SectionText>
     Hi, I am a passionate Full Stack developer, an Army Veteran, and a chef with a strong background in supply chain logistics, service industry operations,  leadership, and problem solving. A strong drive to take on new and exciting projects with a collaborative mind-set to produce the best final product possible. Proficient time management skills while working in a high pressure environment to deliver the highest quality of results.     </SectionText>
     <Button onClick={() => window.location = 'https://alumni.codeup.com/students/1395'} >Learn More</Button>
   </LeftSection>
 </Section>  
);

export default Hero;