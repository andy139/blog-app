import React, { useState, useEffect, useReducer, useRef } from 'react'
import { animateScroll } from 'react-scroll'
import moment from 'moment'
import { composeComment } from '../../actions/blog_actions'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import TextField from '@material-ui/core/TextField'

const mapStateToProps = (state) => {
    return {
        blog: state.blog,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createComment: (data) => dispatch(composeComment(data)),
    }
}

function CommentList({ blogId, blog, createComment }) {
    const [content, setContent] = useState('')
    const [showStatus, setShow] = useState(false)
    const classes = useStyles()
    const [, forceUpdate] = useReducer((x) => x + 1, 0)
    const divRef = useRef(null)

    useEffect(() => {
        scrollToBottom()
    })

    const scrollToBottom = () => {
        animateScroll.scrollToBottom({
            containerId: 'scrollDown',
        })
    }

    const handleSumbit = () => {
        createComment({
            blogId: blogId,
            content: content,
        }).then(() => {
            forceUpdate()
        })
    }

    const commentList = blog.comments
        ? blog.comments.map((comment, i) => {
            const date2 = moment(comment.createdAt)
            const formattedDate = date2.format('LT')
              return (
                  <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                          <Avatar />
                      </ListItemAvatar>
                      <ListItemText
                          primary={
                              <span>
                                  <Typography
                                      component="span"
                                      variant="body2"
                                      className={classes.inline}
                                      color="textPrimary"
                                  >
                                      Anonymous
                                  </Typography>
                                  &nbsp;
                                  {formattedDate}
                              </span>
                          }
                          secondary={
                              <React.Fragment>
                                  <Typography
                                      component="span"
                                      variant="body2"
                                      className={classes.inline}
                                      color="textPrimary"
                                  >
                                      {comment.content}
                                  </Typography>
                              </React.Fragment>
                          }
                      />
                  </ListItem>
              )
          })
        : []

    return (
        <div>
            <List className={classes.list} id="scrollDown" ref={divRef}>
                {commentList}
            </List>
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
                onClick={() => setShow(true)}
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
                            scrollToBottom()
                            setContent('')
                        }}
                        onKeyPress={(ev) => {
                            if (ev.ctrlKey && ev.key === 'Enter') {
                                handleSumbit()
                                scrollToBottom()
                                setContent('')
                            }
                        }}
                        disabled={content.trim().length === 0}
                    >
                        COMMENT
                    </Button>
                </div>
            ) : null}
        </div>
    )
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
        height: '50vh',
        marginTop: '20px',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
        overflow: 'auto',
    },
}))

export default connect(mapStateToProps, mapDispatchToProps)(CommentList)
