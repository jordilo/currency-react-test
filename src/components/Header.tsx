import { AppBar, ListItem, List, Link, Toolbar, Container, Typography, } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import PaidTwoToneIcon from '@mui/icons-material/PaidTwoTone';

export function Header() {

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return <AppBar position="static" component="nav">
        <Container>


            <Grid container alignItems={'center'} spacing={2}>
                <Toolbar disableGutters>
                    <PaidTwoToneIcon fontSize={"large"} />

                </Toolbar>
                <List >
                    <ListItem style={{ display: 'inline' }}><Link href="/" ><Typography style={{ color: "white", display: 'inline' }}>Home</Typography></Link></ListItem  >
                    <ListItem style={{ display: 'inline' }}><Link href="/profile" ><Typography style={{ color: "white", display: 'inline' }}>Profile</Typography></Link></ListItem  >
                </List >
            </Grid>
        </Container>
    </AppBar >
}