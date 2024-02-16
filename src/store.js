import { createStore, action, thunk, computed } from "easy-peasy";
import api from './api/posts';


export default createStore({
    posts: [],
    setPosts: action((state, payload) => {
        state.posts = payload
    }),
    postTitle: '',
    setPostTitle: action((state, payload) => {
        state.posts = payload
    }),
    postBody: '',
    setPostBody: action((state, payload) => {
        state.posts = payload
    }),
    editTitle: '',
    setEditTitle: action((state, payload) => {
        state.posts = payload
    }),
    editBody: '',
    setEditBody: action((state, payload) => {
        state.posts = payload
    }),
    search: '',
    setSearch: action((state, payload) => {
        state.posts = payload
    }),
    searchResults: [],
    setSearchResults: action((state, payload) => {
        state.posts = payload
    }),
/* return length of post  using computed */
    postCount: computed(state => state.posts.length),
/* return post by ID */
    getPostById: computed(state => {
        return ( id => state.posts.find(post.id).toString() === id);
    }),
/* Using thunk to create a function to savePost */
/* Using call back method inside "thunk" */
    savePost: thunk( async (actions, newPost, helpers) => {
        const { posts } = helpers.getState();
        try {
            
        } catch (err) {
            
        }

    })
})