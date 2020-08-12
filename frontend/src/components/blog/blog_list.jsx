import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'

import BlogCreate from './blog_create'
import { connect } from 'react-redux'
import { fetchBlogs } from '../../actions/blog_actions'

const mapStateToProps = (state) => {
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

function BlogList({ fetchBlogs, blogs, setCurrBlogId }) {
    const classes = useStyles()
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        fetchBlogs().then((data) => {
            //First Blog Id
            const blogId = data.blogs.data.blogs[0].id
            setCurrBlogId(blogId)
        })
    }, [fetchBlogs, setCurrBlogId])


    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleListItemClick = (event, index, blogId) => {
        setSelectedIndex(index)
        setCurrBlogId(blogId)
    }

    if (!blogs) return null

    const blogList = blogs.map((blog, i) => {
        return (
            <ListItem
                button
                selected={selectedIndex === i}
                onClick={(event) => handleListItemClick(event, i, blog.id)}
            >
                <ListItemText primary={blog.title} />
                {blog.comments ? blog.comments.length : 0}
            </ListItem>
        )
    })

    return (
        <div className={classes.root}>
            <List className={classes.list}>{blogList}</List>

            {/* Sticky Bottom */}
            <div className={classes.bottomDiv}>
                <Divider />
                <Button
                    style={{ height: '50px' }}
                    onClick={handleOpen}
                    color="primary"
                >
                    NEW BLOG
                </Button>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <BlogCreate handleClose={handleClose} setSelectedIndex={setSelectedIndex}/>
            </Modal>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        padding: 0,
        marginTop: 5,
        height: '94vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    bottomDiv: {
        textAlign: 'right',
    },
    list: {
        padding: 0,
    },
    grid: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    modal: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        outline: 'none',
    },
}))

export default connect(mapStateToProps, mapDispatchToProps)(BlogList)
