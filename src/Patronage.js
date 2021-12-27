import {Box, Divider, Link, Typography, styled} from "@mui/material";
import {BlueButton, theme} from "./Util";
import PatronPackage from './assets/patron_package.pdf';

//Partner patron
import Nokia from './assets/logos/Nokia/NOKIA_LOGO_RGB_HR.jpg';
//Gold patrons
import FDMGroup from './assets/logos/FDM_Group/Fdm Group-logo-black.png';
import Ciena from './assets/logos/Ciena/ciena-logo.png';
import PSCC from './assets/logos/PSCC/PSC-Logo-EN_1.svg';
//Silver patrons
import DRDC from './assets/logos/DRDC/image.jpg';
import RossVideo from './assets/logos/Ross_Video/Ross_Logo_Red_Living_Live_Black_R.png';
import Uber from './assets/logos/Uber/Uber_Logo_Black_CMYK.png';
import GeneralDynamics from './assets/logos/General_Dynamics/Mission-Systems-Canada-logo-2col.jpg';

const PartnerLogo = styled('img')({
  height: 'max-content',
  width: '667px',
  maxWidth: '90%',
  marginTop: '1.5rem'
});

const GoldLogo = styled('img')({
  height: '6rem',
  width: 'max-content',
  marginLeft: '1rem',
  marginRight: '1rem',
  marginTop: '1.5rem',
  maxWidth: '95%'
});

const SilverLogo = styled('img')({
  height: '4rem',
  width: 'max-content',
  marginLeft: '0.5rem',
  marginRight: '0.5rem',
  marginTop: '1.5rem',
  maxWidth: '95%'
});

function PartnerPatron() {
  return (
    <Box sx={{display: 'flex', justifyContent: 'center'}}>
      <PartnerLogo src={Nokia} alt='Nokia'/>
    </Box>
  );
}

function GoldPatrons() {
  return (
    <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'center'}}>
      <GoldLogo src={FDMGroup} alt='FDM Group'/>
      <GoldLogo src={Ciena} alt='Ciena'/>
      <GoldLogo src={PSCC} alt='Public Service Commission of Canada'/>
    </Box>
  );
}

function SilverPatrons() {
  return (
    <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
      <SilverLogo src={DRDC} alt='Defence Research and Development Canada'/>
      <SilverLogo src={RossVideo} alt='Ross Video'/>
      <SilverLogo src={Uber} alt='Uber'/>
      <SilverLogo src={GeneralDynamics} alt='General Dynamics'/>
    </Box>
  );
}

export default function Patronage() {
  return (
    <Box sx={{pb: '3rem'}}>
      <Typography variant='h4' sx={{mb: '1rem'}}>Patronage</Typography>
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Link download='Patron Package.pdf' href={PatronPackage} sx={{textDecoration: 'none'}}>
          <BlueButton variant='contained'>Download the Patronage Package</BlueButton>
        </Link>
      </Box>
      <Typography variant='h4' sx={{color: theme.palette.primary['variant3'], fontWeight: 'bold', marginTop: '2rem'}}>
        Partner Patron
      </Typography>
      <Divider sx={{width: '100%'}}/>
      <PartnerPatron/>

      <Typography variant='h4' sx={{color: theme.palette.secondary.main, fontWeight: 'bold', marginTop: '4rem'}}>
        Gold Patrons
      </Typography>
      <Divider sx={{width: '100%'}}/>
      <GoldPatrons/>

      <Typography variant='h4' sx={{color: 'rgb(170,170,170)', fontWeight: 'bold', marginTop: '4rem'}}>Silver
        Patrons</Typography>
      <Divider sx={{width: '100%'}}/>
      <SilverPatrons/>
    </Box>
  )
}
