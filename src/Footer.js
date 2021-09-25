import {Box, Container} from "@mui/material";
import {theme, TypographyWhite} from "./util";
import LinkedIn from "./assets/linkedin.png";
import Facebook from "./assets/fb.png";
import Instagram from "./assets/insta.png";
import styled from "@emotion/styled";

const IconImage = styled('img')(() => ({
  width: '2em',
  height: '2em',
  zIndex: 1,
  marginLeft: '2em'
}));

export default function Footer() {
  return (
    <Box sx={{backgroundColor: theme.palette.primary['variant4'], height: '5em', display: 'flex'}}>
      <Container sx={{
        display: 'flex',
        position: 'relative',
        height: 'min-content',
        top: '50%',
        transform: 'translateY(-50%)',
        justifyContent: 'center'
      }}>
        <TypographyWhite variant='h6' sx={{zIndex: 1}}>Follow us on social media:</TypographyWhite>
        <a href='https://www.linkedin.com/company/spacottawa/'  target='_blank' rel='noreferrer'>
          <IconImage src={LinkedIn}/>
        </a>
        <a href='https://www.facebook.com/ieeespacottawa/' target='_blank' rel='noreferrer'>
          <IconImage src={Facebook}/>
        </a>
        <a href='https://www.instagram.com/ieeespac/' target='_blank' rel='noreferrer'>
          <IconImage src={Instagram}/>
        </a>
      </Container>
    </Box>
  );
}