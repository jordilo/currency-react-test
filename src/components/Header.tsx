import { AppBar, ListItem, List, Toolbar, Container, Typography, } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React, { useContext } from "react";
import PaidTwoToneIcon from '@mui/icons-material/PaidTwoTone';
import { UserContext } from "../context/userCtx";
import { Link } from "react-router-dom";

export function Header() {

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const user = useContext(UserContext);

    return <AppBar position="static" component="nav">
        <Container>


            <Grid container alignItems={'center'} spacing={2}>
                <Toolbar disableGutters>
                    <PaidTwoToneIcon fontSize={"large"} />
                    {user.isLogged ? <>Hello {user.name} !</> : null}

                </Toolbar>
                <List >
                    <ListItem style={{ display: 'inline' }}><Link to="/" ><Typography style={{ color: "white", display: 'inline' }}>Home</Typography></Link></ListItem  >
                    <ListItem style={{ display: 'inline' }}><Link to="/profile" ><Typography style={{ color: "white", display: 'inline' }}>Profile</Typography></Link></ListItem  >
                </List >
            </Grid>
        </Container>
    </AppBar >
}