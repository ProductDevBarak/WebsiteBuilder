import axios from "axios";
import { backendURL } from "./server";

export const createChat = async (prompt, navigate) => {
  try {
    const response = await axios.post(`${backendURL}/code`, { prompt });
    return response.data;
  } catch (error) {
    console.log(error);
    return error?.response?.data || error;
  }
};
