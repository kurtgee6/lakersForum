import api from '../utils/api/articleRequest';

function loadArticle(data) {
	return {
		type: 'LOAD_ARTICLE',
		payload: data
	}
}

export const getAllArticle = () => {
    return dispatch => {
      api.getAllArticle()
        .then(res => {
          dispatch(loadArticle(res.data));
        })
    }
  }

