import createDataContext from './createDataContext'
import jsonServer from '../api/jsonServer'


const blogReducer = (state, action) => {
    switch(action.type) {
        case 'add_blogpost': 
            return [...state, { id:Math.floor(Math.random() * 9999), title: action.title, content: action.content}];
        case 'update_blogpost': 
            return state.map(blogPost => { return (blogPost.id === action.payload.id) ? action.payload : blogPost });
        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id !== action.postID);
        case 'get_blogposts':
            return action.payload;
        default:
            return state;
    }
};

const updateBlogPost = (dispatch) => {
    return (id, title, content, callback) => {
        dispatch({type:'update_blogpost', payload: { id, title, content }});
        callback();
    }
}

const addBlogPost = (dispatch) => {
    return async (title, content, callback) => {        
        await jsonServer.post('/blogposts/',{"title": title, "content": content});
        //dispatch({type:'add_blogpost', title, content});
        callback();
    }
}

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({type: 'delete_blogpost', postID: id});
    }
}

const getBlogPosts = (dispatch) => {
    return async () => {
        const response = await jsonServer.get('/blogposts');
        dispatch({type: 'get_blogposts', payload: response.data});
    };
}


export const { Context, Provider } = createDataContext(
    blogReducer, 
    { addBlogPost, deleteBlogPost, updateBlogPost, getBlogPosts},
    []
);