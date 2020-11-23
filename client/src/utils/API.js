import axios from "axios";

export default {
  // Gets all usernames
  getUser: function() {
    return axios.get("/api/user");
  },
  authUser: function(userData) {
    return axios.post("/api/user/login", userData)
  },
  saveUser: function(userData) {
    return axios.post("/api/user/signup", userData)
  },
  createProfile: function(profileData) {
    return axios.post("/api/profile/createProfile", profileData)
  },
  showProfiles: function() {
    return axios.get("/api/profile/")
  },
  findProfile: function(username) {
    return axios.get(`/api/profile/${username}`)
  },
  createPost: function(userData) {
    return axios.post("/api/post/createPost", userData)
  },
  showPrevPost: function(username, nickname) {
    return axios.get(`/api/post/${username}/${nickname}`)
  },
  getNews: function() {
    return axios.get("/api/post/news")
  },
  createTown: function(townData) {
    return axios.post("/api/town/createTown", townData)
  },
  getTowns: function() {
    return axios.get("/api/town/all")
  },
  putTownUser: async function(user, nick, town) {
    return axios.put(`/api/profile/join/${user}/${nick}/${town}`)
  }
};