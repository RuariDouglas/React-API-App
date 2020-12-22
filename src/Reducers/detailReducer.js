// It's important to always either declare an initial state variable or pass in a value directly into the reduce function as a parameter. REMEMBER - if you want to map over this state, ensure the initial value of that property is an empty array otherwise it will return an error.
// The isLoading property is how we will choose to render certain elements after they load. By toggling truthy and falsey values we are able to say "If isLoading = false; So if we have finished loading, then do something. And vice versa for the truthy value"
const initialState = {
  game: { platforms: [] },
  screenshots: { results: [] },
  isLoading: true,
};

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        game: action.payload.game,
        screenshots: action.payload.screenshots,
        isLoading: false,
      };
    case "LOADING_DETAIL":
      return {
        ...state,
        isLoading: true,
      };

    default:
      return { ...state };
  }
};

export default detailReducer;
