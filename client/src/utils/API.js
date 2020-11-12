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
  }
};