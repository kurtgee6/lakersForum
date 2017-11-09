import axios from "axios";

const articleRequest = {

  //This function returns all the article 
  getArticle(data) {
    return axios.post('/loadArticle', data)
  }

}

export default articleRequest;
