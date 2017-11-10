import articleRequest from '../utils/api/articleRequest.js';


function loadArticle(data) {
	return {
		type: 'LOAD_ARTICLE',
		payload: data
	}
}

export const grabArticle = (articleData) => {
    return dispatch => {
      articleRequest.getArticle(articleData)
      .then(res => {
            if (res.data) {
                dispatch(loadArticle(res.data))  
            }
        })
    }
}