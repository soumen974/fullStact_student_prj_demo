import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Add } from '@mui/icons-material';
import { useState ,useEffect} from 'react';

export default function Student() {
    const [name, setname] = useState('')
    const [address, setAddress] = useState('');
    const [student, setstudent] = useState([]);
    const HandleForm = (e) => {
        e.preventDefault();
        const student = { name,address};
        console.log(student);
      
        fetch("http://localhost:8080/student/add", {
          method: "POST",
          headers: { "Content-Type": "application/json" }, 
          body: JSON.stringify(student),
        })
          .then(() => {
            console.log("New Student added");
          });
      };

      useEffect(()=>{
        fetch("http://localhost:8080/student/getAll")
        .then(res=>res.json())
        .then((result)=>{
          setstudent(result);
        })
      },[])
      
  return (
    <Box
    
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
       <div style={{ display: 'flex', flexDirection:"column",padding:"0 30vw", justifyContent: 'center', alignItems: 'center', height: '30vh', gap: '1rem',  }}>
  
          <h1>Adding Student</h1>

            <TextField
            
            required
            id="outlined-required"
            label="Student Name"
            fullWidth
            value={name}
            onChange={(e)=>setname(e.target.value)}


            />

            <TextField
            required
            id="outlined-required"
            label="Student Address"
            fullWidth
            value={address}
            onChange={(e)=>setAddress(e.target.value)}
            />

            <Button variant="contained" onClick={HandleForm}>Submit</Button>
        
        </div>

        <div>
          {student.map(student=>(
            <div key={student.id}>
            {student.id}.
            Name:{student.name}<br/>
            Address:{student.address}
            <br/><br/>
            </div>
          ))}
        </div>
    </Box>
  );
}