import React from 'react';
import {AppBar, Button, IconButton, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";

 const Header = () => {
    return (
        <div>
            <AppBar position='static'>

                <Toolbar>
                    <IconButton edge='start' color='inherit' aria-label='menu'>
                        <Menu/>
                    </IconButton>
                    <Typography variant='h6'>
                        Todolist
                    </Typography>
                    <Button color='inherit'>Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

 export default Header;
