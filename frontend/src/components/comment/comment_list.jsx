import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

function CommentList() {
    return (
        <div>
            <TextField
                id="standard-full-width"
                style={{ marginTop: '2' }}
                placeholder="Add an anonymous comment"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </div>
    )
}

export default CommentList;
