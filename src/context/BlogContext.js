import createDataContext from './createDataContext'



const blogReducer = (state, action) => {
    switch(action.type) {
        case 'add_blogpost': 
            return [...state, { id:Math.floor(Math.random() * 9999), title: `Blog Post ${state.length + 1}`}];
        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id !== action.postID);
        default:
            return state;
    }
};

const addBlogPost = (dispatch) => {
    return () => {
        dispatch({type:'add_blogpost'});
    }
}

const deleteBlogPost = (dispatch) => {
    return () => {
        dispatch({type: 'delete_blogpost', postID: id});
    }
}

export const { Context, Provider } = createDataContext(
    blogReducer, 
    { addBlogPost, deleteBlogPost },
    []
);