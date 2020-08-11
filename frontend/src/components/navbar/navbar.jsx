import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        zIndex: 10010,
        backgroundColor: 'white',
    },
    appbar: {
        zIndex: 100010,
        backgroundColor: 'white',
        // marginBottom: 3,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        color: 'black',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
}))

export default function Navbar() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.root}>
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Material-UI
                    </Typography>
                </Toolbar>
            </AppBar>
        
        </div>
    )
}
