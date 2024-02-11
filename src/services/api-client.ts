import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f739cbd97a6445689439f78ef90f78df",
  },
});