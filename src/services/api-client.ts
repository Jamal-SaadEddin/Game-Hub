import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "11d3ac59d0d54249b2d49deef8682d29",
  },
});
