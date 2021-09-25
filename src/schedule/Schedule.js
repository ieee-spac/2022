import {Box, Typography} from "@mui/material";
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import {events} from "./events";
import {TypographySchedule} from "../util";
import 'react-vertical-timeline-component/style.min.css';

export default function Schedule() {
  return (
    <Box>
      <Typography variant='h4'>Schedule</Typography>
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <VerticalTimeline>
          {
            events.map((event, index) => {
              const borderWidth = index % 2 === 0 ? '0 0 0 6px' : '0 6px 0 0';
              return (
                <VerticalTimelineElement key={index}
                                         contentStyle={{background: 'rgb(230, 230, 230)', color: 'black', border: `solid ${event.iconColor}`, borderWidth: borderWidth, borderRadius: '3px', boxShadow: 'none'}}
                                         contentArrowStyle={{borderRight: '7px solid  rgb(230, 230, 230)'}}
                                         date={event.time}
                                         dateClassName={'TimelineDate'}
                                         iconStyle={{background: event.iconColor, color: '#fff', boxShadow: 'none'}}
                                         icon={event.icon}
                >
                  <Typography variant='h6'>{event.title}</Typography>
                  {
                    event.description.length > 0 && <TypographySchedule>{event.description}</TypographySchedule>
                  }
                </VerticalTimelineElement>
              );
            })
          }
        </VerticalTimeline>
      </Box>
    </Box>
  )
}