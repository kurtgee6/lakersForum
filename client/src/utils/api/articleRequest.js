import axios from "axios";

export default {

  //This function returns all the article 
  getArticle: function() {
    return axios.get("/api/article");
  }

  
};