import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import BlogList from '../blog/blog_list'
import BlogShow from '../blog/blog_show'

function MainPage() {
    const classes = useStyles()
    const [currBlogId, setCurrBlogId] = useState(null);

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Paper className={classes.bloglist}>
                        {' '}
                        <BlogList setCurrBlogId={setCurrBlogId}/>
                    </Paper>
                </Grid>
                <Grid item xs={8}>
                    <Paper className={classes.blog}>
                        {' '}
                        <BlogShow currBlogId={currBlogId}/> 
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        
    },
    bloglist: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    blog: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginRight: 20,
        marginTop: 20,
       
    },
}))


export default MainPage
