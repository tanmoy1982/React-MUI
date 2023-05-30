import { useState } from "react";
import { Typography,TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addBlog } from "./blogSlice";
import { useHistory } from 'react-router-dom';

const CreateBlog = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [author, setAuthor] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const formData = (e) => {
          e.preventDefault();
          console.log(author)

    fetch('http://localhost:8000/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ author,title,body })
          })
    .then(data => { 
        dispatch(addBlog({ author,title,body }))
        setAuthor('')
        setTitle('')
        setBody('')
        history.push('/')
    });
    }
    return ( 
    <div className="create">
        
        <form onSubmit={formData}>
        <Typography sx={{ color:"warning.main"}} variant="h5">Enter Blog Detail</Typography>
        <TextField  label="Author" variant="outlined"  sx={{ marginBottom:1}} size="small" 
        required value={author} onChange={((e) => setAuthor(e.target.value))}/>
        <br /><br/>
        <TextField  label="Title" variant="outlined"   size="small" sx={{ marginBottom:1}} 
        required value={title} onChange={((e) => setTitle(e.target.value))}/>
        <br /><br />
        <TextField variant="outlined" label="Body" multiline rows={4} sx={{ marginBottom:1}} size="small" 
         value={body} onChange={((e) => setBody(e.target.value))} required/>
        <br /><br />
        <Button variant="contained" type="submit">Submit</Button>
        </form>
    </div> );
}
 
export default CreateBlog;