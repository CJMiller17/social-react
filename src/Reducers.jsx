export const initialState = {
    newsFeeds: null,
    profiles: null,
    posts: null,
    comments:  null,
    likes: null,
    images: null
}

const socialMediaReducer = (state, action) => {
    switch (action.type) {

      // NEWSFEEDS  
      case "CREATE newsFeed":
        return { ...state, newsFeeds: [...state.newsFeeds, action.payload] };

      case "UPDATE newsFeed":
        return {
          ...state,
          newsFeeds: state.newsFeeds.map((newsFeed) =>
            newsFeed.id === action.payload.id ? action.payload : newsFeed
          ),
        };

      case "DELETE newsFeed":
        return {
          ...state,
          newsFeeds: state.newsFeeds.filter(
            (newsFeed) => newsFeed.id !== action.payload.id
          ),
        };

      // PROFILE  
      case "CREATE profile":
            return {
                ...state,
                profiles: {
                    username: action.payload.username,
                    password: action.payload.password
                }
            };

      case "UPDATE profile":
        return {
          ...state,
          profiles: state.profiles.map((profile) =>
            profile.id === action.payload.id ? action.payload : profile
          ),
        };

      case "DELETE profile":
        return {
          ...state,
          profiles: state.profiles.filter(
            (profile) => profile.id !== action.payload.id
          ),
        };

      // POSTS
      case "CREATE post":
        return { ...state, posts: [...state.posts, action.payload] };

      case "UPDATE post":
        return {
          ...state,
          posts: state.posts.map((post) =>
            post.id === action.payload.id ? action.payload : post
          ),
        };

      case "DELETE post":
        return {
          ...state,
          posts: state.posts.filter(
            (post) => post.id !== action.payload.id
          ),
        };

      // COMMENTS
      case "CREATE comment":
        return { ...state, comments: [...state.comments, action.payload] };

      case "UPDATE comment":
        return {
          ...state,
          comments: state.comments.map((comment) =>
            comment.id === action.payload.id ? action.payload : comment
          ),
        };

      case "DELETE comment":
        return {
          ...state,
          comments: state.comments.filter(
            (comment) => comment.id !== action.payload.id
          ),
        };

      // LIKES
      case "CREATE like":
        return { ...state, likes: [...state.likes, action.payload] };

      case "UPDATE like":
        return {
          ...state,
          likes: state.likes.map((like) =>
            like.id === action.payload.id ? action.payload : like
          ),
        };

      case "DELETE like":
        return {
          ...state,
          likes: state.likes.filter(
            (like) => like.id !== action.payload.id
          ),
        };

      // IMAGES
      case "CREATE image":
        return { ...state, images: [...state.images, action.payload] };

      case "UPDATE image":
        return {
          ...state,
          images: state.images.map((image) =>
            image.id === action.payload.id ? action.payload : image
          ),
        };

      case "DELETE image":
        return {
          ...state,
          images: state.images.filter(
            (image) => image.id !== action.payload.id
          ),
        };
    }
}

export default socialMediaReducer