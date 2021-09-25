import {Box, Card, CardContent} from "@mui/material";
import {theme, TypographyWhite} from "./util";
import event1 from './assets/events/event1.png';
import event2 from './assets/events/event2.png';
import event3 from './assets/events/event3.png';
import event4 from './assets/events/event4.png';
import event5 from './assets/events/event5.png';
import event6 from './assets/events/event6.png';
import styled from "@emotion/styled";

const EventContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-around',
  height: '150px',
  marginTop: '4em'
}));

const EventDescriptionContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  height: 'min-content',
  top: '50%',
  transform: 'translateY(-50%)'
}));

export default function About() {
  return (
    <Box sx={{backgroundColor: theme.palette.primary['variant4'], paddingTop: '150px', paddingBottom: '2em'}}>
      <Box sx={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
        <Box
          sx={{borderRadius: '50%', width: '130px', height: '130px', backgroundColor: theme.palette['tertiary'].main, transform: 'scale(90%)'}}>
          <TypographyWhite variant='h1' sx={{textAlign: 'center', paddingTop: '22px'}}>300</TypographyWhite>
          <TypographyWhite sx={{textAlign: 'center'}}>Attendees</TypographyWhite>
        </Box>
        <Box
          sx={{borderRadius: '50%', width: '130px', height: '130px', backgroundColor: theme.palette.secondary.main}}>
          <TypographyWhite variant='h1' sx={{textAlign: 'center', paddingTop: '22px'}}>9</TypographyWhite>
          <TypographyWhite sx={{textAlign: 'center'}}>Years</TypographyWhite>
        </Box>
        <Box
          sx={{borderRadius: '50%', width: '130px', height: '130px', backgroundColor: 'green', transform: 'scale(110%)'}}>
          <TypographyWhite variant='h1' sx={{textAlign: 'center', paddingTop: '22px'}}>200</TypographyWhite>
          <TypographyWhite sx={{textAlign: 'center'}}>Students</TypographyWhite>
        </Box>
        <Box
          sx={{borderRadius: '50%', width: '130px', height: '130px', backgroundColor: theme.palette.primary.main, transform: 'scale(120%)'}}>
          <TypographyWhite variant='h1' sx={{textAlign: 'center', paddingTop: '22px'}}>100</TypographyWhite>
          <TypographyWhite sx={{textAlign: 'center'}}>Companies</TypographyWhite>
        </Box>
      </Box>
      <Card raised sx={{boxShadow: 'none', marginTop: '5em'}}>
        <CardContent sx={{background: theme.palette.primary['variant2']}}>
          <TypographyWhite variant='h4'>About Us</TypographyWhite>
          <TypographyWhite>
            The IEEE Student Professional Awareness Conference (SPAC) is an annual formal dinner event which serves
            respected professionals to get engaged with engineering and computer science students within their fields.
            SPAC provides students, academics, and industry professionals, a chance to network and bridge the gap
            between classrooms and boardrooms, empowering its attendees to build professional connections. Hosted in
            1979 for the first time, SPAC has manifested itself as an event where future professionals get exposure to
            the world of professionalism which complements their vocational education.
          </TypographyWhite>
        </CardContent>
      </Card>

      <TypographyWhite variant='h2' sx={{textAlign: 'center', marginTop: '2em'}}>A typical SPAC...</TypographyWhite>
      <EventContainer>
        <EventDescriptionContainer>
          <TypographyWhite variant='h4'>Main Stage</TypographyWhite>
          <TypographyWhite>Spot for speakers and event kickoff.</TypographyWhite>
        </EventDescriptionContainer>
        <img style={{width: 'auto', height: '150px'}} src={event4} alt='Main Stage'/>
      </EventContainer>
      <EventContainer>
        <img style={{width: 'auto', height: '150px'}} src={event1} alt='Speed Dating'/>
        <EventDescriptionContainer>
          <TypographyWhite variant='h4'>Speed Dating</TypographyWhite>
          <TypographyWhite>Quick private one to one convos with students in your discipline.</TypographyWhite>
        </EventDescriptionContainer>
      </EventContainer>
      <EventContainer>
        <EventDescriptionContainer>
          <TypographyWhite variant='h4'>Exclusive Masterclass</TypographyWhite>
          <TypographyWhite>Stand alone event to reach out, showcase and finesse.</TypographyWhite>
        </EventDescriptionContainer>
        <img style={{width: 'auto', height: '150px'}} src={event3} alt='Main Stage'/>
      </EventContainer>
      <EventContainer>
        <img style={{width: 'auto', height: '150px'}} src={event6} alt='Speed Dating'/>
        <EventDescriptionContainer>
          <TypographyWhite variant='h4'>Workshops</TypographyWhite>
          <TypographyWhite>Concurrently run, where you show students what you're all about.</TypographyWhite>
        </EventDescriptionContainer>
      </EventContainer>
      <EventContainer>
        <EventDescriptionContainer>
          <TypographyWhite variant='h4'>Panel</TypographyWhite>
          <TypographyWhite>Where you can give insight on the industry and inspire.</TypographyWhite>
        </EventDescriptionContainer>
        <img style={{width: 'auto', height: '150px'}} src={event2} alt='Main Stage'/>
      </EventContainer>
      <EventContainer>
        <img style={{width: 'auto', height: '150px'}} src={event5} alt='Speed Dating'/>
        <EventDescriptionContainer>
          <TypographyWhite variant='h4'>Booths</TypographyWhite>
          <TypographyWhite>Where students can drop in for a chitchat with your company.</TypographyWhite>
        </EventDescriptionContainer>
      </EventContainer>
    </Box>
  )
}