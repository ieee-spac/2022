import {Box, styled, Typography} from "@mui/material";
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import {events} from "./events";
import 'react-vertical-timeline-component/style.min.css';
import {isMobile} from "react-device-detect";

export const TypographySchedule = styled(Typography)(() => ({
  margin: '0 !important',
  fontWeight: 'normal !important'
}));

export default function Schedule() {
  return (
    <Box sx={{paddingBottom: '4em'}}>
      <Typography variant='h4'>Schedule</Typography>
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <VerticalTimeline animate={!isMobile}>
          {
            events.map((event, index) => {
              let borderWidth;
              //Magic number for when to make all timeline elements appear on same side
              const switchingTimeline = document.body.getBoundingClientRect().width > 1152;
              if (switchingTimeline) {
                borderWidth = index % 2 === 0 ? '0 0 0 6px' : '0 6px 0 0';
              } else {
                borderWidth = '0 6px 0 0';
              }
              return (
                <VerticalTimelineElement key={index}
                                         contentStyle={{background: 'rgb(230, 230, 230)', color: 'black', border: `solid ${event.iconColor}`, borderWidth: borderWidth, borderRadius: '3px', boxShadow: 'none'}}
                                         contentArrowStyle={{borderRight: '7px solid  rgb(230, 230, 230)'}}
                                         date={event.time}
                                         position={switchingTimeline ? (index % 2 === 0 ? 'left' : 'right') : 'right'}
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