import React from 'react';
import Grid from '@mui/material/Grid';

import Post from '../Post/Post';

const Posts = ({ items }) => {
  return (
    <div style={{ width: '95vw', margin: '0 auto' }}>
      <Grid
        container
        justifyContent={'center'}
        alignItems={'center'}
        spacing={2}
      >
        {items.map((i, j) => {
          return (
            <Grid item xs={8} sm={6} md={4} lg={3} key={j}>
              <Post userInfo={i} seed={j} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Posts;
