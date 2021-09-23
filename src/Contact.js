import {Box, Container, Typography} from "@mui/material";
import Facebook from './assets/fb.png';
import LinkedIn from './assets/linkedin.png';
import Instagram from './assets/insta.png';
import styled from "@emotion/styled";
import {Input} from "./util";

const IconImage = styled('img')(() => ({
  width: '2em',
  height: '2em',
  zIndex: 1
}));

export default function Contact() {
  return (
    <Box>
      <Typography variant='h3'>How can we help you?</Typography>
      <Box>
        <Box>
          <Input label="First Name" variant="filled" color='primary'/>
          <Input label="Last Name" variant="filled" color='primary'/>
        </Box>
        <Box>
          <Input label="Email Address" variant="filled" color='primary'/>
        </Box>
        <Input label="Message" variant="filled" color='primary' multiline/>
      </Box>
      <Container sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', paddingBottom: '0.5em', marginTop: '20em'}}>
        <Typography variant='h6' sx={{zIndex: 1}}>Follow us on social media:</Typography>
        <IconImage src={LinkedIn}/>
        <IconImage src={Facebook}/>
        <IconImage src={Instagram}/>
      </Container>
    </Box>
  )
}