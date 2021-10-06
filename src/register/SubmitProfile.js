import {ref, uploadBytes} from "firebase/storage";

export async function submitProfile(props) {
  const {formState, storage, setSubmitEnabled, setAlertStatus, setAlertMessage, setSnackBar, setFormState} = props;

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
    setSubmitEnabled(true);
  } else {
    newFormState.errorSummary = '';

    const resumeName = `${newFormState.firstName} ${newFormState.lastName} Resume ${new Date().getTime()}.${newFormState.file.name.split('.').pop()}`;
    const resumePath = `resumes/${resumeName}`;
    const resumeRef = ref(storage, resumePath);

    try {
      await uploadBytes(resumeRef, newFormState.file);

      const url = `https://docs.google.com/forms/d/e/1FAIpQLScdFwEc7scZ-HbtBrcHv9MnEHeGKwEdUCumc8oZht9dydPkyA/formResponse?entry.509145449=${formState.firstName}&entry.527675740=${formState.lastName}&entry.1088293976=${formState.phone}&entry.1396694674=${formState.email}&entry.513597798=${formState.university}&entry.1760655465=${formState.program}&entry.69468430=${resumeName}`;
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
        newFormState.phone = '';
        newFormState.email = '';
        newFormState.university = '';
        newFormState.program = '';
        newFormState.file = '';

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

  setFormState(newFormState);
}