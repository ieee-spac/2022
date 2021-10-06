import {Alert, Box, Card, CardContent, Snackbar, styled, TextField, Typography} from "@mui/material";
import {StyledDropZone} from 'react-drop-zone'
import 'react-drop-zone/dist/styles.css'
import {StandardButton} from "../util";
import {useState} from "react";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import {isMobile} from "react-device-detect";
import {submitProfile} from "./SubmitProfile";

const DropZone = styled(StyledDropZone)(({theme}) => ({
  fontFamily: `${theme.typography.fontFamily} !important`,
  fontWeight: 'normal !important',
  fontSize: '16px !important',
  color: 'rgb(135, 135, 135) !important',
  '&:focus:not(.DropZoneError)': {
    borderColor: `${theme.palette.primary.dark} !important`
  },
  '&.DropZoneError': {
    borderColor: 'rgb(211, 47, 47)',
    color: 'rgb(211, 47, 47) !important',
  },
  '&.DropZoneError:focus': {
    borderColor: 'rgb(211, 47, 47)'
  },
}));

export default function Register({isPortrait, storage}) {
  const [formState, setFormState] = useState({
    firstName: '',
    firstNameError: false,
    lastName: '',
    lastNameError: false,
    phone: '',
    email: '',
    emailError: false,
    university: '',
    universityError: false,
    program: '',
    programError: false,
    file: null,
    fileError: false,
    errorSummary: ''
  });
  const [alertStatus, setAlertStatus] = useState('success');
  const [alertMessage, setAlertMessage] = useState('');
  const [showSnackBar, setSnackBar] = useState(false);
  const [submitEnabled, setSubmitEnabled] = useState(true);

  const nameBoxWidthStyle = isMobile && isPortrait ? {width: '100%'} : {};
  const resumeUploadName = isMobile ? 'Upload your resume here' : 'Click or drop your resume here';

  function setFile(file) {
    const newFormState = {...formState};
    newFormState.file = file;
    newFormState.fileError = false;
    setFormState(newFormState);
  }

  function setFormValue(field, event) {
    const newFormState = {...formState};
    newFormState[field] = event.target.value;
    setFormState(newFormState);
  }

  async function submit() {
    const props = {formState, storage, setSubmitEnabled, setAlertStatus, setAlertMessage, setSnackBar, setFormState};
    await submitProfile(props);
  }

  return (
    <Box sx={{paddingTop: '2em', display: 'flex', flexDirection: 'column'}}>
      <Box sx={{marginBottom: '1em'}}>
        <Typography variant='h4'>Register</Typography>
        <Typography variant='h5'>Tickets are free!</Typography>
      </Box>
      <Box sx={{display: 'flex', width: '100%', justifyContent: 'center', paddingBottom: '2em'}}>
        <Card sx={{width: 'fit-content', transform: window.innerWidth >= 1200 ? 'translateY(-81px)' : ''}}>
          <CardContent sx={{marginTop: '0.5em', display: 'flex', flexDirection: 'column'}}>
            <Typography variant='h6' sx={{textAlign: 'center', marginBottom: '1em'}}>Please fill out your
              profile:</Typography>
            <Box>
              <TextField value={formState.firstName} error={formState.firstNameError} variant='outlined'
                         id='registerFirstNameInput' label='First Name'
                         sx={{marginBottom: '1em', marginRight: '1em', ...nameBoxWidthStyle}}
                         onChange={event => setFormValue('firstName', event)}/>
              <TextField value={formState.lastName} error={formState.lastNameError} id='registerLastNameInput'
                         label='Last Name' onChange={event => setFormValue('lastName', event)}
                         sx={{marginBottom: '1em', ...nameBoxWidthStyle}}/>
            </Box>
            <TextField value={formState.phone} sx={{width: '100%', marginBottom: '1em'}}
                       id='registerPhoneNumberInput' type='tel' label='Phone Number'
                       onChange={event => setFormValue('phone', event)}/>
            <TextField value={formState.email} error={formState.emailError} sx={{width: '100%', marginBottom: '1em'}}
                       id='registerEmailInput' label='Email Address' onChange={event => setFormValue('email', event)}/>
            <TextField value={formState.university} error={formState.universityError}
                       sx={{width: '100%', marginBottom: '1em'}} id='registerUniversityInput' label='University'
                       onChange={event => setFormValue('university', event)}/>
            <TextField value={formState.program} error={formState.programError}
                       sx={{width: '100%', marginBottom: '1em'}} id='registerProgramInput' label='Program'
                       onChange={event => setFormValue('program', event)}/>
            <DropZone className={formState.fileError ? 'DropZoneError' : ''} children={resumeUploadName}
                      onDrop={(file) => setFile(file)}/>
            {
              formState.file && (
                <Box sx={{display: 'flex', marginTop: '1em'}}>
                  <UploadFileIcon/>
                  <Typography>{formState.file.name}</Typography>
                </Box>
              )
            }
            <Box sx={{justifyContent: 'center', display: 'flex', marginTop: '1em'}}>
              <StandardButton variant='contained' sx={{width: 'fit-content'}} disabled={!submitEnabled}
                              onClick={() => submit()}>Submit</StandardButton>
            </Box>
            <Box sx={{maxWidth: 'fit-content'}}>
              {
                formState.errorSummary.length > 0 &&
                <Typography sx={{marginTop: '1em', color: 'red', width: '100%'}}>{formState.errorSummary}</Typography>
              }
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Box/>
      <Snackbar
        anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
        open={showSnackBar}
        autoHideDuration={5000}
        onClose={() => setSnackBar(false)}
        message='Message sent!'
      >
        <Alert severity={alertStatus} variant="filled">{alertMessage}</Alert>
      </Snackbar>
    </Box>
  )
}