import React, { useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'
import CommentList from '../comment/comment_list'
import { connect } from 'react-redux'
import { fetchBlog } from '../../actions/blog_actions'

const mapStateToProps = (state) => {
    return {
        blog: state.blog,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBlog: (id) => dispatch(fetchBlog(id)),
    }
}

function BlogShow({ currBlogId, fetchBlog, blog}) {
    useEffect(() => {
        if (currBlogId) fetchBlog(currBlogId)
    }, [currBlogId])

    if (!blog) return null;

    return (
        <>
            <Container style={{ width: '80%', height: '85vh' }}>
                <div
                    style={{
                        height: '100%',
                        textAlign: 'left',
                        paddingTop: '10px',
                    }}
                >
                    <Typography
                        component="div"
                        variant="h5"
                        color="textPrimary"
                        style={{
                            marginBottom: '10px',
                            marginTop: '10px',
                        }}
                    >
                        {blog.title}
                    </Typography>

                        <Typography
                            component="div"
                            variant="h7"
                            style={{ marginTop: 150 }}
                            color="textPrimary"
                            style={{
                                marginBottom: '10px',
                                marginTop: '10px',
                            }}
                        >
                            {blog.content}
                        </Typography>     
                    <Divider />
                    <CommentList blogId={blog.id} />
                </div>
            </Container>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogShow)
