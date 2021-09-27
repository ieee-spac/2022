import {Box, Card, CardContent, styled, TextField, Typography} from "@mui/material";
import {StyledDropZone} from 'react-drop-zone'
import 'react-drop-zone/dist/styles.css'
import {StandardButton, theme} from "./util";
import {useState} from "react";
import UploadFileIcon from '@mui/icons-material/UploadFile';

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
  const [formState, setFormState] = useState({
    firstName: '',
    firstNameError: false,
    lastName: '',
    lastNameError: false,
    phone: '',
    phoneError: false,
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
  const [fileData, setFileData] = useState('');

  function submitRegister() {
    const newFormState = {...formState};
    findMissingFields(newFormState);
    setFormState(newFormState);
  }

  function findMissingFields(newFormState) {
    const missingFields = [];
    newFormState.firstNameError = formState.firstName === '';
    if (newFormState.firstNameError) {
      missingFields.push("First Name");
    }
    newFormState.lastNameError = formState.lastName === '';
    if (newFormState.lastNameError) {
      missingFields.push("Last Name");
    }
    newFormState.phoneError = formState.phone === '';
    if (newFormState.phoneError) {
      missingFields.push("Email Address");
    }
    newFormState.emailError = formState.email === '';
    if (newFormState.emailError) {
      missingFields.push("Email Address");
    }
    newFormState.universityError = formState.university === '';
    if (newFormState.universityError) {
      missingFields.push("University");
    }
    newFormState.programError = formState.program === '';
    if (newFormState.programError) {
      missingFields.push("Program");
    }
    newFormState.fileError = newFormState.file === null;
    if (newFormState.fileError) {
      missingFields.push("Resume");
    }
    if (missingFields.length > 0) {
      newFormState.errorSummary = 'Missing fields: ' + missingFields.join(', ');
    }
    return missingFields;
  }

  function setFile(file, data) {
    const newFormState = {...formState};
    newFormState.file = file;
    newFormState.fileError = false;
    findMissingFields(newFormState);
    setFormState(newFormState);
    setFileData(data);
  }

  function setFormValue(field, event) {
    const newFormState = {...formState};
    newFormState[field] = event.target.value;
    setFormState(newFormState);
  }

  return (
    <Box sx={{paddingTop: '2em', display: 'flex', flexDirection: 'column'}}>
      <Box>
        <Typography variant='h4'>Register</Typography>
        <Typography variant='h5'>Tickets are free!</Typography>
      </Box>
      <Box sx={{display: 'flex', width: '100%', justifyContent: 'center'}}>
        <Card sx={{width: 'fit-content', transform: 'translateY(-81px)'}}>
          <CardContent sx={{marginTop: '0.5em', display: 'flex', flexDirection: 'column'}}>
            <Typography variant='h6' sx={{textAlign: 'center', marginBottom: '1em'}}>Please fill out your
              profile:</Typography>
            <Box sx={{marginBottom: '1em'}}>
              <TextField value={formState.firstName} error={formState.firstNameError} variant='outlined'
                         id='registerFirstNameInput' label='First Name' sx={{marginRight: '1em'}}
                         onChange={event => setFormValue('firstName', event)}/>
              <TextField value={formState.lastName} error={formState.lastNameError} id='registerLastNameInput'
                         label='Last Name' onChange={event => setFormValue('lastName', event)}/>
            </Box>
            <TextField value={formState.phone} error={formState.phoneError} sx={{width: '100%', marginBottom: '1em'}}
                       id='registerPhoneNumberInput' type='tel' label='Phone Number' onChange={event => setFormValue('phone', event)}/>
            <TextField value={formState.email} error={formState.emailError} sx={{width: '100%', marginBottom: '1em'}}
                       id='registerEmailInput' label='Email Address' onChange={event => setFormValue('email', event)}/>
            <TextField value={formState.university} error={formState.universityError}
                       sx={{width: '100%', marginBottom: '1em'}} id='registerUniversityInput' label='University' onChange={event => setFormValue('university', event)}/>
            <TextField value={formState.program} error={formState.programError}
                       sx={{width: '100%', marginBottom: '1em'}} id='registerProgramInput' label='Program' onChange={event => setFormValue('program', event)}/>
            <DropZone className={formState.fileError ? 'DropZoneError' : ''} children='Click or drop your Resume here' onDrop={(file, data) => setFile(file, data)}/>
            {
              formState.file && (
                <Box sx={{display: 'flex', marginTop: '1em'}}>
                  <UploadFileIcon/>
                  <Typography>{formState.file.name}</Typography>
                </Box>
              )
            }
            <Box sx={{justifyContent: 'center', display: 'flex', marginTop: '1em'}}>
              <StandardButton variant='contained' sx={{width: 'fit-content'}}
                              onClick={() => submitRegister()}>Submit</StandardButton>
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
    </Box>
  )
}