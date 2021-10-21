import {Box, Divider, Link, Typography} from "@mui/material";
import {BlueButton, theme} from "./Util";
import PatronPackage from './assets/patron_package.pdf';

export default function Patronage() {
  return (
    <Box>
      <Typography variant='h4' sx={{mb: '1rem'}}>Patronage</Typography>
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Link download='Patron Package.pdf' href={PatronPackage} sx={{textDecoration: 'none'}}>
          <BlueButton variant='contained'>Download the Patron Package</BlueButton>
        </Link>
      </Box>
      <Typography variant='h4' sx={{color: theme.palette.primary['variant3'], fontWeight: 'bold', marginTop: '2rem'}}>
        Partner Patron
      </Typography>
      <Divider sx={{width: '100%'}}/>
      <Typography variant='h4' sx={{color: theme.palette.secondary.main, fontWeight: 'bold', marginTop: '2rem'}}>
        Gold Patrons
      </Typography>
      <Divider sx={{width: '100%'}}/>
      <Typography variant='h4' sx={{color: 'silver', fontWeight: 'bold', marginTop: '2rem'}}>Silver Patrons</Typography>
      <Divider sx={{width: '100%', mb: '4rem'}}/>
    </Box>
  )
}