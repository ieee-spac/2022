import {Box, Card, CardContent, TextField, Typography} from "@mui/material";
import {StandardButton} from "./util";

export default function Contact() {
  return (
    <Box sx={{paddingTop: '2em'}}>
        <Typography variant='h4'>How can we help you?</Typography>
      <Box sx={{display: 'flex', justifyContent: 'center', marginTop: '2em', marginBottom: '2em'}}>
        <Card sx={{width: 'fit-content'}}>
          <CardContent sx={{marginTop: '0.5em', display: 'flex', flexDirection: 'column'}}>
            <Typography variant='h6' sx={{textAlign: 'center', marginBottom: '1em'}}>Contact Us</Typography>
            <Box sx={{marginBottom: '1em'}}>
              <TextField variant='outlined' id='contactFirstNameInput' label='First Name' sx={{marginRight: '1em'}}/>
              <TextField id='contactLastNameInput' label='Last Name'/>
            </Box>
            <TextField sx={{width: '100%', marginBottom: '1em'}} id='contactEmailInput' label='Email Address'/>
            <TextField sx={{width: '100%', marginBottom: '1em'}} id='contactMessageInput' label='Message' multiline/>
            <Box sx={{justifyContent: 'center', display: 'flex', marginTop: '1em'}}>
              <StandardButton variant='contained' sx={{width: 'fit-content'}}>Submit</StandardButton>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  )
}