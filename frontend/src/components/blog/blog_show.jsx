import React from 'react'


import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'

import CommentList from '../comment/comment_list'


function BlogShow() {
    return (
        <>
            <Container style={{ width: '80%' }}>
                <Typography
                    component="div"
                    style={{
                        // backgroundColor: '#cfe8fc',
                        height: '90vh',
                        textAlign: 'left',
                        marginTop: '30px',
                    }}
                >
                    <h3>Blog One Title</h3>
                    <h4>Hello this is is the body</h4>

                    <Divider />

                    <CommentList/>

                    
                </Typography>
            </Container>
        </>
    )
}

export default BlogShow
