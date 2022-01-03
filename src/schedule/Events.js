import {theme} from "../Util";

import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import GroupIcon from '@mui/icons-material/Group';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CallEndIcon from '@mui/icons-material/CallEnd';

export const events = [
    {
        title: 'Networking with Nokia',
        icon: <FreeBreakfastIcon/>,
        iconColor: theme.palette.primary.light,
        description: '',
        time: '5:30 p.m. - 5:55 p.m.'
    },
    {
        title: 'Introduction',
        icon: <EmojiPeopleIcon/>,
        iconColor: theme.palette.secondary.light,
        description: '',
        time: '6:00 p.m. - 6:20 p.m.'
    },
    {
        title: 'Nokia MasterClass',
        icon: <LightbulbIcon/>,
        iconColor: theme.palette['orange'].light,
        description: '',
        time: '6:25 p.m. - 6:45 p.m.'
    },
    {
        title: 'Speed Dating',
        icon: <GroupIcon/>,
        iconColor: theme.palette['green'].light,
        description: '',
        time: '6:50 p.m. - 7:10 p.m.'
    },
    {
        title: 'Ciena MasterClass',
        icon: <LightbulbIcon/>,
        iconColor: theme.palette.primary.light,
        description: '',
        time: '7:15 p.m. - 7:30 p.m.'
    },
    {
        title: 'Raffle Winner Announcement',
        icon: <EmojiEventsIcon/>,
        iconColor: theme.palette.secondary.light,
        description: '',
        time: '7:35 p.m. - 7:45 p.m.'
    },
    {
        title: 'FDM MasterClass',
        icon: <LightbulbIcon/>,
        iconColor: theme.palette['orange'].light,
        description: '',
        time: '7:50 p.m. - 8:05 p.m.'
    },
    {
        title: 'Speed Dating',
        icon: <GroupIcon/>,
        iconColor: theme.palette['green'].light,
        description: '',
        time: '8:10 p.m. - 8:30 p.m.'
    },
    {
        title: 'PSC MasterClass',
        icon: <LightbulbIcon/>,
        iconColor: theme.palette.primary.light,
        description: '',
        time: '8:35 p.m. - 8:50 p.m.'
    },
    {
        title: 'Nokia Workshop',
        icon: <GroupIcon/>,
        iconColor: theme.palette.secondary.light,
        description: '',
        time: '8:55 p.m. - 9:05 p.m.'
    },
    {
        title: 'Closing',
        icon: <CallEndIcon/>,
        iconColor: theme.palette['orange'].light,
        description: '',
        time: '9:10 p.m. - 9:25 p.m.'
    },
    {
        title: 'Open Networking',
        icon: <FreeBreakfastIcon/>,
        iconColor: theme.palette['green'].light,
        description: '',
        time: '9:30 p.m. - 10:00 p.m.'
    }
];
