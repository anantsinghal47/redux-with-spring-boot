import logo from './logo.svg';
import './App.css';
import { Box, Button, List, ListItem, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCompanies, getCompanies } from './redux/slices/user';
import { useEffect, useLayoutEffect } from 'react';
import Cart from './Cart';


function App() {

  const dispatch = useDispatch();
  const companies = useSelector(getCompanies);
  console.log("companies from start", companies);

  useEffect(() => {
  }, [companies]);


  const handleFetchCompanies = () => {
    dispatch(fetchCompanies());
  }
  return (
    <div className="App">
      <Button onClick={handleFetchCompanies}>
        Fetch Companies
      </Button>

      <List>
        {
          companies?.map((item, index) => (
            <ListItem key={index}>

              <Box sx={{ display: 'block' }}>
                <Typography>Company Name : {item.companyName} </Typography>
                <Typography>Company Owner : {item.companyOwner} </Typography>
              </Box>

            </ListItem>
          ))
        }
      </List>

      <Cart></Cart>
    </div>
  );
}

export default App;
