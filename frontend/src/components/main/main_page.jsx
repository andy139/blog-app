import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import BlogList from '../blog/blog_list'
import BlogShow from '../blog/blog_show'
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: '100%',
    },

    bloglist: {      
        textAlign: 'center',
        color: theme.palette.text.secondary,
        // maxWidth: 500,
    },
    blog: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginRight: 20,
        marginTop: 20,
        // width: '100%'
        

    },
}))

function MainPage() {
    const classes = useStyles()


    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Paper className={classes.bloglist}>
                        {' '}
                        <BlogList />
                    </Paper>
                </Grid>

                
                <Grid item xs={8}>
                    <Paper className={classes.blog}>
                        {' '}
                        <BlogShow/>
                        
                      
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default MainPage
