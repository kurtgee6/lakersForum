import axios from "axios";

const articleRequest = {

  //This function returns all the article 
  getArticle(data) {
    return axios.post('/api/article', data)
  }

}

export default articleRequest;
