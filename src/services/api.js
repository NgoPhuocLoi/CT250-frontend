import axios from "axios";

const commonConfig = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

export default (resourceUrl) => {
  return axios.create({
    baseURL: BASE_URL + resourceUrl,
    ...commonConfig,
  });
};
