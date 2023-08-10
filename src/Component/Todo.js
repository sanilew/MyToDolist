import React from 'react'
import { Card,CardContent,Typography,Container,IconButton} from '@mui/material';
import { Check,Delete } from '@mui/icons-material';

const Todo = (props) => {
  return (
    <div>
      <Container>
        <Card variant='outlined' style={{marginTop:35, background:"orange"}}>
            <CardContent>
                <Typography variant='h5'component="h2" >
                    <IconButton>
                        <Check  style={{color:"black"}}/> 
                        { props.key} 
                        { props.title} 
                       
                        <br></br>
                        <br>
                        </br>
                        
                    </IconButton>
                    
                    <IconButton style={{float:"right"}}>
                    <Delete style={{color:"whitesmoke"}} />

                    </IconButton>
                </Typography>
            </CardContent>

        </Card>
      </Container>
    </div>
  )
}

export default Todo
