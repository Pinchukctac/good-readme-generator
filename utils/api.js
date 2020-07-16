const axios = require("axios");

const api = { 
  getUser(username) {
    const token = "b568d57def504f3375e4370b422cf822df4b4fc5"
    return axios({
      method: "get",
      url: `https://api.github.com/users/${username}`,
      headers: {
      authorization: `token ${token}`  
    }})
    .then(response => {
      return response
    })
  }
};

module.exports = api;