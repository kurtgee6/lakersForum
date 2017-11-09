function getArticle(state = {}, action) {
    switch(action.type) {
      case "LOAD_ARTICLE":
        return { ...state, article: action.payload }
      default:
        return state
    }
  }

  export default getArticle;