import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import {sendRequests} from "./SubmitProfile";

export default function ResumeWarning({data}) {
  const {resumeWarning, setResumeWarning, setSubmitEnabled} = data;

  /**Closes the dialog. If proceed is true, user has chosen to submit the form without a resume*/
  async function closeDialog(proceed) {
    setResumeWarning(false);
    if (proceed) {
      await sendRequests(data);
    } else {
      setSubmitEnabled(true);
    }
  }

  return (
    <Dialog open={resumeWarning} onClose={() => closeDialog(false)}>
      <DialogTitle>Register without a resume?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          We encourage everyone to upload their resume in order to fully demonstrate their skills to companies.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => closeDialog(false)}>Back</Button>
        <Button onClick={() => closeDialog(true)}>Confirm</Button>
      </DialogActions>
    </Dialog>
  );
}