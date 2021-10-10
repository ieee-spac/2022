import {useEffect, useState} from "react";
import {Box, styled, Typography} from "@mui/material";

const spacStart = new Date('January 20, 2022 18:00:00 EST');

const CountdownContainer = styled(Box)({
  backgroundColor: 'rgba(255, 255, 255, 0.65)',
  display: 'flex',
  flexDirection: 'column',
  width: 'max-content',
  alignSelf: 'center',
  borderRadius: '4px',
  paddingTop: '1rem',
  paddingBottom: '1rem'
});

const CountdownText = styled(Typography)({
  width: '6rem',
  textAlign: 'center'
});

export default function Countdown() {
  const [seconds, setSeconds] = useState(Math.round((spacStart.getTime() - Date.now()) / 1000));

  useEffect(() => {
    setTimeout(() => {
      setSeconds(seconds - 1);
    }, 1000)
  }, [seconds]);

  return (
    <CountdownContainer>
      <Box sx={{display: 'flex', marginBottom: '0.5rem'}}>
        <CountdownText variant='h6'>{getDays(seconds)}</CountdownText>
        <CountdownText variant='h6'>{getHours(seconds)}</CountdownText>
        <CountdownText variant='h6'>{getMinutes(seconds)}</CountdownText>
        <CountdownText variant='h6'>{getSeconds(seconds)}</CountdownText>
      </Box>
      <Box sx={{display: 'flex'}}>
        <CountdownText>days</CountdownText>
        <CountdownText>hrs</CountdownText>
        <CountdownText>min</CountdownText>
        <CountdownText>sec</CountdownText>
      </Box>
    </CountdownContainer>
  );
}

function getDays(seconds) {
  let days = Math.floor(seconds / (3600 * 24));
  if (days < 10) {
    days = '0' + days;
  }
  return days;
}

function getHours(seconds) {
  let hours = Math.floor(seconds % (3600 * 24) / 3600);
  if (hours < 10) {
    hours = '0' + hours;
  }
  return hours;
}

function getMinutes(seconds) {
  let min = Math.floor(seconds % 3600 / 60);
  if (min < 10) {
    min = '0' + min;
  }
  return min;
}

function getSeconds(seconds) {
  let sec = Math.floor(seconds % 60);
  if (sec < 10) {
    sec = '0' + sec;
  }
  return sec;
}