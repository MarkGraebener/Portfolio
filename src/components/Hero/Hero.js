import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <Section row nopadding>
   <LeftSection>
     <SectionTitle main center>
       Welcome To<br/>
       My Personal Portfolio
     </SectionTitle>
     <SectionText>
     Passionate Full Stack developer and Army Veteran with a strong background in supply chain logistics, service industry operations,  leadership, and problem solving. A strong drive to take on new and exciting projects with a collaborative mind-set to produce the best final product possible. Proficient time management skills while working in a high pressure environment to deliver the highest quality of results.     </SectionText>
     <Button onClick={() => window.location = 'https://docs.google.com/document/d/1sM9ihVBsYozxOg78wQNG8jLq8oJov1KoYz7Ew6p-utA/edit?usp=sharing'} >Learn More</Button>
   </LeftSection>
 </Section>  
);

export default Hero;