import _ from 'lodash'

import {
    RECEIVE_BLOGS,
    RECEIVE_BLOG,
    RECEIVE_NEW_BLOG,
    RECEIVE_NEW_COMMENT,
} from '../actions/blog_actions'

const sortComments = (comments) => {
    return comments.sort(function compare(a, b) {
        var dateA = new Date(a.createdAt)
        var dateB = new Date(b.createdAt)
        return dateA - dateB
    })
}

const replaceBlogsComments = (newComment, allComments, blogs) => {
    const index = _.findIndex(blogs, {
        id: newComment.blogId,
    })
    blogs[index].comments = sortComments(allComments)
}

const BlogsReducer = (
    state = {all: {}, blog: {}},
    action
) => {
    Object.freeze(state)
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_BLOGS:
            newState.all = action.blogs
            return newState
        case RECEIVE_BLOG:
            const blog = action.blog.blog
            const comments = blog.comments
            const sortedComments = sortComments(comments)
            newState.blog = Object.assign({}, state.blog, blog)
            newState.blog.comments = sortedComments
            return newState
        case RECEIVE_NEW_BLOG:
            const blogData = action.blog.blog
            newState.all.blogs.unshift(blogData)
            newState.blog = _.cloneDeep(blogData)
            return newState
        case RECEIVE_NEW_COMMENT:
            const newComment = action.comment.comment
            const allComments = newState.blog.comments
                ? newState.blog.comments
                : new Array()
            allComments.push(newComment)
            newState.blog.comments = allComments
            replaceBlogsComments(newComment, allComments, newState.all.blogs)
            return newState
        default:
            return state
    }
}

export default BlogsReducer
