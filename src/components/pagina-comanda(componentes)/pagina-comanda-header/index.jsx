import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import {Link} from 'react-router-dom';

import Stack from '@mui/material/Stack';



const pages = ['Sala', 'Terraza', 'Barra'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function PaginaComandaHeader(){

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    // const [paginaSala, setPaginaSala] = React.useState(null);
    // const [paginaTerraza, setPaginaTerraza] = React.useState(null);
    // const [paginaBar, setPaginaBar] = React.useState(null);
    
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {  
        
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
  


    return(
        <header className="header_container">
 
                <AppBar position="static">
                    <Container maxWidth="xm">
                            <Toolbar disableGutters>

                                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                    <IconButton
                                        size="large"
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        onClick={handleOpenNavMenu}
                                        color="inherit">
                                            <MenuIcon />
                                    </IconButton>
                                    <Menu
                                        id="menu-appbar"
                                        anchorEl={anchorElNav}
                                        anchorOrigin={{vertical: 'bottom', horizontal: 'left',}}
                                        keepMounted
                                        transformOrigin={{ vertical: 'top', horizontal: 'left',}}
                                        open={Boolean(anchorElNav)}
                                        onClose={handleCloseNavMenu}
                                        sx={{ display: { xm: 'block', md: 'none' }, }} >

                                                <Stack spacing={3} direction="column">
                                                    <Link to="/mesas_sala">
                                                        <Button onClick={handleCloseNavMenu} variant="contained">
                                                            {pages[0]} 
                                                        </Button>
                                                    </Link>
                                                {/* </Stack>

                                                <Stack spacing={2} direction="row"> */}
                                                    <Link to="/mesas_Terraza">
                                                        <Button onClick={handleCloseNavMenu}  variant="contained">
                                                            {pages[1]}
                                                        </Button>
                                                    </Link>
                                                {/* </Stack>

                                                <Stack spacing={2} direction="row"> */}
                                                    <Link to="/mesas_barra">
                                                        <Button onClick={handleCloseNavMenu}  variant="contained">
                                                                {pages[2]}
                                                        </Button>
                                                    </Link>
                                                </Stack>



                                        
                                    </Menu>
                                </Box>

                                {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}> */}

                                <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex', md: 'flex'  } }}>

                                        <Stack spacing={3} direction="row">
                                            <Link to="/mesas_sala">
                                                <Button variant="contained">Sala</Button>
                                            </Link>
                                        {/* </Stack> */}

                                        {/* <Stack spacing={2} direction="row"> */}
                                            <Link to="/mesas_terraza">
                                                <Button variant="contained">Terraza</Button>
                                            </Link>
                                        {/* </Stack> */}
 
                                        {/* <Stack spacing={2} direction="row"> */}
                                            <Link to="/mesas_barra">
                                                <Button variant="contained">Barra</Button>
                                            </Link>
                                        </Stack>

                                </Box>

                                <Box sx={{ flexGrow: 0 }}>
                                    <Tooltip title="Open settings">
                                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                        </IconButton>
                                    </Tooltip>
                                    <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{ vertical: 'top', horizontal: 'right',}}
                                    keepMounted
                                    transformOrigin={{ vertical: 'top',  horizontal: 'right',}}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu} >
                                        {settings.map((setting) => (
                                            <MenuItem key={setting} onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">{setting}</Typography>
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </Box>
                            </Toolbar>
                    </Container>
                </AppBar> 

        </header>
    )
}