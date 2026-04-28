import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { useEffect } from 'react';
import { ListItem, ListItemButton } from '@mui/material';
import { useNavigate } from 'react-router';
import { useJokeStore } from '../../store/use-jokes-store';


export const NavBar = () => {

  const { categories, getCategoriesList} = useJokeStore()
  const navigate = useNavigate()

  useEffect(() => {
    getCategoriesList();
  },[])

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" >
      <List>
        {
          categories.map((category) => (
            <ListItem key={category}>
              <ListItemButton onClick={() => navigate(`/${category}`)}>
                {category}
              </ListItemButton>
            </ListItem>
          ))
        }
      </List>

    </Box>
  );

  return (
    <div>
      <Drawer open variant='permanent'>
        {DrawerList}
      </Drawer>
    </div>
  );
}