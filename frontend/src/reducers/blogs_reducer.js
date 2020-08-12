import {
    RECEIVE_BLOGS,
    RECEIVE_BLOG,
    RECEIVE_NEW_BLOG,
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
            newState.blog = action.blog.data
            return newState
        case RECEIVE_NEW_BLOG:
            const blogData = action.blog.data.blog
            newState.all.blogs.push(blogData)
            newState.blog = action.blog.data
            return newState
        default:
            return state
    }
}

export default BlogsReducer
