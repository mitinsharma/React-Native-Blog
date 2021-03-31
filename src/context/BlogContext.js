import createDataContext from './createDataContext'



const blogReducer = (state, action) => {
    switch(action.type) {
        case 'add_blogpost': 
            return [...state, { id:Math.floor(Math.random() * 9999), title: action.title, content: action.content}];
        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id !== action.postID);
        default:
            return state;
    }
};

const addBlogPost = (dispatch) => {
    return (title, content, callback) => {
        dispatch({type:'add_blogpost', title, content});
        callback();
    }
}

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({type: 'delete_blogpost', postID: id});
    }
}


export const { Context, Provider } = createDataContext(
    blogReducer, 
    { addBlogPost, deleteBlogPost},
    []
);