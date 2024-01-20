import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardHeader, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function ModelCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
        <CardHeader
        action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
        title="Christina"
        subheader="September 14, 2016"
      />
      <CardMedia
        sx={{ height: 140 }}
        image="/christina_ai.jpg"
        title="christina"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Description
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Christina, a cutting-edge AI model, revolutionizes artificial 
            intelligence through superior natural language comprehension and 
            inventive problem-solving, showcasing a human-like cognitive prowess across various domains.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" style={{ marginLeft: 'auto' }}>Buy</Button>
      </CardActions>
    </Card>
  );
}