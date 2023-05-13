import { FormControl , Container, TextField, Button} from '@mui/material';
import React from 'react'
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const FormComponent = ({addTodo}) => {
  const handleSubmit=(e)=>{ 
    e.preventDefault();
    addTodo();
  }
  return (
    <Container maxWidth="sm">
        <form onSubmit={handleSubmit}>
            <FormControl fullWidth={true}>
                <TextField label=" Add ToDo here" required={true}/>
                <Button variant="outlined" style={{marginTop:5} } type="submitnpm">Add task todo</Button>
                
                
            
            </FormControl>
        </form>
    </Container>
  )
}

export default FormComponent


