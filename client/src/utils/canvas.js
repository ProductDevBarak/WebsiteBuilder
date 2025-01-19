import axios from "axios";
import { backendURL } from "./server";

export const chatResponse = async (prompt) => {
  try {
    const response = await axios.post(`${backendURL}/code`, { prompt });
    return response.data;
  } catch (error) {
    console.log(error);
    return error?.response?.data || error;
  }
};
