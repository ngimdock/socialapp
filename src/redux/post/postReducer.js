import {
    LOAD_POSTS,
    LOAD_POSTS_SUCCESS,
    LOAD_POST_ERROR,
    ADD_POST,
    DELETE_POST
} from "../types"

const initialState = {
    isLoadingPost: false,
    posts: [],
    errorLoadingPost: ""
}

const postReducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_POSTS:
            return {
                ...state,
                isLoadingPost: true,
            }
        case LOAD_POSTS_SUCCESS: 
            return {
                ...state,
                isLoadingPost: false,
                posts: action.payload,
                errorLoadingPost: ""
            }
        case LOAD_POST_ERROR:
            return {
                isLoadingPost: false,
                errorLoadingPost: action.payload,
                posts: []
            }
        case ADD_POST:
            return {
                ...state,
                posts: [action.post, ...state.posts]
            }
        case DELETE_POST:
            const newPost = state.posts.filter(post => post.id !== action.id)
            return {
                ...state,
                posts: newPost
            }
        default:
            return state
    }
}

export default postReducer