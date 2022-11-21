import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Post = ({ userInfo, seed }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <div style={{ textAlign: 'center' }}>
          <img
            src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`}
            alt="Profile Pics"
            width={200}
          />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {userInfo.name.first + ' ' + userInfo.name.last}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Post;
