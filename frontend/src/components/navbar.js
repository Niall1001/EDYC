import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from "react-router-dom";

const pages = [
  {
  name: 'Our Club',
  url: "/our-club"
  },
  {
  name: 'Events',
  url: "/events"
  },
  {
  name: 'Membership',
  url: "/membership"
  },
  {
  name: 'Contact',
  url: "/contact"
  },
  {
  name: 'On The Water',
  url: "/on-the-water"
  },
  {
  name: 'Sailing schools info',
  url: "/sailing-school"
  }];

const Navbar = () => {
const [anchorElNav, setAnchorElNav] = React.useState(null);

const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

	return (
		<AppBar position="static" style={{ background: '#FFFFFF' }} elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            style={{ color: '#0000FF' }}
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              style={{ color: '#0000FF' }}
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon style={{ color: '#0000FF' }}/>
            </IconButton>
            <Menu
              style={{ color: '#0000FF' }}
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map(({name, url}) => (
                <MenuItem key={name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            style={{ color: '#0000FF' }}
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>
          <Box className = "nav" style={{ color: '#0000FF' }} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map(({name, url}) => (
              <Button
                style={{ color: '#0000FF'}}
                key={name}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <NavLink to={url}>{name}</NavLink>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
	);
}
export default Navbar;