import {Box, Container, TextField, Typography} from "@mui/material";
import Facebook from './assets/fb.png';
import LinkedIn from './assets/linkedin.png';
import Instagram from './assets/insta.png';
import styled from "@emotion/styled";
import {TypographyWhite} from "./util";

export default function Contact() {
  return (
    <Box>
      <Typography variant='h4'>How can we help you?</Typography>
      <Box>
        <Box>
          <TextField label="First Name" variant="filled" sx={{marginRight: '3em'}}/>
          <TextField label="Last Name" variant="filled"/>
        </Box>
        <Box>
          <TextField label="Email Address" variant="filled" color='primary'/>
        </Box>
        <TextField label="Message" variant="filled" color='primary' multiline/>
      </Box>
    </Box>
  )
}