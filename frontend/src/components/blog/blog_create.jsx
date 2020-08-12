import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import { composeBlog } from '../../actions/blog_actions'


function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        position: 'absolute',
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    }
}


const mapStateToProps = (state) => {
    if (!state.new) {
        return {}
    }

    return {
        blogs: Object.values(state.new.blog),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        composeBlog: data => dispatch(composeBlog(data)),
    }
}



function BlogCreate({ handleClose, composeBlog }) {
    
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const handleSubmit = () => {
        composeBlog({
            title: title,
            content: content,
        })
        handleClose()
    }

    const classes = useStyles()
    return (
        <div style={getModalStyle()} className={classes.modal}>
            <div>
                <TextField
                    label="Title"
                    id="outlined-margin-none"
                    defaultValue=""
                    className={classes.textField}
                    onChange={(event) => {
                        setTitle(event.target.value)
                       
                    }}
                    placeholder="Type Body Here"
                    variant="outlined"
                    value={title}
                />
                <TextField
                    id="outlined-full-width"
                    label="Body"
                    style={{ margin: 8, marginTop: 20 }}
                    // placeholder="Type Body Here"
                    fullWidth
                    onChange={(event) => {

                        setContent(event.target.value)
                    }}
                    margin="normal"
                    value={content}
                   
                    variant="outlined"
                />
            </div>

            <div className={classes.root}>
                <Button color="secondary" onClick={() => handleClose()}>
                    CANCEL
                </Button>
                <Button color="primary" onClick={() => {
                    handleSubmit()

                }}>SAVE</Button>
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    modal: {
        position: 'absolute',
        width: '40%',
        height: '60%',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 3.2,
        paddingBottom: '10px',
        outline: 'none',
        borderRadius: '4px',
        display: 'flex',
        flexDirection:'column',
        justifyContent:'space-between'
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '30ch',
        marginTop: '50px',
    },
    root: {
        height: '50px',
        display:'flex',
        justifyContent: 'flex-end',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}))

export default connect(mapStateToProps,mapDispatchToProps)(BlogCreate)
