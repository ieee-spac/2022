import {Box, styled} from "@mui/material";
import {theme, LightText} from "./Util";
import event1 from './assets/events/event1.png';
import event2 from './assets/events/event2.png';
import event3 from './assets/events/event3.png';
import event4 from './assets/events/event4.png';
import event5 from './assets/events/event5.png';
import {isMobile} from "react-device-detect";

const EventContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  height: '150px',
  marginTop: '2.5em',
  '& > *': {
    marginLeft: '1em',
    marginRight: '1em'
  }
}));

const EventDescriptionContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  height: 'min-content'
}));

const EventImage = styled('img')(() => ({
  width: '30%',
  maxWidth: '210px'
}));

const Bubble = styled(Box)(() => ({
  borderRadius: '50%',
  width: '80px',
  height: '80px',
}));

const BubbleHeader = styled(LightText)(() => ({
  textAlign: 'center',
  paddingTop: '8px',
  fontSize: '30px',
  fontWeight: 'bold'
}));

const BubbleWord = styled(LightText)({
  textAlign: 'center',
  fontSize: '11px',
  marginTop: '-0.3rem'
});

const AboutContainer = styled(Box)(({theme}) => ({
  marginTop: '5em',
  borderStyle: 'solid',
  borderColor: theme.palette.primary.light,
  borderRadius: '3px',
  borderWidth: '2px 2px 2px 10px',
  padding: '1rem 1rem 1rem 0.7rem'
}))

export default function About({isPortrait}) {
  const baseScale = getBubbleScale(isMobile, isPortrait)
  const increment = isMobile ? 14 : 20;

  function BubblesMobile() {
    return (
      <Box sx={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', pt: '5rem'}}>
        <Bubble sx={{backgroundColor: theme.palette['primary'].light, transform: `scale(${baseScale}%)`}}>
          <BubbleHeader>300</BubbleHeader>
          <BubbleWord sx={{textAlign: 'center'}}>Attendees</BubbleWord>
        </Bubble>
        <Bubble sx={{backgroundColor: theme.palette['orange'].light, transform: `scale(${baseScale + increment}%)`}}>
          <BubbleHeader>9</BubbleHeader>
          <BubbleWord>Years</BubbleWord>
        </Bubble>
        <Bubble sx={{backgroundColor: theme.palette['green'].light, transform: `scale(${baseScale + increment * 2}%)`}}>
          <BubbleHeader>200</BubbleHeader>
          <BubbleWord>Students</BubbleWord>
        </Bubble>
        <Bubble
          sx={{backgroundColor: theme.palette['secondary'].light, transform: `scale(${baseScale + increment * 3}%)`}}>
          <BubbleHeader>100</BubbleHeader>
          <BubbleWord>Companies</BubbleWord>
        </Bubble>
      </Box>
    );
  }

  function BubblesDesktop() {
    return (
      <Box sx={{pt: '5rem', ml: '5rem'}}>
        <Box sx={{display: 'flex', mb: '2rem'}}>
          <Bubble sx={{
            backgroundColor: theme.palette['primary'].light,
            transform: `scale(${baseScale}%)`,
            mr: '5rem',
            ml: '1rem'
          }}>
            <BubbleHeader>300</BubbleHeader>
            <BubbleWord sx={{textAlign: 'center'}}>Attendees</BubbleWord>
          </Bubble>
          <Bubble sx={{
            backgroundColor: theme.palette['orange'].light,
            transform: `scale(${baseScale + increment * 3}%)`,
            mt: '6rem'
          }}>
            <BubbleHeader>9</BubbleHeader>
            <BubbleWord>Years</BubbleWord>
          </Bubble>
        </Box>
        <Box sx={{display: 'flex'}}>
          <Bubble sx={{
            backgroundColor: theme.palette['green'].light,
            transform: `scale(${baseScale + increment}%)`,
            mr: '3rem'
          }}>
            <BubbleHeader>200</BubbleHeader>
            <BubbleWord>Students</BubbleWord>
          </Bubble>
          <Bubble sx={{
            backgroundColor: theme.palette['secondary'].light,
            transform: `scale(${baseScale + increment * 4}%)`,
            mt: '7rem'
          }}>
            <BubbleHeader>100</BubbleHeader>
            <BubbleWord>Companies</BubbleWord>
          </Bubble>
        </Box>
      </Box>
    );
  }

  function Description() {
    return (
      <AboutContainer sx={{height: 'max-content'}}>
        <LightText variant='h4'>About Us</LightText>
        <LightText sx={{fontSize: '1.2rem', marginTop: '0.5rem'}}>
          The IEEE Student Professional Awareness Conference (SPAC) is an annual formal dinner event that serves
          esteemed professionals and allows them to engage with engineering and computer science students within their
          fields. This year the conference will be held online to maintain health and safety regulations as due to the
          current circumstances regarding Covid-19. SPAC provides students, academics, and industry professionals a
          chance to network and bridge the gap between classrooms and boardrooms, thereby empowering its attendees to
          build professional connections and form a bond. Present conditions will allow SPAC to expand its reach across
          communities to give new students and partners opportunities in building strong foundations. First hosted in
          1979, SPAC has manifested itself as an event where future professionals receive exposure to the world of
          employment which complements their ongoing studies.
        </LightText>
      </AboutContainer>
    );
  }

  return (
    <Box sx={{paddingBottom: '3em'}}>
      {
        isMobile && (
          <Box>
            <BubblesMobile/>
            <Description/>
          </Box>
        )
      }
      {
        !isMobile && (
          <Box sx={{display: 'flex'}}>
            <Description/>
            <BubblesDesktop/>
          </Box>
        )
      }
      <LightText variant='h2' sx={{textAlign: 'center', marginTop: '2em'}}>A typical SPAC...</LightText>
      <EventContainer>
        <EventDescriptionContainer>
          <LightText variant='h4'>Presentation Section</LightText>
          <LightText>Spot for speakers and event kickoff.</LightText>
        </EventDescriptionContainer>
        <EventImage src={event4} alt='Presentation Section'/>
      </EventContainer>
      <EventContainer>
        <EventImage src={event1} alt='Professional 1:1'/>
        <EventDescriptionContainer>
          <LightText variant='h4'>Professional 1:1</LightText>
          <LightText>Quick one-on-one conversations with students in your discipline</LightText>
        </EventDescriptionContainer>
      </EventContainer>
      <EventContainer>
        <EventDescriptionContainer>
          <LightText variant='h4'>Exclusive Masterclass</LightText>
          <LightText>Stand alone event to reach out, showcase and finesse.</LightText>
        </EventDescriptionContainer>
        <EventImage src={event3} alt='Exclusive Masterclass'/>
      </EventContainer>
      <EventContainer>
        <EventImage src={event5} alt='Workshops'/>
        <EventDescriptionContainer>
          <LightText variant='h4'>Workshops</LightText>
          <LightText>Concurrently run, where you show students what you're all about.</LightText>
        </EventDescriptionContainer>
      </EventContainer>
      <EventContainer>
        <EventDescriptionContainer>
          <LightText variant='h4'>Virtual Booths</LightText>
          <LightText>
            Private concurrent session where students can drop in for a chit chat with companies
          </LightText>
        </EventDescriptionContainer>
        <EventImage src={event2} alt='Virtual Booths'/>
      </EventContainer>
    </Box>
  )
}

function getBubbleScale(isMobile, isPortrait) {
  if (isMobile && isPortrait) {
    return 75;
  } else if (isMobile) {
    return 110;
  } else {
    return 110;
  }
}