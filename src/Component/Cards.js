import React from 'react';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Cards = () => {
  return (

    <Card sx={{
      backgroundColor: 'lightblue',
      width: 320,
      height: 200,
      borderRadius: 2,
      textAlign: 'center'
    }}
    >
      <CardContent>
        <RocketLaunchOutlinedIcon sx={{
          fontSize: 35,
          color: 'blue'
        }} />
        <Typography sx={{
          fontSize: 18,
          fontWeight: 'bold',
          padding: 1
        }}>
          Upgrade Account
        </Typography>
        <Typography sx={{ fontSize: 14, paddingBlockEnd: 1.5 }}>Access to the Unlimited Transcription</Typography>
        <Button type="submit" variant="contained"
          sx={{
            width: 280,
            height: 40,
            margin: 'auto',
          }}
        >
          Upgrade
        </Button>
      </CardContent>
    </Card>


  );
};

export default Cards;