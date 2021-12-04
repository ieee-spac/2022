import {ref, uploadBytes} from "firebase/storage";

export async function submitProfile(props) {
  const {formState, setSubmitEnabled, setFormState, setResumeWarning} = props;

  let newFormState = {...formState};
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
  newFormState.universityError = formState.university === '';
  if (newFormState.universityError) {
    missingFields.push("University");
  }
  newFormState.programError = formState.program === '';
  if (newFormState.programError) {
    missingFields.push("Program");
  }
  if (missingFields.length === 0) {
    newFormState.errorSummary = '';
    setFormState(newFormState);
    if (newFormState.file === null) {
      setResumeWarning(true);
      return;
    }
  }

  if (missingFields.length > 0) {
    newFormState.errorSummary = 'Missing required fields: ' + missingFields.join(', ');
    setFormState(newFormState);
    setSubmitEnabled(true);
    return;
  }
  await sendRequests(props);
}

export async function sendRequests(props) {
  const {formState, setFormState, storage, setSubmitEnabled, setAlertStatus, setAlertMessage, setSnackBar} = props;

  const fileExists = formState.file !== null;
  const resumeName = fileExists ? `${formState.firstName} ${formState.lastName} Resume ${new Date().getTime()}.${formState.file.name.split('.').pop()}` : '';
  const resumeUrlExtension = fileExists ? `&entry.313681289=${resumeName}` : '';
  const url = `https://docs.google.com/forms/d/e/1FAIpQLSeC1S4P6502-owLUSa9GdFe8kvgO57JgoI3FIu0Nse5oiLkBw/formResponse?entry.2044201966=${formState.firstName}&entry.2002091112=${formState.lastName}&entry.1852925179=${formState.phone}&entry.730036042=${formState.email}&entry.1023303213=${formState.university}&entry.1138066475=${formState.program}${resumeUrlExtension}`;

  try {
    const results = fileExists ? await Promise.all([
      uploadFile(formState, storage, resumeName),
      postForm(url)
    ]) : await Promise.all([
      postForm(url)
    ]);

    const formResult = fileExists ? results[1] : results[0];

    if (formResult.type === 'opaque') {
      const newFormState = {...formState};
      newFormState.firstName = '';
      newFormState.lastName = '';
      newFormState.phone = '';
      newFormState.email = '';
      newFormState.university = '';
      newFormState.program = '';
      newFormState.file = null;
      setFormState(newFormState);

      setAlertStatus('success');
      setAlertMessage('Success!');
      setSnackBar(true);
      setSubmitEnabled(true);
    } else {
      setAlertStatus('error');
      setAlertMessage('Error: Failed to upload resume');
      setSnackBar(true);
      setSubmitEnabled(true);
    }
  } catch (error) {
    setAlertStatus('error');
    setAlertMessage('Error: Failed to upload resume');
    setSnackBar(true);
    setSubmitEnabled(true);
  }
}

async function uploadFile(formState, storage, resumeName) {
  const resumePath = `resumes/${resumeName}`;
  const resumeRef = ref(storage, resumePath);
  return await uploadBytes(resumeRef, formState.file);
}

async function postForm(url) {
  return await fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}