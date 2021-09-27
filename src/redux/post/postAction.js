import axios from 'axios'

import {
    LOAD_POSTS,
    LOAD_POSTS_SUCCESS,
    LOAD_POST_ERROR,
    ADD_POST,
    DELETE_POST
} from "../types"

//this action display de loading modal post
const loadPost = () => {
    return {
        type: LOAD_POSTS
    }
}

//this action display post when fetch is succcess 
const loadPostSuccess = (posts) => {
    return {
        type: LOAD_POSTS_SUCCESS,
        payload: posts
    }
}

// this action display error when fetch return and error
const loadPostError = (error) => {
    return {
        type: LOAD_POST_ERROR,
        payload: error
    }
}

// this action add post
const addPost = (post) => {
    return {
        type: ADD_POST,
        post
    }
}

// this action delete post
const deletePost = (id) => {
    return {
        type: DELETE_POST,
        id
    }
}

// this action return function witch is a middleware and make side effect
const apiCallPosts = () => {
    
    return async (dispatch) => {
        dispatch(loadPost()) // display loader for wait API response
        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/photos")
            if(!response.ok){
                throw new Error("ERREUR HTTP ! status : " + response.status)
            }
            const posts = await response.json()
            const randomNum = Math.floor(Math.random() * 480)
            const somePosts = posts
                                .slice(randomNum, randomNum+10)
                                .map(({albumId, thumbnailUrl, ...otherProps}) => otherProps)

            dispatch(loadPostSuccess(somePosts))  // display post when api success fetch
        }catch(error){
            dispatch(loadPostError(error.message)) // display error when API failed fetch
        }
    }
}

export {
    loadPost,
    addPost,
    deletePost,
    apiCallPosts
}