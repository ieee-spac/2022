import {Box, styled} from "@mui/material";
import {theme, TypographyWhite} from "./util";
import LinkedIn from "./assets/linkedin.png";
import Facebook from "./assets/fb.png";
import Instagram from "./assets/insta.png";
import {isMobile} from "react-device-detect";

const IconImage = styled('img')(() => ({
  width: '2rem',
  height: '2rem',
  zIndex: 1
}));

const FooterContainer = styled(Box)(() => ({
  backgroundColor: theme.palette.primary['variant4'],
  height: '5rem',
  display: 'flex',
  justifyContent: 'center'
}));

const FooterContainerInner = styled(Box)(() => ({
  position: 'relative',
  height: 'min-content',
  top: '50%',
  transform: 'translateY(-50%)',
  display: 'flex'
}));

export default function Footer({isPortrait}) {
  const fontSize = isMobile && isPortrait ? theme.typography.body1.fontSize : theme.typography.h6.fontSize;
  const iconMargin = isMobile && isPortrait ? '1rem' : '2rem';

  return (
    <FooterContainer>
      <FooterContainerInner>
        <TypographyWhite variant='h6' sx={{zIndex: 1, fontSize: fontSize}}>Follow us on social media:</TypographyWhite>
        <a href='https://www.linkedin.com/company/spacottawa/' target='_blank' rel='noreferrer' style={{marginLeft: 0}}>
          <IconImage src={LinkedIn} sx={{marginLeft: iconMargin}}/>
        </a>
        <a href='https://www.facebook.com/ieeespacottawa/' target='_blank' rel='noreferrer'>
          <IconImage src={Facebook} sx={{marginLeft: iconMargin}}/>
        </a>
        <a href='https://www.instagram.com/ieeespac/' target='_blank' rel='noreferrer'>
          <IconImage src={Instagram} sx={{marginLeft: iconMargin}}/>
        </a>
      </FooterContainerInner>
    </FooterContainer>
  );
}