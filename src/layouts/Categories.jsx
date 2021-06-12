import React from 'react'
import { Search, Grid,Segment } from 'semantic-ui-react'




const SegmentExamplePlaceholderGrid  = () => ( 
  
      <Segment placeholder>
  <Grid stackable textAlignfixed = 'center'>
      <Grid.Column width={24} >
        <Search  placeholder='Şehir seç...' />
      </Grid.Column>
  </Grid>

  <Grid  stackable textAlignfixed = 'center'>
      <Grid.Column width={24}>
        <Search  placeholder='Pozisyon seç...' />
      </Grid.Column>
  </Grid>

</Segment>
 
  )

export default SegmentExamplePlaceholderGrid





   
    
   
  

