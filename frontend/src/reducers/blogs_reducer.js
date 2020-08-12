import _ from 'lodash'

import {
    RECEIVE_BLOGS,
    RECEIVE_BLOG,
    RECEIVE_NEW_BLOG,
    RECEIVE_NEW_COMMENT,
} from '../actions/blog_actions'

const BlogsReducer = (
    state = { all: {}, blog: {}, new: undefined },
    action
) => {
    Object.freeze(state)
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_BLOGS:
            newState.all = action.blogs.data
            return newState
        case RECEIVE_BLOG:
            let comments = action.blog.data.blog.comments
            let sortedComments = comments.sort(function compare(a, b) {
                var dateA = new Date(a.createdAt)
                var dateB = new Date(b.createdAt)
                return dateA - dateB
            })

            newState.blog = action.blog.data
            newState.blog.blog.comments = sortedComments
            return newState
        case RECEIVE_NEW_BLOG:
            const blogData = action.blog.data.blog
            //Shift new blog data into newState
            newState.all.blogs.unshift(blogData)
            newState.blog = _.cloneDeep(action.blog.data)
            return newState
        
        case RECEIVE_NEW_COMMENT:
            const commentData = action.comment.data.comment
            if (!newState.blog.blog.comments) {
                newState.blog.blog.comments = [commentData]
            } else {
                newState.blog.blog.comments.unshift(commentData)
                // Find old blog and replace comment count
                const index = _.findIndex(newState.all.blogs, {
                    id: commentData.blogId,
                })
                comments = newState.all.blogs[index].comments.push(commentData)
                newState.all.blogs[index].comments = comments
            }
            return newState
        default:
            return state
    }
}

export default BlogsReducer
