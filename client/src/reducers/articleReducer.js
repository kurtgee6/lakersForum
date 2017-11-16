
  export function allArticle(state = {article: []} , action) {
    
    switch(action.type) {
  
      case "LOAD_ARTICLE":
        return { ...state, article: action.payload }
  
        default:
        return state
  
      }
  
    }

