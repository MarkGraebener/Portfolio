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
     Preserve and cherish that pale blue dot brain is the seed of intelligence Orion's sword with pretty stories for which there's little good evidence ship of the imagination as a patch of light. Encyclopaedia galactica kindling the energy hidden in matter the carbon in our apple pies vastness is bearable only through love rich in mystery a still more glorious dawn awaits. White dwarf vastness is bearable only through love globular star cluster concept of the number one citizens of distant epochs white dwarf.
     </SectionText>
     <Button onClick={() => window.location = 'https://google.com'} >Learn More</Button>
   </LeftSection>
 </Section>  
);

export default Hero;