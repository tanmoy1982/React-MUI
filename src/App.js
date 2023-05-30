import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import './App.css';
import CreateBlog from './Create';
import Blogs from './Blogs';


function App() {
  return (
    <Router>
    <div className="container">
      <nav className='nav'>
        <div className='title'><div><Typography variant='h6' sx={{ border : '5px solid red',borderRadius: 2,padding:1,color:"common.white"}}>
          BLOG PAGE</Typography></div>
        </div>
        <div className='navigation'>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button component={Link} to='/'>Home</Button>
            <Button  component={Link} to='/create'>New Blog</Button>
         </ButtonGroup>
        </div>
      </nav>
      <Switch>
        <Route path='/' exact>{<Blogs />}</Route>
        <Route path='/create'>{<CreateBlog />}</Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
