import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getNotes } from "./blogSlice";
import BlogDetail from "./BlogDetail";
import Grid from '@mui/material/Grid';

const Blogs = () => {
   const blogs =  useSelector((state) => state.blog.value)
   const dispatch = useDispatch()
    
    useEffect(() => {
        fetch('http://localhost:8000/posts')           
             .then(response => response.json())
             .then(data => dispatch(getNotes(data)));
    },[dispatch])

    return ( 
        <Grid container spacing={2}>
        {blogs.length > 0 && blogs.map((blog) => 
        <Grid item xs={12} md={6} lg={4} key={blog.id}>
            
         <BlogDetail  blog={blog}/>
         </Grid>
        )
        }
       </Grid> 
    );
}
 
export default Blogs;