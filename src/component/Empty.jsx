import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';

export default function Empty() {
  return (
   <div className='emptycard'>
     <Card sx={{ maxWidth: 700 }} className='cart'>
     
     <CardContent>
       <Typography gutterBottom variant="h5" component="div" >
         card is empty ! please shopping continue....
       </Typography>
      
     </CardContent>
   </Card>
   </div>
  );
}