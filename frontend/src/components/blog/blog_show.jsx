import React, { useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'
import CommentList from '../comment/comment_list'
import { connect } from 'react-redux'
import { fetchBlog } from '../../actions/blog_actions'

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
        fetchBlog: (id) => dispatch(fetchBlog(id)),
    }
}

function BlogShow({ currBlogId, fetchBlog, blog }) {

    useEffect(() => {
        if (currBlogId)fetchBlog(currBlogId)
    }, [currBlogId])


    if (!blog) return null;

    return (
        <>
            <Container style={{ width: '80%', height:'85vh' }}>
                <Typography
                    component="div"
                    style={{
                        height: '100%',
                        textAlign: 'left',
                        marginTop: '30px',
                    }}
                >
                    <h3>{blog.title}</h3>
                    <h4>{blog.content}</h4>

                    <Divider />

                    <CommentList />
                </Typography>
            </Container>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogShow)
