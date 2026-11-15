

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { useLocation } from "react-router";

const topNavLinks = [
    { label: 'Home', href: '/', id: 'home' },
    { label: 'Our Org', href: '#', id: 'our-org' },
    { label: 'What We Do', href: '#', id: 'what-we-do' },
    { label: 'Winning Work', href: '#', id: 'winning-work' },
    { label: "Projects", href: "/projects", id: "projects" },
    { label: "Proposals", href: "/proposal", id: "proposals" },
    { label: 'Collab & Community', href: '#', id: 'collab-community' },
    { label: 'Benefits & Comp', href: '#', id: 'benefits-comp' },
    { label: 'Careers', href: '#', id: 'careers' },
    { label: 'News', href: '/highlights', id: 'news' },
];

// Custom breakpoint: mobile = 768px and below
const MOBILE = '@media (max-width:768px)';
const DESKTOP = '@media (min-width:769px)';

export default function NavHeader() {
    const location = useLocation();
    const currentPath = location.pathname;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

    return (
        <header>
            {/* Banner row: hamburger (mobile only) + logo on the left, search on the right */}
            <Box
                sx={{
                    maxWidth: '1300px',
                    width: '100%',
                    mx: 'auto',
                    px: 1,
                    py: 0.5,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    boxSizing: 'border-box',
                    minHeight: '25px'
                }}

            >


                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {/* Hamburger: only visible at 768px and below */}
                    <IconButton
                        size="medium"
                        aria-label="open navigation menu"
                        aria-expanded={mobileOpen}
                        onClick={handleDrawerToggle}
                        sx={{
                            display: 'none',
                            [MOBILE]: { display: 'inline-flex' },
                            color: '#003366',
                            p: 0.5,
                        }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Link href="/" sx={{ display: 'block', textDecoration: 'none' }}>
                        <img src="/csra-banner.png" alt="CSRA Banner" style={{ width: 'auto' }} />
                    </Link>

                </Box>
                <div className="desksearch" >
                    <input
                        type="search"
                        name="search"
                        id="search"
                        className="searchbox"
                        placeholder="Search"
                        aria-label="Search"
                        size={20}
                    />
                    <img
                        src="/searchicon.png"
                        width="28"
                        height="28"
                        alt="Search Icon"
                        className="desksearch-icon"
                        style={{ position: 'relative', display: 'flex' }}
                    />
                </div>

            </Box>

            {/* Drawer (portal, so it's fine to render anywhere) */}
            <Drawer
                anchor="left"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{
                    display: 'none',
                    [MOBILE]: { display: 'block' },
                    '& .MuiDrawer-paper': {
                        width: '280px',
                        boxSizing: 'border-box',
                        backgroundColor: '#ffffff',
                        color: '#003366',
                    },
                }}
            >
                <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
                    <IconButton onClick={handleDrawerToggle} aria-label="close navigation menu" sx={{ color: '#003366' }}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <div className="search" >
                    <input
                        type="search"
                        name="search"
                        id="search"
                        className="searchbox"
                        placeholder="Search"
                        aria-label="Search"
                        size={20}
                    />
                    <img
                        src="/searchicon.png"
                        width="28"
                        height="28"
                        alt="Search Icon"
                        className="search-icon"
                        style={{ position: 'relative' }}
                    />
                </div>
                <List sx={{ pt: 0 }}>
                    {topNavLinks.map((link) => {
                        const isActive = currentPath === link.href;
                        return (
                            <ListItem key={link.id} disablePadding>

                                <ListItemButton
                                    component={Link}
                                    href={link.href}
                                    onClick={handleDrawerToggle}
                                    sx={{
                                        fontSize: '24px',
                                        py: .5,
                                        px: 1,
                                        backgroundColor: isActive ? 'rgba(0, 51, 102, 0.08)' : 'transparent',
                                        '&:hover': { backgroundColor: 'rgba(0, 51, 102, 0.04)' },
                                    }}
                                >
                                    <ListItemText
                                        primary={link.label}
                                        sx={{
                                            '& .MuiListItemText-primary': {
                                                fontWeight: isActive ? 700 : 500,
                                                fontSize: '1rem',
                                                color: '#003366',
                                            },
                                        }}
                                    />
                                </ListItemButton>

                            </ListItem>

                        );
                    })}
                </List>
            </Drawer>

            {/* Desktop nav bar: hidden at 768px and below */}
            <AppBar
                component="nav"
                aria-label="Primary navigation"
                position="static"
                elevation={0}
                sx={{
                    backgroundColor: '#ffffff',
                    color: '#003366',

                    [MOBILE]: { display: 'none' },
                }}
            >
                <Toolbar
                    disableGutters
                    sx={{
                        maxWidth: '1300px',
                        width: '100%',
                        mx: 'auto',
                        px: 1,
                        minHeight: '0',

                        justifyContent: 'space-between',
                    }}
                >
                    <Box
                        sx={{
                            display: 'none',
                            [DESKTOP]: { display: 'flex' },
                            width: '100%',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexWrap: 'nowrap',
                        }}
                    >
                        {topNavLinks.map((link) => {
                            const isActive = currentPath === link.href;
                            return (
                                <Button
                                    key={link.id}
                                    component={Link}
                                    href={link.href}
                                    sx={{
                                        color: '#003366',
                                        textTransform: 'none',
                                        fontWeight: isActive ? 700 : 500,
                                        fontSize: { md: '0.9rem', lg: '1rem' },
                                        whiteSpace: 'nowrap',
                                        minWidth: 'auto',
                                        px: { md: 0.5, lg: 1 },
                                        py: 1,
                                        borderBottom: isActive ? '2px solid #003366' : '2px solid transparent',
                                        borderRadius: 0,
                                        textDecoration: 'none',
                                        '&:hover': {
                                            backgroundColor: 'rgba(0, 51, 102, 0.06)',
                                            borderBottom: '2px solid #003366',
                                        },
                                    }}
                                >
                                    {link.label}
                                </Button>
                            );
                        })}
                    </Box>
                </Toolbar>
            </AppBar>
        </header>
    );
}