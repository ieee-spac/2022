import {Alert, Box, Card, CardContent, Snackbar, TextField, Typography} from "@mui/material";
import {StandardButton} from "./util";
import {useState} from "react";

export default function Contact() {
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

  async function submitContactForm() {
    const newFormState = {...formState};
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
      newFormState.errorSummary = 'Missing fields: ' + missingFields.join(', ');
    } else {
      newFormState.errorSummary = '';
      const url = `https://docs.google.com/forms/u/0/d/e/1FAIpQLSeLxd7QRsBkv3pZrNpiXIjLCRyF_T2duSwT7AcQiaMNqnvS9g/formResponse?entry.410070190=${formState.firstName}&entry.1246663423=${formState.lastName}&entry.1530865124=${formState.email}&entry.129369525=${formState.message}`;
      const result = await fetch(url, {
        method: 'GET',
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
    }
    setFormState(newFormState);
  }

  function setFormValue(field, event) {
    const newFormState = {...formState};
    newFormState[field] = event.target.value;
    setFormState(newFormState);
  }

  return (
    <Box sx={{paddingTop: '2em'}}>
      <Typography variant='h4'>How can we help you?</Typography>
      <Box sx={{display: 'flex', justifyContent: 'center', marginTop: '2em', marginBottom: '2em'}}>
        <Card sx={{width: 'fit-content'}}>
          <CardContent sx={{marginTop: '0.5em', display: 'flex', flexDirection: 'column'}}>
            <Typography variant='h6' sx={{textAlign: 'center', marginBottom: '1em'}}>Contact Us</Typography>
            <Box sx={{marginBottom: '1em'}}>
              <TextField value={formState.firstName} onChange={event => setFormValue('firstName', event)}
                         error={formState.firstNameError} variant='outlined' id='contactFirstNameInput'
                         label='First Name' sx={{marginRight: '1em'}}/>
              <TextField value={formState.lastName} onChange={event => setFormValue('lastName', event)}
                         error={formState.lastNameError} id='contactLastNameInput' label='Last Name'/>
            </Box>
            <TextField value={formState.email} onChange={event => setFormValue('email', event)}
                       error={formState.emailError} sx={{width: '100%', marginBottom: '1em'}} id='contactEmailInput'
                       label='Email Address'/>
            <TextField value={formState.message} onChange={event => setFormValue('message', event)}
                       error={formState.messageError} sx={{width: '100%', marginBottom: '1em'}} id='contactMessageInput'
                       label='Message' multiline/>
            <Box sx={{justifyContent: 'center', display: 'flex', marginTop: '1em'}}>
              <StandardButton variant='contained' sx={{width: 'fit-content'}}
                              onClick={() => submitContactForm()}>Submit</StandardButton>
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