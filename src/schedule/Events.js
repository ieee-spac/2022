import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import GroupIcon from '@mui/icons-material/Group';
import {theme} from "../util";
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';

export const events = [
  {
    title: 'Happy Hour',
    icon: <FreeBreakfastIcon/>,
    iconColor: theme.palette.primary.light,
    description: '',
    time: '6:00 PM'
  },
  {
    title: 'Welcome Address',
    icon: <EmojiPeopleIcon/>,
    iconColor: theme.palette.secondary.light,
    description: '',
    time: '6:15 PM'
  },
  {
    title: 'Tech Panel',
    icon: <DeveloperBoardIcon/>,
    iconColor: theme.palette['tertiary'].light,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    time: '6:45 PM'
  },
  {
    title: 'Speed Dating',
    icon: <GroupIcon/>,
    iconColor: theme.palette.primary.light,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    time: '6:50 PM'
  },
  {
    title: 'Nokia Masterclass',
    icon: <BorderColorIcon/>,
    iconColor: theme.palette.secondary.light,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    time: '7:20 PM'
  },
  {
    title: 'Speed Dating',
    icon: <GroupIcon/>,
    iconColor: theme.palette['tertiary'].light,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    time: '7:25 PM'
  },
  {
    title: 'Ciena Masterclass',
    icon: <BorderColorIcon/>,
    iconColor: theme.palette.primary.light,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    time: '7:30 PM'
  },
  {
    title: 'FDM Masterclass',
    icon: <BorderColorIcon/>,
    iconColor: theme.palette.secondary.light,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    time: '7:40 PM'
  },
  {
    title: 'Closing Remarks',
    icon: <EmojiPeopleIcon/>,
    iconColor: theme.palette['tertiary'].light,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    time: '7:50 PM'
  }
];