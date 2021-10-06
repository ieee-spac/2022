import {Accordion, AccordionDetails, AccordionSummary, Box, Typography, styled} from "@mui/material";
import {questionData} from "./Questions";
import {useState} from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {theme} from "../util";

const QuestionAccordion = styled(Accordion)(() => ({
  marginBottom: '1em',
  borderRadius: '3px',
  '&:hover': {
    background: 'rgb(240, 240, 240)'
  },
  '&:before': {
    backgroundColor: 'unset'
  }
}));

function QuestionAnswer({questionData, id, expanded, handleChange}) {
  return (
    <QuestionAccordion expanded={expanded === id} onChange={handleChange(id)}>
      <AccordionSummary sx={{borderLeft: `6px solid ${theme.palette.secondary.main}`, borderTopLeftRadius: '3px', borderBottomLeftRadius: expanded === id ? '0px' : '3px'}}
                        expandIcon={<ExpandMoreIcon color='secondary'/>}
                        aria-controls={"question " + id}
                        id={id}
      >
        <Typography variant='h5'>
          {questionData.q}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{borderLeft: `6px solid ${theme.palette['tertiary'].main}`, borderBottomLeftRadius: '3px'}}>
        <Typography>
          {questionData.a}
        </Typography>
      </AccordionDetails>
    </QuestionAccordion>
  );
}

export default function FAQ() {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box>
      <Typography variant='h4'>FAQ</Typography>
      {
        questionData.map((question, index) => {
          return <QuestionAnswer key={index} questionData={question} id={index} expanded={expanded}
                                 handleChange={handleChange}/>
        })
      }
    </Box>
  )
}