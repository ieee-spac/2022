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
  marginLeft: '1em'
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
        <IconImage src={LinkedIn}/>
        <IconImage src={Facebook}/>
        <IconImage src={Instagram}/>
      </Container>
    </Box>
  );
}