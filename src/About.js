import {Box, Card, CardContent, styled} from "@mui/material";
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
  marginTop: '4em',
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

export default function About({isPortrait}) {
  const baseScale = getBubbleScale(isMobile, isPortrait)
  const increment = 14;

  return (
    <Box sx={{backgroundColor: theme.palette.primary['variant4'], paddingBottom: '3em'}}>
      <Box sx={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', paddingTop: '5rem'}}>
        <Bubble sx={{backgroundColor: theme.palette['tertiary'].main, transform: `scale(${baseScale}%)`}}>
          <BubbleHeader>300</BubbleHeader>
          <BubbleWord sx={{textAlign: 'center'}}>Attendees</BubbleWord>
        </Bubble>
        <Bubble sx={{backgroundColor: theme.palette.secondary.main, transform: `scale(${baseScale + increment}%)`}}>
          <BubbleHeader>9</BubbleHeader>
          <BubbleWord>Years</BubbleWord>
        </Bubble>
        <Bubble sx={{backgroundColor: 'green', transform: `scale(${baseScale + increment * 2}%)`}}>
          <BubbleHeader>200</BubbleHeader>
          <BubbleWord>Students</BubbleWord>
        </Bubble>
        <Bubble sx={{backgroundColor: theme.palette.primary.main, transform: `scale(${baseScale + increment * 3}%)`}}>
          <BubbleHeader>100</BubbleHeader>
          <BubbleWord>Companies</BubbleWord>
        </Bubble>
      </Box>
      <Card raised sx={{boxShadow: 'none', marginTop: '5em'}}>
        <CardContent sx={{background: theme.palette.primary.dark}}>
          <LightText variant='h4'>About Us</LightText>
          <LightText sx={{fontSize: '1.2rem', marginTop: '0.5rem'}}>
            The IEEE Student Professional Awareness Conference (SPAC) is an annual formal dinner event which serves
            respected professionals to get engaged with engineering and computer science students within their fields.
            SPAC provides students, academics, and industry professionals, a chance to network and bridge the gap
            between classrooms and boardrooms, empowering its attendees to build professional connections. Hosted in
            1979 for the first time, SPAC has manifested itself as an event where future professionals get exposure to
            the world of professionalism which complements their vocational education.
          </LightText>
        </CardContent>
      </Card>
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
    return 150;
  }
}