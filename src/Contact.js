import {Alert, Box, Card, CardContent, Snackbar, TextField, Typography} from "@mui/material";
import {BlueButton, Discord, RequiredField} from "./Util";
import {useState} from "react";
import {isMobile} from "react-device-detect";

export default function Contact({isPortrait}) {
  const [formState, setFormState] = useState({
    firstName: '',
    firstNameError: false,
    lastName: '',
    lastNameError: false,
    email: '',
    emailError: false,
    message: '',
    messageError: false,
    errorSummary: ''
  });
  const [showSnackBar, setShowSnackBar] = useState(false);
  const [submitEnabled, setSubmitEnabled] = useState(true);

  const nameBoxWidthStyle = isMobile && isPortrait ? {width: '100%'} : {};

  async function submitContactForm() {
    const newFormState = {...formState};
    setSubmitEnabled(false);

    const missingFields = [];
    newFormState.firstNameError = formState.firstName === '';
    if (newFormState.firstNameError) {
      missingFields.push("First Name");
    }
    newFormState.lastNameError = formState.lastName === '';
    if (newFormState.lastNameError) {
      missingFields.push("Last Name");
    }
    newFormState.emailError = formState.email === '';
    if (newFormState.emailError) {
      missingFields.push("Email Address");
    }
    newFormState.messageError = formState.message === '';
    if (newFormState.messageError) {
      missingFields.push("Message");
    }
    if (missingFields.length > 0) {
      newFormState.errorSummary = 'Missing required fields: ' + missingFields.join(', ');
      setSubmitEnabled(true);
    } else {
      newFormState.errorSummary = '';
      const url = `https://docs.google.com/forms/d/e/1FAIpQLSdunnORx9sBYAHgfYXNLvFuL1k4rxV32wqbllfy0-W0EUDVuw/formResponse?entry.432686960=${formState.firstName}&entry.1682272929=${formState.lastName}&entry.1321437761=${formState.email}&entry.1447003292=${formState.message}`;
      const result = await fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      if (result.type === 'opaque') {
        newFormState.firstName = '';
        newFormState.lastName = '';
        newFormState.message = '';
        newFormState.email = '';
        setShowSnackBar(true);
      }
      setSubmitEnabled(true);
    }
    newFormState.buttonEnabled = true;
    setFormState(newFormState);
  }

  function setFormValue(field, event) {
    const newFormState = {...formState};
    newFormState[field] = event.target.value;
    setFormState(newFormState);
  }

  return (
    <Box sx={{pt: '1rem', pb: '2rem'}}>
      <Typography variant='h1'>Contact Us</Typography>
      <Typography variant='h5'>How can we help you?</Typography>
      <Box sx={{display: 'flex', justifyContent: 'center', mt: '2em'}}>
        <Card sx={{width: 'fit-content'}}>
          <CardContent sx={{marginTop: '0.5em', display: 'flex', flexDirection: 'column'}}>
            <Typography variant='h6' sx={{textAlign: 'center', marginBottom: '1em'}}>Contact Us</Typography>
            <Box>
              <TextField value={formState.firstName} onChange={event => setFormValue('firstName', event)}
                         error={formState.firstNameError} variant='outlined' id='contactFirstNameInput'
                         label={RequiredField('First Name')}
                         sx={{marginRight: '1em', marginBottom: '1em', ...nameBoxWidthStyle}}/>
              <TextField value={formState.lastName} onChange={event => setFormValue('lastName', event)}
                         error={formState.lastNameError} id='contactLastNameInput' label={RequiredField('Last Name')}
                         sx={{marginBottom: '1em', ...nameBoxWidthStyle}}/>
            </Box>
            <TextField value={formState.email} onChange={event => setFormValue('email', event)}
                       error={formState.emailError} sx={{width: '100%', marginBottom: '1em'}} id='contactEmailInput'
                       label={RequiredField('Email Address')}/>
            <TextField value={formState.message} onChange={event => setFormValue('message', event)}
                       error={formState.messageError} sx={{width: '100%', marginBottom: '1em'}} id='contactMessageInput'
                       label={RequiredField('Message')} multiline/>
            <Box sx={{justifyContent: 'center', display: 'flex', marginTop: '1em'}}>
              <BlueButton variant='contained' sx={{width: 'fit-content'}} disabled={!submitEnabled}
                          onClick={() => submitContactForm()}>Submit</BlueButton>
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
      <Typography sx={{pt: '1rem'}}>You can also ask questions on our&nbsp;<Discord/>.</Typography>
      <Snackbar
        anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
        open={showSnackBar}
        autoHideDuration={5000}
        onClose={() => setShowSnackBar(false)}
        message='Message sent!'
      >
        <Alert severity='success' variant="filled">Message sent!</Alert>
      </Snackbar>
    </Box>
  )
}
