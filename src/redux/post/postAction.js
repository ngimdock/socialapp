import {
    LOAD_POSTS,
    LOAD_POSTS_SUCCESS,
    LOAD_POST_ERROR,
    ADD_POST,
    DELETE_POST
} from "../types"

const loadPost = () => {
    return {
        type: LOAD_POSTS
    }
}

const loadPostSuccess = (posts) => {
    return {
        type: LOAD_POSTS_SUCCESS,
        payload: posts
    }
}

const loadPostError = (error) => {
    return {
        type: LOAD_POST_ERROR,
        payload: error
    }
}

const addPost = (post) => {
    return {
        type: ADD_POST,
        post
    }
}

const deletePost = (id) => {
    return {
        type: DELETE_POST,
        id
    }
}

export {
    loadPost,
    addPost,
    deletePost
}