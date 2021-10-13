import {Box, styled, Link} from "@mui/material";
import {theme, LightText} from "./Util";
import LinkedIn from "./assets/linkedin.png";
import Facebook from "./assets/fb.png";
import Instagram from "./assets/insta.png";
import {isMobile} from "react-device-detect";

const IconImage = styled('img')(() => ({
  width: '1.8rem',
  height: '1.8rem',
  zIndex: 1
}));

const FooterContainer = styled(Box)(() => ({
  backgroundColor: theme.palette.primary['variant4'],
  height: '4rem',
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
  const linkStyle = {marginLeft: isMobile && isPortrait ? '1rem' : '2rem'};

  return (
    <FooterContainer>
      <FooterContainerInner>
        <LightText sx={{zIndex: 1, alignSelf: 'center'}}>
          Follow us on social media:
        </LightText>
        <Link href='https://www.linkedin.com/company/spacottawa/' target='_blank' rel='noreferrer' sx={linkStyle}>
          <IconImage src={LinkedIn}/>
        </Link>
        <Link href='https://www.facebook.com/ieeespacottawa/' target='_blank' rel='noreferrer' sx={linkStyle}>
          <IconImage src={Facebook}/>
        </Link>
        <Link href='https://www.instagram.com/ieeespac/' target='_blank' rel='noreferrer' sx={linkStyle}>
          <IconImage src={Instagram}/>
        </Link>
      </FooterContainerInner>
    </FooterContainer>
  );
}