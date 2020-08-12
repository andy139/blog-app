import React, {useState, useEffect, useReducer} from 'react'

import { composeComment } from '../../actions/blog_actions'
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

const mapStateToProps = (state) => {
    if (!state.blog) {
        return {}
    }

    return {
        blog: state.blog.blog,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createComment: (data) => dispatch(composeComment(data)),
    }
}


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'flex-end',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    list: {
        width: '100%',
        maxWidth: '100%',
        overflow: 'auto',
        height: '500px',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
        overflow: 'auto',
    },
}))




function CommentList({blogId, blog, createComment}) {
    const [content, setContent] = useState('');
    const [showStatus, setShow] = useState(false)
    const classes = useStyles()
    const [, forceUpdate] = useReducer((x) => x + 1, 0)


   
    const handleSumbit = () => {
        createComment({
            blogId: blogId,
            content: content,
        }).then(() => {
            forceUpdate()
        })

    };


    const commentList = blog.comments ? blog.comments.map((comment, i) => {

        return (
            <ListItem>
                <ListItemText primary={comment.content} />
            </ListItem>
        )
    }) : []

    return (
        <div>
            <TextField
                id="standard-full-width"
                style={{ marginTop: '2' }}
                placeholder="Add an anonymous comment"
                fullWidth
                onChange={(event) => {
                    setContent(event.target.value)
                }}
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                value={content}
                onClick={()=> setShow(true)}
            />

            {showStatus ? (
                <div className={classes.root}>
                    <Button
                        onClick={() => {
                            setShow(false)
                        }}
                    >
                        CANCEL
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            handleSumbit()
                            setContent('')
                        }}
                        disabled={content.length < 1}
                    >
                        COMMENT
                    </Button>
                </div>
            ) : null}
      
            <List className={classes.list}>{commentList}</List>
        </div>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(CommentList);
