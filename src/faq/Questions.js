import Typography from "@mui/material/Typography";
import {Discord} from "../Util";

export const questionData = [
  {
    q: 'Where is the event taking place?',
    a: <Typography>SPAC 2022 will be held online on Hopin. The registration link can be accessed on the front page of
      the website, and through the Resume Follow Up email.</Typography>
  },
  {
    q: 'How do I navigate Hopin?',
    a: <>
      <Typography>A tutorial is available through our&nbsp;<Discord/>&nbsp;server.</Typography>
    </>
  },
  {
    q: 'Where do I go for assistance with technical difficulties?',
    a: <Typography>Send your concern on the Tech Support channel on&nbsp;<Discord/>, or
      directly message a SPAC organizer through the Hopin chat.</Typography>
  },
  {
    q: 'Should I have my camera and mic on?',
    a: <Typography>It’s always a good idea to have your mic and camera on during a Professional 1:1, or networking.
      During Panels and Masterclasses, we ask that you mute your mic and turn off your camera.</Typography>
  },
  {
    q: 'Should I dress up?',
    a: <Typography>We encourage students who will be turning their cameras on, to converse with Panelists and
      Professionals, to be dressed professionally and present themselves appropriately.</Typography>
  },
  {
    q: 'How can I ask the Panel or Masterclass presenter questions?',
    a: <Typography>Send your questions through the Hopin chat or on the Q&A channel on&nbsp;<Discord/>,
      and SPAC representatives will ask them for you.</Typography>
  }
];
