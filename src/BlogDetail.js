import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { delBlog } from './blogSlice';
import { useDispatch } from 'react-redux';

const BlogDetail = ({blog}) => {
    const dispatch = useDispatch()

    const deleteNote = (id) => {
        fetch('http://localhost:8000/posts/' + id, { method: 'DELETE' })
            .then(() => dispatch(delBlog(id)));

    }
    return ( 
        <Card >    
             <CardHeader
              title={blog.author}
              subheader={blog.title}
              />
        
             <CardContent>
                <Typography variant="body2" color="text.secondary">
                         {blog.body}
                </Typography>
            </CardContent>
            <CardActions>
            <Button size="small" variant="contained" onClick={() => deleteNote(blog.id)}>Delete</Button>
           </CardActions>
      </Card>       
      );
}
 
export default BlogDetail;