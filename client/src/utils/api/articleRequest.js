import axios from "axios";

const articleRequest = {

  //This function returns all the article 
  getAllArticle: function() {
    return axios.get('/api/article');
  }
}

export default articleRequest;
