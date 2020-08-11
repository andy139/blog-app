import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'

import { connect } from 'react-redux'
import { fetchBlogs } from '../../actions/blog_actions'

const mapStateToProps = (state) => {
    debugger
    if (Object.keys(state).length == 0) {
        return {}
    }

    return {
        blogs: Object.values(state.all.blogs),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBlogs: () => dispatch(fetchBlogs()),
    }
}

function BlogList(props) {
    const classes = useStyles()
    const [selectedIndex, setSelectedIndex] = useState(1)
    const [blogs, setBlogList] = useState([])

    useEffect(() => {
        props.fetchBlogs()
    }, [])

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index)
    }

    if (!props.blogs) return null

    const blogList = props.blogs.map((blog, i) => {
        return (
            <ListItem
                button
                selected={selectedIndex === i}
                onClick={(event) => handleListItemClick(event, i)}
            >
                <ListItemText primary={blog.title} />
            </ListItem>
        )
    })

    return (
        <div className={classes.root}>
            <List className={classes.list}>
                
                {blogList}
                {/* <ListItem
                    button
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                >
                    <ListItemText primary="Trash" />
                </ListItem>
                <ListItem
                    button
                    selected={selectedIndex === 3}
                    onClick={(event) => handleListItemClick(event, 3)}
                >
                    <ListItemText primary="Spam" />
                </ListItem> */}
            </List>
            <Divider />

            {/* Sticky Bottom */}
            <List>
                <ListItem>
                    <ListItemText primary="New Blog" />
                </ListItem>
            </List>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        padding: 0,
        marginTop: 5,
    },
    list: {
        padding: 0,
        minHeight: '90vh',
    },
    grid: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}))

export default connect(mapStateToProps, mapDispatchToProps)(BlogList)
