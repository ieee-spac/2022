import {Box, Card, CardContent, styled} from "@mui/material";
import {theme, LightText} from "./util";
import event1 from './assets/events/event1.png';
import event2 from './assets/events/event2.png';
import event3 from './assets/events/event3.png';
import event4 from './assets/events/event4.png';
import event5 from './assets/events/event5.png';
import event6 from './assets/events/event6.png';
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

const BubbleWord = styled(LightText)(() => ({
  textAlign: 'center',
  fontSize: '11px',
  marginTop: '-0.3rem'
}));

export default function About({isPortrait}) {
  const baseScale = getBubbleScale(isMobile, isPortrait)
  const increment = 14;

  return (
    <Box sx={{backgroundColor: theme.palette.primary['variant4'], paddingBottom: '2em'}}>
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
        <CardContent sx={{background: theme.palette.primary['variant2']}}>
          <LightText variant='h4'>About Us</LightText>
          <LightText>
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
          <LightText variant='h4'>Main Stage</LightText>
          <LightText>Spot for speakers and event kickoff.</LightText>
        </EventDescriptionContainer>
        <EventImage src={event4} alt='Main Stage'/>
      </EventContainer>
      <EventContainer>
        <EventImage src={event1} alt='Speed Dating'/>
        <EventDescriptionContainer>
          <LightText variant='h4'>Speed Dating</LightText>
          <LightText>Quick private one to one convos with students in your discipline.</LightText>
        </EventDescriptionContainer>
      </EventContainer>
      <EventContainer>
        <EventDescriptionContainer>
          <LightText variant='h4'>Exclusive Masterclass</LightText>
          <LightText>Stand alone event to reach out, showcase and finesse.</LightText>
        </EventDescriptionContainer>
        <EventImage src={event3} alt='Main Stage'/>
      </EventContainer>
      <EventContainer>
        <EventImage src={event6} alt='Speed Dating'/>
        <EventDescriptionContainer>
          <LightText variant='h4'>Workshops</LightText>
          <LightText>Concurrently run, where you show students what you're all about.</LightText>
        </EventDescriptionContainer>
      </EventContainer>
      <EventContainer>
        <EventDescriptionContainer>
          <LightText variant='h4'>Panel</LightText>
          <LightText>Where you can give insight on the industry and inspire.</LightText>
        </EventDescriptionContainer>
        <EventImage src={event2} alt='Main Stage'/>
      </EventContainer>
      <EventContainer>
        <EventImage src={event5} alt='Speed Dating'/>
        <EventDescriptionContainer>
          <LightText variant='h4'>Booths</LightText>
          <LightText>Where students can drop in for a chitchat with your company.</LightText>
        </EventDescriptionContainer>
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