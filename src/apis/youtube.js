import axios from "axios";

const KEY = "AIzaSyCRv1U_s7iEHt05Sw6NwWGrH3JB2HdJPxc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
