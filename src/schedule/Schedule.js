import {Box, styled, Typography} from "@mui/material";
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import {events} from "./Events";
import 'react-vertical-timeline-component/style.min.css';
import {isMobile} from "react-device-detect";

const TypographySchedule = styled(Typography)(() => ({
    margin: '0 !important',
    fontWeight: 'normal !important'
}));

const Timeline = styled(VerticalTimeline)(() => ({
    '&.vertical-timeline::before': {
        background: 'rgb(19, 19, 40)'
    }
}));

export default function Schedule() {
    return (
        <Box sx={{pb: '4rem', pt: '1rem'}}>
            <Typography variant='h1'>Schedule</Typography>
            <Typography variant='h5'>6:30 p.m. - 9:30 p.m. EST</Typography>
            <Box sx={{display: 'flex', justifyContent: 'center', mt: '1rem'}}>
                <Timeline animate={!isMobile}>
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
                                                         contentStyle={{
                                                             background: 'rgb(230, 230, 230)',
                                                             color: 'black',
                                                             border: `solid ${event.iconColor}`,
                                                             borderWidth: borderWidth,
                                                             borderRadius: '3px',
                                                             boxShadow: 'none'
                                                         }}
                                                         contentArrowStyle={{borderRight: '7px solid  rgb(230, 230, 230)'}}
                                                         date={
                                                             <Typography sx={{
                                                                 mt: '0 !important',
                                                                 fontWeight: index > 0 && index < events.length - 1 ? 'bold !important' : 'normal !important'
                                                             }}>
                                                                 {event.time}
                                                             </Typography>
                                                         }
                                                         position={switchingTimeline ? (index % 2 === 0 ? 'left' : 'right') : 'right'}
                                                         dateClassName='TimelineDate'
                                                         iconStyle={{
                                                             background: event.iconColor,
                                                             color: '#fff',
                                                             boxShadow: 'none'
                                                         }}
                                                         icon={event.icon}
                                >
                                    <Typography variant='h6'>{event.title}</Typography>
                                    {
                                        event.description.length > 0 &&
                                        <TypographySchedule>{event.description}</TypographySchedule>
                                    }
                                </VerticalTimelineElement>
                            );
                        })
                    }
                </Timeline>
            </Box>
        </Box>
    )
}
