import {Box, Card, CardContent, TextField, Typography} from "@mui/material";
import {StyledDropZone} from 'react-drop-zone'
import 'react-drop-zone/dist/styles.css'
import {StandardButton, theme} from "./util";
import styled from "@emotion/styled";

const DropZone = styled(StyledDropZone)(() => ({
  fontFamily: `${theme.typography.fontFamily} !important`,
  fontWeight: 'normal !important',
  fontSize: '16px !important',
  color: 'rgb(135, 135, 135) !important',
  '&:focus': {
    borderColor: `${theme.palette.primary.dark} !important`
  }
}));

export default function Register() {
  return (
    <Box sx={{paddingTop: '5em'}}>
      <Typography variant='h4'>Register</Typography>
      <Typography variant='h5'>Tickets are free!</Typography>
      <Box sx={{justifyContent: 'center', display: 'flex'}}>
            <Box sx={{width: 'fit-content'}}>
              <Box sx={{marginTop: '0.5em', display: 'flex', flexDirection: 'column'}}>
                <Typography variant='h6' sx={{textAlign: 'center'}}>Please fill out your profile:</Typography>
                <Box sx={{marginBottom: '1em'}}>
                  <TextField variant='outlined' id='registerFirstNameInput' label='First Name' sx={{marginRight: '1em'}}/>
                  <TextField id='registerLastNameInput' label='Last Name'/>
                </Box>
                <TextField sx={{width: '100%', marginBottom: '1em'}} id='registerPhoneNumberInput' type='tel' label='Phone Number'/>
                <TextField sx={{width: '100%', marginBottom: '1em'}} id='registerEmailInput' label='Email Address'/>
                <TextField sx={{width: '100%', marginBottom: '1em'}} id='registerUniversityInput' label='University'/>
                <TextField sx={{width: '100%', marginBottom: '1em'}} id='registerProgramInput' label='Program'/>
                <DropZone children='Click or drop your Resume here' onDrop={(file, text) => {
                }}/>
                <Box sx={{justifyContent: 'center', display: 'flex', marginTop: '1em'}}>
                  <StandardButton variant='contained' sx={{width: 'fit-content'}}>Submit</StandardButton>
                </Box>
              </Box>
            </Box>
      </Box>

    </Box>
  )
}