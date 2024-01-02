import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar 
                    sx={{
                        boxShadow: 'none', 
                        left: open ? 300 : 0
                    }} 
                    position="relative" 
                    color="transparent"
                >
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={() => setOpen(prev => !prev)}
                        >
                            <MenuIcon/>
                        </IconButton>

                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            News
                        </Typography>
                    </Toolbar>
                </AppBar>

                <Divider />

                <Drawer
                    transitionDuration={0}
                    hideBackdrop={false}
                    anchor={'left'}
                    open={open}
                    PaperProps={{
                        sx: {
                            background: 'transparent',
                            height: '100vh',
                            width: 300,
                            borderRight: '1px solid rgba(255, 255, 255, 0.12)',
                        }
                    }}
                    slots={{
                        backdrop: null,
                        modal: null
                    }}
                    onClose={() => setOpen(false)}
                >
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => setOpen(false)}
                    >
                        <MenuIcon/>
                    </IconButton>
                    hola
                    {/* <Box 
                        sx={{
                            width: 300,
                            height: '100vh',
                            background: '#000',
                            borderRight: '1px solid rgba(255, 255, 255, 0.12)'
                        }}
                    >
                        {'holi xd'}
                    </Box> */}
                </Drawer>
            </Box>
        </>
    )
}

export {
    Navbar
}