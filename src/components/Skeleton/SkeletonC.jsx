import React from 'react';
import Grid from '@mui/material/Grid';
import { Skeleton } from '@mui/material';

const SkeletonC = () => {
  return (
    <div style={{ width: '95vw', margin: '3em auto' }}>
      <Grid
        container
        justifyContent={'center'}
        alignItems={'center'}
        spacing={2}
      >
        <Grid item>
          <Skeleton variant="rectangular" width={350} height={300} />
        </Grid>
        <Grid item>
          <Skeleton variant="rectangular" width={350} height={300} />
        </Grid>
        <Grid item>
          <Skeleton variant="rectangular" width={350} height={300} />
        </Grid>
        <Grid item>
          <Skeleton variant="rectangular" width={350} height={300} />
        </Grid>
      </Grid>
    </div>
  );
};

export default SkeletonC;
