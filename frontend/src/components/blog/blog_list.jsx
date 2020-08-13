import React, { useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'
import Typography from '@material-ui/core/Typography'
import BlogCreate from './blog_create'
import Avatar from '@material-ui/core/Avatar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

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
            const blogId = data.blogs.data.blogs.length > 0 ? data.blogs.data.blogs[0].id : null
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
    }

    if (!blogs) return null

    const blogList = blogs.map((blog, i) => {
        return (
            <Tab
                label={
                    <div className={classes.tabSpacing}>
                        <Typography
                            component="span"
                            variant="h7"
                            className={classes.inline}
                            color="textPrimary"
                            style={{ marginLeft: '15px' }}
                        >
                            {blog.title}
                        </Typography>

                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                            style={{ marginRight: '15px' }}
                        >
                            <Avatar
                                color="primary"
                            
                                className={classes.blue}
                            >
                                {blog.comments ? blog.comments.length : 0}
                            </Avatar>
                        </Typography>
                    </div>
                }
                fullWidth={true}
                onClick={() => {
                    setCurrBlogId(blog.id)
                }}
            >
                {' '}
            </Tab>
        )
    })

    return (
        <div className={classes.root}>
            <Tabs
                indicatorColor="primary"
                orientation="vertical"
                variant="fullWidth"
                value={selectedIndex}
                onChange={handleListItemClick}
                aria-label="Vertical tabs example"
                className={classes.tabs}
                scrollButtons="on"
                TabIndicatorProps={{ className: classes.indicator }}
            >
                {blogList}
            </Tabs>

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
                <BlogCreate
                    handleClose={handleClose}
                    setSelectedIndex={setSelectedIndex}
                />
            </Modal>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        padding: 0,
        marginTop: 10,
        height: '92vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    indicator: {
        height: '300px',
        width: '20px',
        left: 0,
    },
    bottomDiv: {
        textAlign: 'right',
    },
    list: {
        padding: 0,
        height: '50vh',
    },
    tabSpacing: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
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
    tabs: {
        width: '100%',

        borderRight: `1px solid ${theme.palette.divider}`,
    },
    blue: {
        color: 'white',
        width: 22,
        border: `2px solid ${theme.palette.background.paper}`,
         padding: 2,
        height: 22,
        fontSize: 16,
        backgroundColor: '#2196f3',
    },
}))

export default connect(mapStateToProps, mapDispatchToProps)(BlogList)
